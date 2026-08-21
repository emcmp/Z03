[CmdletBinding()]
param([switch]$DryRun)

$ErrorActionPreference = 'Stop'
. (Join-Path $PSScriptRoot 'commun.ps1')

$repositoryRoot = Get-RepositoryRoot -StartPath $PSScriptRoot
$null = Start-DeploymentLog -Operation 'annulation-candidat' -DryRun $DryRun.IsPresent -RepositoryRoot $repositoryRoot

try {
    Write-DeploymentMessage -Message 'Annulation contrôlée du seul candidat actif.'
    Assert-CleanWorktree -RepositoryRoot $repositoryRoot
    Assert-ExpectedRemotes -RepositoryRoot $repositoryRoot
    Assert-PushDefaultOrigin -RepositoryRoot $repositoryRoot
    Update-OfficialRefs -RepositoryRoot $repositoryRoot

    $originSha = Get-CommitSha -Reference 'origin/main' -RepositoryRoot $repositoryRoot
    $officialShaBefore = Get-CommitSha -Reference 'cegep/main' -RepositoryRoot $repositoryRoot
    Write-DeploymentState -Name 'origin/main' -Value $originSha
    Write-DeploymentState -Name 'cegep/main avant' -Value $officialShaBefore

    $candidate = Get-SingleActiveCandidate -Candidates @(Get-ActiveCandidates -RepositoryRoot $repositoryRoot)
    Assert-CandidateNameMatchesSha -CandidateName $candidate.Name -Sha $candidate.Sha
    $shortSha = $candidate.Sha.Substring(0, 7)
    $cancelledName = 'publication/annule-{0}-{1}' -f (Get-Date -Format 'yyyy-MM-dd'), $shortSha
    Write-DeploymentState -Name 'candidat' -Value $candidate.Name
    Write-DeploymentState -Name 'SHA candidat' -Value $candidate.Sha

    $cancelled = @(Get-OfficialBranches -Pattern "refs/heads/$cancelledName" -RepositoryRoot $repositoryRoot)
    if ($cancelled.Count -gt 0 -and ($cancelled.Count -ne 1 -or $cancelled[0].Sha -ne $candidate.Sha)) {
        throw "ARRÊT — la trace $cancelledName existe à un autre SHA."
    }

    $traceRefspec = '{0}:refs/heads/{1}' -f $candidate.Sha, $cancelledName
    if ($cancelled.Count -eq 0) {
        $null = Invoke-CheckedCommand -Command 'git' -Arguments @('push', '--dry-run', 'cegep', $traceRefspec) -WorkingDirectory $repositoryRoot
    }
    $deleteRefspec = ':refs/heads/{0}' -f $candidate.Name
    $null = Invoke-CheckedCommand -Command 'git' -Arguments @('push', '--dry-run', 'cegep', $deleteRefspec) -WorkingDirectory $repositoryRoot

    if ($DryRun) {
        Write-DeploymentMessage -Level 'ATTENTION' -Message 'DryRun : aucune trace créée et aucun candidat supprimé.'
        Write-DeploymentState -Name 'cegep/main après' -Value $officialShaBefore
        Write-DeploymentState -Name 'résultat final' -Value 'DRY-RUN DʼANNULATION RÉUSSI — PRODUCTION INCHANGÉE'
        Write-Host 'DRY-RUN DʼANNULATION RÉUSSI — PRODUCTION INCHANGÉE'
        exit 0
    }

    if ($cancelled.Count -eq 0) {
        $null = Invoke-CheckedCommand -Command 'git' -Arguments @('push', 'cegep', $traceRefspec) -WorkingDirectory $repositoryRoot
        $cancelled = @(Get-OfficialBranches -Pattern "refs/heads/$cancelledName" -RepositoryRoot $repositoryRoot)
    }
    if ($cancelled.Count -ne 1 -or $cancelled[0].Sha -ne $candidate.Sha) {
        throw 'La trace dʼannulation nʼa pas été créée correctement.'
    }

    $null = Invoke-CheckedCommand -Command 'git' -Arguments @('push', 'cegep', $deleteRefspec) -WorkingDirectory $repositoryRoot
    if (@(Get-ActiveCandidates -RepositoryRoot $repositoryRoot).Count -ne 0) {
        throw 'Le candidat actif nʼa pas été supprimé correctement.'
    }
    $mainAfter = @(Get-OfficialBranches -Pattern 'refs/heads/main' -RepositoryRoot $repositoryRoot)
    if ($mainAfter.Count -ne 1 -or $mainAfter[0].Sha -ne $officialShaBefore) {
        throw 'ARRÊT — cegep/main a changé pendant lʼannulation.'
    }

    Write-DeploymentState -Name 'cegep/main après' -Value $mainAfter[0].Sha
    Write-DeploymentState -Name 'résultat final' -Value 'CANDIDAT ANNULÉ — PRODUCTION INCHANGÉE'
    Write-Host 'CANDIDAT ANNULÉ — PRODUCTION INCHANGÉE'
}
catch {
    Write-DeploymentMessage -Level 'ERREUR' -Message $_.Exception.Message
    Write-DeploymentState -Name 'résultat final' -Value 'ÉCHEC DE LʼANNULATION — PRODUCTION INCHANGÉE'
    exit 1
}
