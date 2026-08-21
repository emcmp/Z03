[CmdletBinding()]
param([switch]$DryRun)

$ErrorActionPreference = 'Stop'
. (Join-Path $PSScriptRoot 'commun.ps1')

$repositoryRoot = Get-RepositoryRoot -StartPath $PSScriptRoot
$null = Start-DeploymentLog -Operation 'verification-preview' -DryRun $DryRun.IsPresent -RepositoryRoot $repositoryRoot

try {
    Write-DeploymentMessage -Message 'Vérification de la version personnelle; aucune écriture vers cegep.'
    Assert-CleanWorktree -RepositoryRoot $repositoryRoot
    Assert-ExpectedRemotes -RepositoryRoot $repositoryRoot
    Assert-PushDefaultOrigin -RepositoryRoot $repositoryRoot
    Assert-CurrentBranch -ExpectedBranch 'main' -RepositoryRoot $repositoryRoot

    Update-OriginRefs -RepositoryRoot $repositoryRoot
    Update-OfficialRefs -RepositoryRoot $repositoryRoot
    $headBefore = Get-CommitSha -Reference 'HEAD' -RepositoryRoot $repositoryRoot
    $originSha = Get-CommitSha -Reference 'origin/main' -RepositoryRoot $repositoryRoot
    $officialSha = Get-CommitSha -Reference 'cegep/main' -RepositoryRoot $repositoryRoot
    Write-DeploymentState -Name 'origin/main' -Value $originSha
    Write-DeploymentState -Name 'cegep/main avant' -Value $officialSha

    if ($headBefore -ne $originSha) {
        if (-not (Test-GitAncestor -Ancestor $headBefore -Descendant $originSha -RepositoryRoot $repositoryRoot)) {
            throw 'ARRÊT — main local ne peut pas avancer rapidement vers origin/main.'
        }
        if ($DryRun) {
            throw "DRY-RUN — un pull --ff-only serait requis ($headBefore -> $originSha); aucune modification effectuée."
        }
        $null = Invoke-CheckedCommand -Command 'git' -Arguments @('pull', '--ff-only', 'origin', 'main') -WorkingDirectory $repositoryRoot
    }

    $headSha = Get-CommitSha -Reference 'HEAD' -RepositoryRoot $repositoryRoot
    if ($headSha -ne $originSha) {
        throw "ARRÊT — HEAD ($headSha) diffère de origin/main ($originSha)."
    }

    Invoke-ValidationSuite -RepositoryRoot $repositoryRoot -GitHubRepository $script:PersonalRepository
    Assert-CleanWorktree -RepositoryRoot $repositoryRoot

    $run = Get-SuccessfulDeploymentRun -Repository $script:PersonalRepository -Sha $headSha -RepositoryRoot $repositoryRoot
    $details = Assert-WorkflowJobsSucceeded -Run $run -Repository $script:PersonalRepository -RequireDeployment -RepositoryRoot $repositoryRoot
    Test-SiteRoutes -BaseUrl 'https://emcmp.github.io/Z03/' -Routes (Get-CriticalRoutes)

    Write-DeploymentState -Name 'candidat' -Value $null
    Write-DeploymentState -Name 'SHA candidat' -Value $null
    Write-DeploymentState -Name 'cegep/main après' -Value $officialSha
    Write-DeploymentState -Name 'URL vérifiée' -Value 'https://emcmp.github.io/Z03/'
    Write-DeploymentState -Name 'résultat final' -Value 'PRÉVISUALISATION PERSONNELLE VALIDÉE — PRODUCTION NON TOUCHÉE'
    Write-Host 'PRÉVISUALISATION PERSONNELLE VALIDÉE — PRODUCTION NON TOUCHÉE'
}
catch {
    Write-DeploymentMessage -Level 'ERREUR' -Message $_.Exception.Message
    Write-DeploymentState -Name 'résultat final' -Value 'ÉCHEC DE LA VÉRIFICATION — PRODUCTION NON TOUCHÉE'
    exit 1
}
