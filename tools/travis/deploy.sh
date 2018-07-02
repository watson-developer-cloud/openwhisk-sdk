#!/bin/bash
set -ex

# Build script for Travis-CI.

SCRIPTDIR=$(cd $(dirname "$0") && pwd)
ROOTDIR="$SCRIPTDIR/../.."
WHISKDIR="$ROOTDIR/../openwhisk"

cd $WHISKDIR
#deploy openwhisk
TERM=dumb ./gradlew distDocker

cd $WHISKDIR/ansible

ANSIBLE_CMD="ansible-playbook -i environments/local"
$ANSIBLE_CMD setup.yml
$ANSIBLE_CMD prereq.yml
$ANSIBLE_CMD couchdb.yml
$ANSIBLE_CMD initdb.yml
$ANSIBLE_CMD wipe.yml
$ANSIBLE_CMD openwhisk.yml

# Set Environment
export OPENWHISK_HOME=$WHISKDIR

cd $WHISKDIR

VCAP_SERVICES_FILE="$(readlink -f $ROOTDIR/tests/credentials.json)"

#update whisk.properties to add tests/credentials.json file to vcap.services.file, which is needed in tests
WHISKPROPS_FILE="$WHISKDIR/whisk.properties"
sed -i 's:^[ \t]*vcap.services.file[ \t]*=\([ \t]*.*\)$:vcap.services.file='$VCAP_SERVICES_FILE':'  $WHISKPROPS_FILE
cat whisk.properties
