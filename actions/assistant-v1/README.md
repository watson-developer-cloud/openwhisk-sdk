
# Watson Assistant V1 Package

## Deploy the Watson Assistant Package with IBM Cloud Command Line Interface (CLI):

### Configure CLI
- Make sure to execute `ibmcloud login` if not already logged in
- Install IBM Functions CLI plugin

```
ibmcloud plugin install cloud-functions
```
- Make sure you are authenticated with IBM Functions and can list entities without errors

```
ibmcloud wsk list
```
### Deploy

- Use `wskdeploy` to deploy using [`manifest.yml`](./manifest.yml).

```
pushd runtimes/nodejs/
wskdeploy
popd
```

**In the future,** the utility `wskdeploy` will be integrated into a new `wsk` plugin command `ibmcloud wsk deploy`.
For now download from here [wskdeploy download](https://github.com/apache/incubator-openwhisk-wskdeploy/releases) and add `wskdeploy` to your PATH

### Bind Service Credentials
You will need to bind your Watson Assistant service to the `cloud-object-storage` package, so that the Actions will have access to the service credentials.

```
bx wsk service bind conversation assistant-v1
```
## Using the Watson Assistant Package
###Parameters for the Package and Actions
This will create a new package `watson-assistant-package` with the following entities.  Find additional details at the API Reference by clicking the entity name.

| Entity | Type | Parameters | Description |
| --- | --- | --- | --- |
| [`assistant-v1`](#assistant-v1) [LINK TO API REFERENCE] | package | username, password, iam\_access\_token, iam_apikey, iam\_url, headers, headers[X-Watson-Learning-Opt-Out], url  | Add a natural language interface to your application |
| [`assistant-v1/message`](#message) | action | username, password, iam\_access, headers, iam_apikey | Get response to user input. |
| [`assistant-v1/create-workspace`](#create-workspace) | action | username, password, iam\_access, headers, iam_apikey | Create workspace |
| [`assistant-v1/delete-workspace`](#delete-workspace) | action | username, password, iam\_access, headers, iam_apikey | Delete workspace |
| [`assistant-v1/get-workspace`](#get-workspace) | action | username, password, iam\_access, headers, iam_apikey | Get workspace |
| [`assistant-v1/list-workspaces`](#list-workspaces) | action | username, password, iam\_access, headers, iam_apikey | List workspaces |
| [`assistant-v1/update-workspace`](#update-workspace) | action | username, password, iam\_access, headers, iam_apikey | Update workspace |
| [`assistant-v1/create-intent`](#create-intent) | action | username, password, iam\_access, headers, iam_apikey | Create Intent |



### Try the Watson Assistant Package
Write a file `data.txt` into bucket `myBucket`:

```
bx wsk action invoke cloud-object-storage/object-write -b -p bucket myBucket -p key data.txt -p body "Hello World"
```

Read a file `data.txt` from bucket `myBucket`:

```
bx wsk action invoke cloud-object-storage/object-read -b -p bucket myBucket -p key data.txt
```

Delete a file `data.txt` from bucket `myBucket`:

```
bx wsk action invoke cloud-object-storage/object-delete -b -p bucket myBucket -p key data.txt
```
