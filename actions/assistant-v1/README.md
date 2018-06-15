
# Watson Assistant V1 Package

The `watson-assistant-package` package will contain the following entities.  Find additional details at the API Reference by clicking the entity name.

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

## Deploy the Watson Assistant Package with IBM Cloud Command Line Interface (CLI):
### Creating a Watson Assistant Service Instance

Before you install the package, you must create a Watson Assistant service instance and create the credentials.

1. [Create an Watson Assistant service instance.](https://console.bluemix.net/catalog/services/watson-assistant-formerly-conversation)
2. [Create credentials for your service](https://console.bluemix.net/docs/services/watson/getting-started-credentials.html#existing-svcs)

### Configure CLI
1. Make sure to execute `ibmcloud login` if not already logged in
2. Install IBM Functions CLI plugin:

	```
	ibmcloud plugin install cloud-functions
	```
3. Make sure you are authenticated with IBM Functions and can list entities without errors:

	```
	ibmcloud wsk list
	```

### Installing the Package
1. To install the Watson Assistant package, first clone the package repo.

	```
	git clone https://github.com/watson-developer-cloud/openwhisk-sdk/tree/next-templates/actions/assistant-v1
	```
2. Navigate to the packages/assistant-v1 folder.
3. Use `wskdeploy` to install the package using the [`manifest.yml`](./manifest.yml).

	```
	wskdeploy
	```

**In the future,** the utility `wskdeploy` will be integrated into a new `wsk` plugin command `ibmcloud wsk deploy`.
For now download [wskdeploy](https://github.com/apache/incubator-openwhisk-wskdeploy/releases) and add the downloaded binary to your PATH

### Bind Service Credentials
You will need to bind your Watson Assistant service to the `assistant-v1` package, so that the Actions will have access to the service credentials.

```
bx wsk service bind conversation assistant-v1
```
## Using the Watson Assistant Package



### Try the Watson Assistant Package
Write a file `data.txt` into bucket `myBucket`. This should be some example from watson assistant? :

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
