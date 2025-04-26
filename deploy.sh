#!/usr/bin/env bash
set -e
# AVANTASOMMER Cloudflare Pages Deploy Script

export CF_ACCOUNT_ID=c5c91d6838dec8080ee08c36e1628135
export CF_PROJECT_NAME=avantasommer-www

echo "🔑 Logging into Cloudflare..."
wrangler login

echo "📦 Installing dependencies & building..."
npm install
npm run build
if grep -q \"export\" package.json; then
  npm run export
fi

DIR="out"
[ ! -d "$DIR" ] && DIR="pages"

echo "🚀 Deploying $DIR..."
wrangler pages deploy "$DIR"   --project "$CF_PROJECT_NAME"   --branch "${CF_DEPLOY_BRANCH:-main}"   --commit-hash "$(git rev-parse --short HEAD 2>/dev/null || echo manual)"   --commit-message "Deploy via script"

echo "✅ Deployed to https://$CF_PROJECT_NAME.pages.dev"
