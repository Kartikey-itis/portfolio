$sourceDir = "C:\Users\welcome\.gemini\antigravity\brain\a005d00b-6d13-4aad-95b6-e453f32be86d"
$destDir = "a:\Code\AIweb\my-react-app\src\assets\images"
$heroSource = Join-Path $sourceDir "hero_portrait_1768349276066.png"
$minimalSource = Join-Path $sourceDir "architecture_minimal_1768349294355.png"

Write-Host "Copying assets..."

Copy-Item $heroSource -Destination (Join-Path $destDir "hero.png") -Force
Copy-Item $minimalSource -Destination (Join-Path $destDir "bento1.png") -Force
Copy-Item $heroSource -Destination (Join-Path $destDir "scatter1.png") -Force
Copy-Item $minimalSource -Destination (Join-Path $destDir "scatter2.png") -Force
Copy-Item $heroSource -Destination (Join-Path $destDir "scatter3.png") -Force
Copy-Item $minimalSource -Destination (Join-Path $destDir "scatter4.png") -Force
Copy-Item $heroSource -Destination (Join-Path $destDir "scatter5.png") -Force

Write-Host "Listing destination:"
Get-ChildItem $destDir
