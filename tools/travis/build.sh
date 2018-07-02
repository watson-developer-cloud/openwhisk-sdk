#!/bin/bash
set -ex

# Build script for Travis-CI.

SCRIPTDIR=$(cd $(dirname "$0") && pwd)
ROOTDIR="$SCRIPTDIR/../.."
WHISKDIR="$ROOTDIR/../openwhisk"
UTILDIR="$ROOTDIR/../incubator-openwhisk-utilities"

export OPENWHISK_HOME=$WHISKDIR

# run scancode
cd $UTILDIR
scancode/scanCode.py $ROOTDIR

cd $WHISKDIR
# Build openwhisk
TERM=dumb ./gradlew install
