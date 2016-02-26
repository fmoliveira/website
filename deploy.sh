#!/bin/sh

# Clean up old stuff
DEPLOY_FOLDER=.deploy
rm -rf $DEPLOY_FOLDER

# Init repository
mkdir .deploy
git -C $DEPLOY_FOLDER init

# Execute build
npm run build

# Copy new build
cp -r src/* $DEPLOY_FOLDER/.

# Remove development files
rm -rf $DEPLOY_FOLDER/styles/*.styl

# Minify production files
node node_modules/.bin/cleancss src/styles/main.css -o .deploy/styles/main.css

# Commit
git -C $DEPLOY_FOLDER add --all .
git -C $DEPLOY_FOLDER commit -m "Website deployment."

# Force push
git -C $DEPLOY_FOLDER remote add origin git@github.com:fmoliveira/fmoliveira.github.io.git
git -C $DEPLOY_FOLDER push origin master -f

# Tear down clean up
rm -rf $DEPLOY_FOLDER
