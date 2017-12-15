#
# Copyright 2017 IBM All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""
This script install the openwhisk-sdk in your namespace. The script will
assume that wsk cli has been installed on the system. If the wsk cli path
is not exported, you can pass the path to the wsk cli as an argument to the
script.
"""
import os
import glob
import json
import sys
import re
import shutil

WSK_CLI = 'wsk' if len(sys.argv) < 2 else sys.argv[1]


def get_annotations(package_name, annotation_filename):
    """
    Retrieves the annotations for a package or action.
    Args:
        package_name (string): The name of the package.
        annotation_filename (string): The name of the annotation file.
    Returns:
        dict: A dictionary of the action or package annotation.
    """
    annotation_data = None
    try:
        annotation_file = open(
            './annotations/{}/{}.json'.format(package_name, annotation_filename))
        annotation_data = json.load(annotation_file)
        annotation_file.close()
    except IOError:
        pass
    return annotation_data


def make_package_command(package_name, package_annotations):
    """
    Creates a command to create or update a package.

    Args:
        package_name (string): The name of the package to be created or updated.

    Returns:
        string: A command that can be executed using the wsk cli.
    """
    command = "{} package update {}".format(WSK_CLI, package_name) \
        + " -a description {}".format(json.dumps(package_annotations['description'])) \
        + " -a parameters '{}'".format(json.dumps(package_annotations['parameters'])) \
        + " -a prettyName {}".format(json.dumps(package_annotations['prettyName']))
    return command


def make_action_command(package_name, action_name, action_annotations):
    """
    Creates a command to create or update an action.

    Args:
        action_name (string): The name of the action to be created or updated.

    Returns:
        string: A command that can be executed using the wsk cli.
    """
    qualified_action_name = '{}/{}'.format(package_name, action_name)
    entry_point = 'actions/{}/{}'.format(package_name, action_name)
    os.system(
        'webpack --env {} --config webpack.config.js'.format(entry_point))
    command = "{} action update {} ./dist/{}.js".format(WSK_CLI,
                                                        qualified_action_name,
                                                        action_name) \
        + " -a description {}".format(json.dumps(action_annotations['description'])) \
        + " -a parameters '{}'".format(json.dumps(action_annotations['parameters']))
    return command


def install():
    """
    Main entry point of the script.
    """
    package_paths = glob.glob('actions/*')
    for package_path in package_paths:
        package_name = re.findall(r'.*/(.*)', package_path)[0]
        package_annotations = get_annotations(package_name, package_name)
        package_deployment_command = make_package_command(
            package_name, package_annotations)
        os.system(package_deployment_command)

        action_paths = glob.glob(package_path + '/*.js')
        for action_path in action_paths:
            action_name = re.findall(r'/.*/(.*).js', action_path)[0]
            action_annotations = get_annotations(package_name, action_name)
            action_deployment_command = make_action_command(
                package_name, action_name, action_annotations)
            os.system(action_deployment_command)
    shutil.rmtree('./dist', ignore_errors=True)


if __name__ == '__main__':
    install()
