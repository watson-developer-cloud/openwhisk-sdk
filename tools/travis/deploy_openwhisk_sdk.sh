#!/bin/bash
set -ex

SCRIPTDIR=$(cd $(dirname "$0") && pwd)
ROOTDIR="$SCRIPTDIR/../.."
HOMEDIR="$ROOTDIR/.."
PREINSTALL_DIR=${HOMEDIR}/preInstalled
WHISKDIR="$HOMEDIR/openwhisk"

export OPENWHISK_HOME=${OPENWHISK_HOME:=$WHISKDIR}
WSK_CLI=${OPENWHISK_HOME}/bin/wsk
WSK_SYSTEM_AUTH_KEY=$(cat ${OPENWHISK_HOME}/ansible/files/auth.whisk.system)
WHISK_APIHOST="172.17.0.1"

cd ${ROOTDIR}

# Place these templates in correct location to be included in packageDeploy
mkdir -p ${PREINSTALL_DIR}/watson-developer-cloud/openwhisk-sdk
cp -a packages ${PREINSTALL_DIR}/watson-developer-cloud/openwhisk-sdk/

# Install the deploy package
cd $HOMEDIR/incubator-openwhisk-package-deploy/packages
./installCatalog.sh $WSK_SYSTEM_AUTH_KEY $WHISK_APIHOST $WSK_CLI
