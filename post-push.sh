#!/bin/bash

# Run pnpm run generate after git push
if [ "$1" == "origin" ] && [ "$2" == "HEAD" ]; then
    echo "Executing 'pnpm run generate' after git push..."
    pnpm run generate

    # Check if pnpm run generate succeeded
    if [ $? -eq 0 ]; then
        echo "pnpm run generate completed successfully. Creating zip archive..."

        # Create a timestamp for the zip file name
        TIMESTAMP=$(date +"%Y%m%d%H%M%S")

        # Define the directories and files to include in the zip archive
        SOURCE_DIR="dist"  # Change this to the directory containing generated files
        ZIP_FILE="generated_files_${TIMESTAMP}.zip"

        # Create the zip archive
        zip -r "$ZIP_FILE" "$SOURCE_DIR"

        if [ $? -eq 0 ]; then
            echo "Zip archive created: $ZIP_FILE"
        else
            echo "Failed to create zip archive."
        fi
    else
        echo "pnpm run generate failed. Skipping zip archive creation."
    fi
fi
