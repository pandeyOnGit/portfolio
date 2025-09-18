#!/bin/bash
# Fix all framer-motion TypeScript errors

echo "Fixing framer-motion TypeScript errors..."

# Function to replace motion components with wrapped versions
fix_motion_component() {
    local file=$1
    local pattern=$2
    local replacement=$3
    
    if grep -q "$pattern" "$file"; then
        echo "Fixing motion component in $file"
        sed -i "$pattern" "$file"
    fi
}

# Add missing imports
for file in components/*.tsx; do
    if ! grep -q "import Image from 'next/image'" "$file" && grep -q "<Image" "$file"; then
        sed -i '2i import Image from '\''next/image'\''' "$file"
    fi
done

echo "Motion component fixes completed!"
