#!/bin/bash
set -e
cd ./server && yarn deploy-server
cd ./server && yarn deploy-update
cd ./client && yarn deploy
echo "done"