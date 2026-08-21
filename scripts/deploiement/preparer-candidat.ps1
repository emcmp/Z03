[CmdletBinding()]
param([switch]$DryRun)

$ErrorActionPreference = 'Stop'
. (Join-Path $PSScriptRoot 'commun.ps1')

$repositoryRoot = Get-RepositoryRoot -StartPath $PSScriptRoot
$null = Start-DeploymentLog -Operation 'preparation-candidat' -DryRun $DryRun.IsPresent -RepositoryRoot $repositoryRoot

try {
    Write-DeploymentMessage -Message 'Préparation du candidat; cegep/main ne sera pas modifié.'
    Assert-CleanWorktree -RepositoryRoot $repositoryRoot
    Assert-CurrentBranch -ExpectedBranch 'main' -RepositoryRoot $repositoryRoot
    Assert-ExpectedRemotes -RepositoryRoot $repositoryRoot
    Assert-PushDefaultOrigin -RepositoryRoot $repositoryRoot
    Update-OriginRefs -RepositoryRoot $repositoryRoot
    Update-OfficialRefs -RepositoryRoot $repositoryRoot

    $headSha = Get-CommitSha -Reference 'HEAD' -RepositoryRoot $repositoryRoot
    $originSha = Get-CommitSha -Reference 'origin/main' -RepositoryRoot $repositoryRoot
    $officialShaBefore = Get-CommitSha -Reference 'cegep/main' -RepositoryRoot $repositoryRoot
    Write-DeploymentState -Name 'origin/main' -Value $originSha
    Write-DeploymentState -Name 'cegep/main avant' -Value $officialShaBefore
    if ($headSha -ne $originSha) {
        throw "ARRÊT — HEAD ($headSha) doit être identique à origin/main ($originSha)."
    }

    $candidates = @(Get-ActiveCandidates -RepositoryRoot $repositoryRoot)
    Assert-NoActiveCandidate -Candidates $candidates
    Assert-FastForwardPossible -CurrentSha $officialShaBefore -TargetSha $originSha -RepositoryRoot $repositoryRoot

    Invoke-ValidationSuite -RepositoryRoot $repositoryRoot -GitHubRepository $script:PersonalRepository
    Assert-CleanWorktree -RepositoryRoot $repositoryRoot
    $run = Get-SuccessfulDeploymentRun -Repository $script:PersonalRepository -Sha $originSha -RepositoryRoot $repositoryRoot
    $null = Assert-WorkflowJobsSucceeded -Run $run -Repository $script:PersonalRepository -RequireDeployment -RepositoryRoot $repositoryRoot
    Test-SiteRoutes -BaseUrl 'https://emcmp.github.io/Z03/' -Routes (Get-CriticalRoutes)

    $shortSha = $originSha.Substring(0, 7)
    $candidateName = 'publication/candidat-{0}-{1}' -f (Get-Date -Format 'yyyy-MM-dd'), $shortSha
    Write-DeploymentState -Name 'candidat' -Value $candidateName
    Write-DeploymentState -Name 'SHA candidat' -Value $originSha

    $activityBefore = Get-OfficialActivitySnapshot -RepositoryRoot $repositoryRoot
    $refspec = '{0}:refs/heads/{1}' -f $originSha, $candidateName
    $null = Invoke-CheckedCommand -Command 'git' -Arguments @('push', '--dry-run', 'cegep', $refspec) -WorkingDirectory $repositoryRoot

    if ($DryRun) {
        Write-DeploymentMessage -Level 'ATTENTION' -Message 'DryRun : aucun push réel; aucun candidat créé.'
        Write-DeploymentState -Name 'cegep/main après' -Value $officialShaBefore
        Write-DeploymentState -Name 'résultat final' -Value 'DRY-RUN RÉUSSI — CANDIDAT NON CRÉÉ — PRODUCTION NON MODIFIÉE'
        Write-Host 'DRY-RUN RÉUSSI — CANDIDAT NON CRÉÉ — PRODUCTION NON MODIFIÉE'
        exit 0
    }

    $null = Invoke-CheckedCommand -Command 'git' -Arguments @('push', 'cegep', $refspec) -WorkingDirectory $repositoryRoot
    $created = @(Get-OfficialBranches -Pattern "refs/heads/$candidateName" -RepositoryRoot $repositoryRoot)
    if ($created.Count -ne 1 -or $created[0].Sha -ne $originSha) {
        throw "ARRÊT — le candidat distant n'a pas été créé exactement au SHA $originSha."
    }

    $mainAfter = @(Get-OfficialBranches -Pattern 'refs/heads/main' -RepositoryRoot $repositoryRoot)
    if ($mainAfter.Count -ne 1 -or $mainAfter[0].Sha -ne $officialShaBefore) {
        throw 'ARRÊT — cegep/main a changé pendant la préparation.'
    }
    Start-Sleep -Seconds 10
    $activityAfter = Get-OfficialActivitySnapshot -RepositoryRoot $repositoryRoot
    Assert-OfficialActivityUnchanged -Before $activityBefore -After $activityAfter

    Write-DeploymentState -Name 'cegep/main après' -Value $mainAfter[0].Sha
    Write-DeploymentState -Name 'URL vérifiée' -Value 'https://emcmp.github.io/Z03/'
    Write-DeploymentState -Name 'résultat final' -Value 'CANDIDAT OFFICIEL PRÊT — PRODUCTION NON MODIFIÉE'
    Write-Host 'CANDIDAT OFFICIEL PRÊT — PRODUCTION NON MODIFIÉE'
}
catch {
    Write-DeploymentMessage -Level 'ERREUR' -Message $_.Exception.Message
    Write-DeploymentState -Name 'résultat final' -Value 'ÉCHEC DE LA PRÉPARATION — PRODUCTION NON MODIFIÉE'
    exit 1
}
