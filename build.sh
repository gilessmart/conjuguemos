#!/bin/sh

set -e # Exit on error

# Remove any previous build
rm -rf doc-root

# Build the project
npx next build

# Put the build output in a folder structure that matches GitHub pages:
mkdir doc-root
mv out doc-root/mis-verbos
