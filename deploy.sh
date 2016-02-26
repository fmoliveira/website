#!/bin/sh

# Clean up old stuff
DEPLOY_FOLDER=.deploy
rm -rf $DEPLOY_FOLDER

# Clone repository and erase latest build
git clone -b master --single-branch git@github.com:fmoliveira/fmoliveira.github.io.git $DEPLOY_FOLDER
git -C $DEPLOY_FOLDER rm -rf .

# Execute build
npm run build

# Copy new build
cp -r src/* $DEPLOY_FOLDER/.

# Remove development files
rm -rf $DEPLOY_FOLDER/styles/*.styl

# Minify production files
node node_modules/.bin/cleancss src/styles/main.css -o .deploy/styles/main.css

# Commit and push
git -C $DEPLOY_FOLDER add --all .
git -C $DEPLOY_FOLDER commit -m "Website deployment."
git -C $DEPLOY_FOLDER push

# Tear down clean up
rm -rf $DEPLOY_FOLDER
