#!/bin/bash
set -e
cd ./server
yarn deploy-server
yarn deploy-update
cd ../client
yarn deploy
echo "done"
