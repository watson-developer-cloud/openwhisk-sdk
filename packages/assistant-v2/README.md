# Watson Assistant V2 Package

The IBM Watson&trade; Assistant service combines machine learning, natural language understanding, and integrated dialog tools to create conversation flows between your apps and your users.

The Watson Assistant V2 Package will contain the following entities. Find additional details at the API Reference by clicking the entity name.

| Entity | Type | Parameters | Description |
| --- | --- | --- | --- |
| [`assistant-v2`](https://www.ibm.com/watson/developercloud/assistant/api/v2/curl.html) | package | username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,  | Watson Assistant V2 Service |
| [create-session](https://www.ibm.com/watson/developercloud/assistant/api/v2/curl.html?curl#create-session) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    assistant_id,  | Create a session |
| [delete-session](https://www.ibm.com/watson/developercloud/assistant/api/v2/curl.html?curl#delete-session) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    assistant_id,     session_id,  | Delete session |
| [message](https://www.ibm.com/watson/developercloud/assistant/api/v2/curl.html?curl#message) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    assistant_id,     session_id,    input, context,  | Send user input to assistant |


## Deploy the Watson Assistant V2 Package with IBM Cloud Command Line Interface (CLI):
### Creating a Watson Assistant V2 Service Instance

Before you install the package, you must create a Watson Assistant V2 service instance and create the credentials.

1. [Create an Watson Assistant V2 service instance.](https://console.bluemix.net/catalog/services/conversation)

### Configure CLI
1. Make sure to execute `ibmcloud login` if you're not already logged in.
2. Install the IBM Cloud Functions CLI plugin:

```
ibmcloud plugin install cloud-functions
```

3. Make sure you are authenticated with IBM Functions and can list entities without errors:

```
ibmcloud wsk list
```

### Installing the Package
1. To install the Watson Assistant V2 package, first clone the package repo.

```
git clone https://github.com/watson-developer-cloud/openwhisk-sdk
```
2. Download [wskdeploy](https://github.com/apache/incubator-openwhisk-wskdeploy/releases) and add the downloaded binary to your PATH
3. Navigate to the packages/assistant-v2 folder.
4. Use `wskdeploy` to install the package using the [`manifest.yaml`](./manifest.yaml) in this folder.

```
wskdeploy
```

### Bind Service Credentials
You will need to bind your Watson Assistant V2 service to the `assistant-v2` package, so that the Actions will have access to the service credentials.

```
bx wsk service bind conversation assistant-v2
```
## Using the Watson Assistant V2 Package

### Example usage with Watson Assistant V2

```
bx wsk action invoke assistant-v2/<action name> -b -p <param name> <param>
```
