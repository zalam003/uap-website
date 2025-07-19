#!/bin/bash

# Script to update TrusteesList component image paths
# Run this after finding the actual image URLs

echo "🔄 Updating TrusteesList component image paths..."

# Path to the TrusteesList component
COMPONENT_PATH="../src/components/trustees/TrusteesList.tsx"

if [ ! -f "$COMPONENT_PATH" ]; then
    echo "❌ TrusteesList component not found at $COMPONENT_PATH"
    exit 1
fi

# Update all image paths from /images/trustees/ to /images/governors/
sed -i 's|/images/trustees/|/images/governors/|g' "$COMPONENT_PATH"

echo "✅ Updated image paths in TrusteesList component"
echo "📝 All /images/trustees/ paths changed to /images/governors/"
echo ""
echo "🔍 Next steps:"
echo "1. Inspect UAP website to find actual image filenames"
echo "2. Replace placeholder filenames with actual ones"
echo "3. Run download script to get the images"
