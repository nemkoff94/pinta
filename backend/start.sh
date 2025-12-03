#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
echo "Installing backend dependencies..."
npm ci
echo "Starting (or restarting) backend via pm2..."
pm2 startOrRestart ecosystem.config.js --env production
echo "Done."
