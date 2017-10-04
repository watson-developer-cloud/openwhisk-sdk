import os
import glob
import json
import sys

is_staging = True

#GLOBAL ENVIRONMENT VARIABLES
API_HOST = os.environ['API_HOST'] if is_staging else os.environ['PROD_API_HOST']
AUTH = os.environ['AUTH']
WSK_CLI = os.environ['WSK_CLI']

def get_package_annotations(package_path):
    package_annotations = None
    try:
        infile = open(package_path+'/package.annotations.json')
        package_annotations = json.load(infile)
    except IOError:
        pass
    return package_annotations

def get_action_annotations(action_path):
    action_annotations = None
    try:
        last_period = action_path.rfind('.')
        infile = open(action_path[:last_period]+'.annotations.json')
        action_annotations = json.load(infile)
    except IOError:
        pass
    return action_annotations

def make_package_command(package_path,package_annotations):
    package_name = package_path.split('/')[1]
    command = "{} package update {}".format(WSK_CLI,package_name) \
    + " --shared yes --auth {} --apihost {}".format(AUTH,API_HOST) \
    + " -a description {}".format(json.dumps(package_annotations['description'])) \
    + " -a parameters '{}'".format(json.dumps(package_annotations['parameters'])) \
    + " -a prettyName {}".format(json.dumps(package_annotations['prettyName']))
    return command

def make_action_command(action_path,action_annotations):
    first_slash = action_path.find('/')
    qualified_action_name = action_path[first_slash+1:]
    command = "{} action update {} {}".format(WSK_CLI,qualified_action_name,action_path) \
    + " --auth {} --apihost {}".format(AUTH,API_HOST) \
    + " -a description {}".format(json.dumps(action_annotations['description'])) \
    + " -a parameters '{}'".format(json.dumps(action_annotations['parameters'])) \
    + " -a sampleInput '{}'".format(json.dumps(action_annotations['sampleInput'])) \
    + " -a sampleOutput '{}'".format(json.dumps(action_annotations['sampleOutput']))
    return command

def deploy_package(package_name,deployment_command):
    print "*** deploying the package {} to {} ***".format(package_name,sys.argv[1])
    os.system(deployment_command)
    
def deploy_action(package_name,action_name,deployment_command):
    print "*** deploying the action {} to {} ***".format(package_name+'/'+action_name,sys.argv[1])
    os.system(deployment_command)

def deploy():
    global is_staging
    assert len(sys.argv)==2, "Must specify either 'production' or 'staging' as a command line option"
    assert sys.argv[1]=='staging' or sys.argv[1]=='production', "invalid option {}".format(sys.argv[1])
    is_staging = True if sys.argv[1]=='staging' else False

    package_paths = glob.glob('actions/*')
    for package_path in package_paths:
        package_name = package_path.split('/')[1]
        package_annotations = get_package_annotations(package_path)
        #don't deploy packages that are missing annotations
        if package_annotations is None:
            continue
        package_deployment_command = make_package_command(package_path,package_annotations)
        deploy_package(package_name,package_deployment_command)

        action_paths = glob.glob(package_path+'/*.js')
        for action_path in action_paths:
            action_name = action_path.split('/')[2].split('.')[0]
            action_annotations = get_action_annotations(action_path)
            #don't deploy actions that are missing annotations
            if action_annotations is None:
                continue
            action_deployment_command = make_action_command(action_path,action_annotations)
            deploy_action(package_name,action_name,action_deployment_command)

if __name__=='__main__':
    deploy()