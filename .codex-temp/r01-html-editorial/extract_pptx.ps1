param(
    [Parameter(Mandatory = $true)]
    [string]$PptxPath,

    [Parameter(Mandatory = $true)]
    [string]$OutputDirectory
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.Drawing

$mediaDirectory = Join-Path $OutputDirectory 'media'
New-Item -ItemType Directory -Force -Path $mediaDirectory | Out-Null

$zip = [System.IO.Compression.ZipFile]::OpenRead($PptxPath)
try {
    $entryByName = @{}
    foreach ($entry in $zip.Entries) {
        $entryByName[$entry.FullName] = $entry
    }

    $slideEntries = @($zip.Entries |
        Where-Object { $_.FullName -match '^ppt/slides/slide(\d+)\.xml$' } |
        Sort-Object { [int]([regex]::Match($_.FullName, 'slide(\d+)').Groups[1].Value) })

    $slides = foreach ($slideEntry in $slideEntries) {
        $slideNumber = [int]([regex]::Match($slideEntry.FullName, 'slide(\d+)').Groups[1].Value)
        $reader = [System.IO.StreamReader]::new($slideEntry.Open())
        try { $slideXmlText = $reader.ReadToEnd() } finally { $reader.Dispose() }
        [xml]$slideXml = $slideXmlText
        $ns = [System.Xml.XmlNamespaceManager]::new($slideXml.NameTable)
        $ns.AddNamespace('a', 'http://schemas.openxmlformats.org/drawingml/2006/main')
        $textRuns = @($slideXml.SelectNodes('//a:t', $ns) | ForEach-Object { $_.InnerText })

        $relationshipPath = "ppt/slides/_rels/slide$slideNumber.xml.rels"
        $media = @()
        if ($entryByName.ContainsKey($relationshipPath)) {
            $relationshipEntry = $entryByName[$relationshipPath]
            $relationshipReader = [System.IO.StreamReader]::new($relationshipEntry.Open())
            try { $relationshipXmlText = $relationshipReader.ReadToEnd() } finally { $relationshipReader.Dispose() }
            [xml]$relationshipXml = $relationshipXmlText
            foreach ($relationship in $relationshipXml.Relationships.Relationship) {
                if ($relationship.Type -like '*/image') {
                    $media += [System.IO.Path]::GetFileName([string]$relationship.Target)
                }
            }
        }

        [pscustomobject]@{
            slide = $slideNumber
            text = $textRuns
            media = @($media | Sort-Object -Unique)
        }
    }

    $mediaItems = foreach ($mediaEntry in $zip.Entries | Where-Object { $_.FullName -like 'ppt/media/*' -and -not $_.FullName.EndsWith('/') }) {
        $destination = Join-Path $mediaDirectory $mediaEntry.Name
        $sourceStream = $mediaEntry.Open()
        try {
            $destinationStream = [System.IO.File]::Create($destination)
            try { $sourceStream.CopyTo($destinationStream) } finally { $destinationStream.Dispose() }
        } finally {
            $sourceStream.Dispose()
        }

        $width = $null
        $height = $null
        try {
            $image = [System.Drawing.Image]::FromFile($destination)
            try {
                $width = $image.Width
                $height = $image.Height
            } finally {
                $image.Dispose()
            }
        } catch {
            # Keep the original media even if System.Drawing cannot inspect it.
        }

        [pscustomobject]@{
            name = $mediaEntry.Name
            bytes = $mediaEntry.Length
            width = $width
            height = $height
            slides = @($slides | Where-Object { $_.media -contains $mediaEntry.Name } | ForEach-Object { $_.slide })
        }
    }

    $inventory = [pscustomobject]@{
        source = $PptxPath
        slideCount = $slides.Count
        slides = $slides
        media = $mediaItems
    }

    $inventory | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath (Join-Path $OutputDirectory 'inventory.json') -Encoding utf8

    $textLines = foreach ($slide in $slides) {
        "===== DIAPOSITIVE $($slide.slide) ====="
        $slide.text
        if ($slide.media.Count -gt 0) {
            "[Médias : $($slide.media -join ', ')]"
        }
        ''
    }
    $textLines | Set-Content -LiteralPath (Join-Path $OutputDirectory 'slides-text.txt') -Encoding utf8
} finally {
    $zip.Dispose()
}
