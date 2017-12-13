"""
This script deploys Watson packages into the `watson` namespace. The script will
ignore packages for which annotations are missing. The script reads the deployment
host, authorization key, wsk_cli path from the environment.
"""
import os
import glob
import json
import sys

IS_STAGING = True
API_HOST = None
AUTH = os.environ['AUTH']
WSK_CLI = os.environ['WSK_CLI']


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
            './annotations/' + package_name + '/' + annotation_filename + '.json')
        annotation_data = json.load(annotation_file)
        annotation_file.close()
    except IOError:
        pass
    return annotation_data


def make_package_command(package_path, package_annotations):
    """
    Creates a command to deploy a package.

    Args:
        package_path (string): The path to the package to be deployed.
        package_annotations (dict): The annotations of the package to be deployed.

    Returns:
        string: A command that can be executed using the wsk cli.
    """
    package_name = package_path.split('/')[1]
    command = "{} package update {}".format(WSK_CLI, package_name) \
        + " --shared yes --auth {} --apihost {}".format(AUTH, API_HOST) \
        + " -a description {}".format(json.dumps(package_annotations['description'])) \
        + " -a parameters '{}'".format(json.dumps(package_annotations['parameters'])) \
        + " -a prettyName {}".format(json.dumps(package_annotations['prettyName']))
    return command


def make_action_command(action_path, action_annotations):
    """
    Creates a command to deploy an action.

    Args:
        action_path (string): The path to the action to be deployed.
        action_annotations (dict): The annotations of the action to be deployed.

    Returns:
        string: A command that can be executed using the wsk cli.
    """
    first_slash = action_path.find('/')
    qualified_action_name = action_path[first_slash + 1:]
    command = "{} action update {} {}".format(WSK_CLI, qualified_action_name, action_path) \
        + " --auth {} --apihost {}".format(AUTH, API_HOST) \
        + " -a description {}".format(json.dumps(action_annotations['description'])) \
        + " -a parameters '{}'".format(json.dumps(action_annotations['parameters'])) \
        + " -a sampleInput {}".format(json.dumps(action_annotations['sampleInput'])) \
        + " -a sampleOutput {}".format(json.dumps(action_annotations['sampleOutput']))
    return command


def deploy():
    """
    Main entry point of the script.
    """
    global IS_STAGING, API_HOST
    assert len(
        sys.argv) == 2, "Must specify either 'production' or 'staging' as a command line option"
    assert sys.argv[1] == 'staging' or sys.argv[1] == 'production', "invalid option {}".format(
        sys.argv[1])
    IS_STAGING = True if sys.argv[1] == 'staging' else False
    API_HOST = os.environ['API_HOST'] if IS_STAGING else os.environ['PROD_API_HOST']

    package_paths = glob.glob('actions/*')
    for package_path in package_paths:
        package_name = package_path.split('/')[1]
        package_annotations = get_annotations(package_name, package_name)
        # don't deploy packages that are missing annotations
        if package_annotations is None:
            continue
        package_deployment_command = make_package_command(
            package_path, package_annotations)
        os.system(package_deployment_command)

        action_paths = glob.glob(package_path + '/*.js')
        for action_path in action_paths:
            action_name = action_path.split('/')[2].split('.')[0]
            action_annotations = get_annotations(package_name, action_name)
            # don't deploy actions that are missing annotations
            if action_annotations is None:
                continue
            action_deployment_command = make_action_command(
                action_path, action_annotations)
            os.system(action_deployment_command)


if __name__ == '__main__':
    deploy()
