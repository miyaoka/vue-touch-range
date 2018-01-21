#!/bin/bash
mv dist gh-pages
git add gh-pages
git -c user.name=$GITHUB_USER_NAME -c user.email=$GITHUB_USER_EMAIL commit -m "Auto Deployment"
git subtree split --branch gh-pages --prefix gh-pages
git push -q https://$GITHUB_USER_NAME:$GITHUB_ACCESS_TOKEN@github.com/$GITHUB_USER_NAME/$GITHUB_REPO_NAME gh-pages:gh-pages -f