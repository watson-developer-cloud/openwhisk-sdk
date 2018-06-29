#!/bin/bash

SCRIPTDIR=$(cd $(dirname "$0") && pwd)
HOMEDIR="$SCRIPTDIR/../../../"
ROOTDIR="$SCRIPTDIR/../.."
UTILDIR="$ROOTDIR/../incubator-openwhisk-utilities"

# jshint support
sudo apt-get -y install nodejs npm
sudo npm install -g jshint

# clone utilties repo. in order to run scanCode.py
cd $HOMEDIR
git clone https://github.com/apache/incubator-openwhisk-utilities.git

cd $UTILDIR
scancode/scanCode.py $ROOT_DIR


# shallow clone OpenWhisk repo.
git clone --depth 1 https://github.com/apache/incubator-openwhisk.git openwhisk

# shallow clone deploy package repo.
git clone --depth 1 https://github.com/apache/incubator-openwhisk-package-deploy

cd openwhisk
./tools/travis/setup.sh
