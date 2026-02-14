#!/bin/bash

echo "Converting HEIC files to PNG..."

cd /Users/dawio/Downloads/WorkStation-Vue-TypeScript/public/products

# Find all HEIC files and convert them to PNG
find . -type f \( -name "*.HEIC" -o -name "*.heic" \) | while read file; do
    echo "Converting: $file"
    basename="${file%.*}"
    sips -s format png "$file" --out "${basename}.png" 2>&1 | grep -v "^$"
done

echo "HEIC to PNG conversion complete!"
echo "Now converting PNG to WebP using Node.js..."

cd /Users/dawio/Downloads/WorkStation-Vue-TypeScript
node convert-images.js

echo "All conversions complete!"
