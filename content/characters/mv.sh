#!/bin/bash

for dir in */; do
    dirname="${dir%/}"
    if [ -f "$dir/index.md" ]; then
        mv "$dir/index.md" "$dirname.md"
    fi
    rmdir "$dirname"
done
