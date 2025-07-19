#!/bin/bash

# Directory to save the images
TARGET_DIR="../public/images/governors"

# Base URL
BASE_URL="https://uap-bd.edu/img/governors"

# Create the target directory if it doesn't exist
mkdir -p "$TARGET_DIR"

echo "Fetching image list from $BASE_URL ..."

# Get the HTML and extract image filenames
curl -s "$BASE_URL/" | grep -oP '(?<=href=")[^"]+\.(jpg|jpeg|png|gif)' | while read -r img; do
    # Skip parent directory link if present
    if [[ "$img" == ".." ]]; then
        continue
    fi

    echo "Downloading $img ..."
    curl -s -o "$TARGET_DIR/$img" "$BASE_URL/$img"
done

echo "All images downloaded to $TARGET_DIR."
