[CmdletBinding()]
param([switch]$DryRun)

$ErrorActionPreference = 'Stop'
. (Join-Path $PSScriptRoot 'commun.ps1')

$repositoryRoot = Get-RepositoryRoot -StartPath $PSScriptRoot
$null = Start-DeploymentLog -Operation 'publication' -DryRun $DryRun.IsPresent -RepositoryRoot $repositoryRoot
$productionUpdated = $false
$worktreePath = $null

try {
    Write-DeploymentMessage -Message 'Publication contrôlée du candidat exact.'
    Assert-CleanWorktree -RepositoryRoot $repositoryRoot
    Assert-ExpectedRemotes -RepositoryRoot $repositoryRoot
    Assert-PushDefaultOrigin -RepositoryRoot $repositoryRoot
    Update-OriginRefs -RepositoryRoot $repositoryRoot
    Update-OfficialRefs -RepositoryRoot $repositoryRoot

    $originSha = Get-CommitSha -Reference 'origin/main' -RepositoryRoot $repositoryRoot
    $officialShaBefore = Get-CommitSha -Reference 'cegep/main' -RepositoryRoot $repositoryRoot
    Write-DeploymentState -Name 'origin/main' -Value $originSha
    Write-DeploymentState -Name 'cegep/main avant' -Value $officialShaBefore

    $candidate = Get-SingleActiveCandidate -Candidates @(Get-ActiveCandidates -RepositoryRoot $repositoryRoot)
    Assert-CandidateNameMatchesSha -CandidateName $candidate.Name -Sha $candidate.Sha
    Assert-CommitExists -Sha $candidate.Sha -RepositoryRoot $repositoryRoot
    Assert-CandidateReachableFromOrigin -CandidateSha $candidate.Sha -RepositoryRoot $repositoryRoot
    Assert-FastForwardPossible -CurrentSha $officialShaBefore -TargetSha $candidate.Sha -RepositoryRoot $repositoryRoot

    Write-DeploymentState -Name 'Production actuelle' -Value 'cegep/main'
    Write-DeploymentState -Name 'Candidat' -Value $candidate.Name
    Write-DeploymentState -Name 'SHA actuel' -Value $officialShaBefore
    Write-DeploymentState -Name 'SHA candidat' -Value $candidate.Sha

    $worktreePath = New-DetachedValidationWorktree -Sha $candidate.Sha -RepositoryRoot $repositoryRoot
    Invoke-ValidationSuite -RepositoryRoot $worktreePath -GitHubRepository $script:OfficialRepository
    $null = Invoke-CheckedCommand -Command 'git' -Arguments @('diff', '--check') -WorkingDirectory $worktreePath
    Assert-CleanWorktree -RepositoryRoot $worktreePath
    Remove-DetachedValidationWorktree -Path $worktreePath -RepositoryRoot $repositoryRoot
    $worktreePath = $null

    $mainRefspec = '{0}:refs/heads/main' -f $candidate.Sha
    $null = Invoke-CheckedCommand -Command 'git' -Arguments @('push', '--dry-run', 'cegep', $mainRefspec) -WorkingDirectory $repositoryRoot

    if ($DryRun) {
        Write-DeploymentMessage -Level 'ATTENTION' -Message 'DryRun : cegep/main, le candidat et les traces sont inchangés.'
        Write-DeploymentState -Name 'cegep/main après' -Value $officialShaBefore
        Write-DeploymentState -Name 'résultat final' -Value 'DRY-RUN DE PUBLICATION RÉUSSI — PRODUCTION INCHANGÉE'
        Write-Host 'DRY-RUN DE PUBLICATION RÉUSSI — PRODUCTION INCHANGÉE'
        exit 0
    }

    $null = Invoke-CheckedCommand -Command 'git' -Arguments @('push', 'cegep', $mainRefspec) -WorkingDirectory $repositoryRoot
    $productionUpdated = $true
    $mainAfterPush = @(Get-OfficialBranches -Pattern 'refs/heads/main' -RepositoryRoot $repositoryRoot)
    if ($mainAfterPush.Count -ne 1 -or $mainAfterPush[0].Sha -ne $candidate.Sha) {
        throw "cegep/main ne pointe pas sur le candidat après le push."
    }

    $run = Get-SuccessfulDeploymentRun -Repository $script:OfficialRepository -Sha $candidate.Sha -Wait -RepositoryRoot $repositoryRoot
    $details = Assert-WorkflowJobsSucceeded -Run $run -Repository $script:OfficialRepository -RequireDeployment -RepositoryRoot $repositoryRoot
    Test-SiteRoutes -BaseUrl 'https://info.cegepmontpetit.ca/z03/' -Routes (Get-CriticalRoutes) -CheckPublicNavigation -CheckStaticAssets

    $shortSha = $candidate.Sha.Substring(0, 7)
    $publishedName = 'publication/publie-{0}-{1}' -f (Get-Date -Format 'yyyy-MM-dd'), $shortSha
    $published = @(Get-OfficialBranches -Pattern "refs/heads/$publishedName" -RepositoryRoot $repositoryRoot)
    if ($published.Count -gt 0) {
        if ($published.Count -ne 1 -or $published[0].Sha -ne $candidate.Sha) {
            throw "La trace $publishedName existe mais ne pointe pas sur le SHA publié."
        }
        Write-DeploymentMessage -Level 'OK' -Message 'Trace publiée existante et immuable confirmée.'
    }
    else {
        $publishedRefspec = '{0}:refs/heads/{1}' -f $candidate.Sha, $publishedName
        $null = Invoke-CheckedCommand -Command 'git' -Arguments @('push', '--dry-run', 'cegep', $publishedRefspec) -WorkingDirectory $repositoryRoot
        $null = Invoke-CheckedCommand -Command 'git' -Arguments @('push', 'cegep', $publishedRefspec) -WorkingDirectory $repositoryRoot
        $published = @(Get-OfficialBranches -Pattern "refs/heads/$publishedName" -RepositoryRoot $repositoryRoot)
        if ($published.Count -ne 1 -or $published[0].Sha -ne $candidate.Sha) {
            throw 'La trace publiée nʼa pas été créée correctement.'
        }
    }

    $deleteRefspec = ':refs/heads/{0}' -f $candidate.Name
    $null = Invoke-CheckedCommand -Command 'git' -Arguments @('push', '--dry-run', 'cegep', $deleteRefspec) -WorkingDirectory $repositoryRoot
    $null = Invoke-CheckedCommand -Command 'git' -Arguments @('push', 'cegep', $deleteRefspec) -WorkingDirectory $repositoryRoot
    if (@(Get-ActiveCandidates -RepositoryRoot $repositoryRoot).Count -ne 0) {
        throw 'Le candidat actif nʼa pas été retiré après la publication.'
    }

    Write-DeploymentState -Name 'candidat' -Value $candidate.Name
    Write-DeploymentState -Name 'SHA candidat' -Value $candidate.Sha
    Write-DeploymentState -Name 'cegep/main après' -Value $candidate.Sha
    Write-DeploymentState -Name 'workflow GitHub Actions' -Value $details.url
    Write-DeploymentState -Name 'URL vérifiée' -Value 'https://info.cegepmontpetit.ca/z03/'
    Write-DeploymentState -Name 'résultat final' -Value 'PRODUCTION RÉUSSIE — CANDIDAT PUBLIÉ ET ARCHIVÉ'
    Write-Host 'PRODUCTION RÉUSSIE — CANDIDAT PUBLIÉ ET ARCHIVÉ'
}
catch {
    if ($worktreePath) {
        try { Remove-DetachedValidationWorktree -Path $worktreePath -RepositoryRoot $repositoryRoot } catch { Write-DeploymentMessage -Level 'ATTENTION' -Message $_.Exception.Message }
    }
    Write-DeploymentMessage -Level 'ERREUR' -Message $_.Exception.Message
    if ($productionUpdated) {
        Write-DeploymentMessage -Level 'ATTENTION' -Message 'La production a été mise à jour. Aucun retour arrière automatique, aucun force push et aucun autre SHA ne seront publiés.'
        Write-DeploymentState -Name 'résultat final' -Value 'ÉCHEC APRÈS MISE À JOUR — INTERVENTION REQUISE'
    }
    else {
        Write-DeploymentState -Name 'résultat final' -Value 'ÉCHEC AVANT PUBLICATION — PRODUCTION INCHANGÉE'
    }
    exit 1
}
