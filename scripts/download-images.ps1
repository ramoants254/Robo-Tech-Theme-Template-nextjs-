# Create images directory if it doesn't exist
$imagesDir = "..\public\images"
if (-not (Test-Path $imagesDir)) {
    New-Item -ItemType Directory -Path $imagesDir
}

# Image URLs (replace these with actual robot images)
$images = @{
    "tesla-optimus.jpg" = "https://example.com/tesla-optimus.jpg"
    "spot.jpg" = "https://example.com/spot.jpg"
    "atlas.jpg" = "https://example.com/atlas.jpg"
    "ameca.jpg" = "https://example.com/ameca.jpg"
    "stretch.jpg" = "https://example.com/stretch.jpg"
    "digit.jpg" = "https://example.com/digit.jpg"
}

# Download images
foreach ($image in $images.GetEnumerator()) {
    $outputPath = Join-Path $imagesDir $image.Key
    Invoke-WebRequest -Uri $image.Value -OutFile $outputPath
}
