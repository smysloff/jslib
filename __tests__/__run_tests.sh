#!/usr/bin/env sh

dir=$(dirname "$0")

for file in "$dir"/*; do
  if [[ $file =~ \.m?js$ ]]; then
    node "$file"; echo ''
  fi
done
