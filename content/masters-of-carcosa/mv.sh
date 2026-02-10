#!/bin/bash

for dir in */; do
    dirname="${dir%/}"
    if [ -f "$dir/index.html" ]; then
        mv "$dir/index.html" "$dirname.md"
    fi
    rmdir "$dirname"
done
