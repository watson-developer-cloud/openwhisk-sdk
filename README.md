# openwhisk-sdk [![Build Status](https://travis-ci.org/watson-developer-cloud/openwhisk-sdk.svg?branch=master)](http://travis-ci.org/watson-developer-cloud/openwhisk-sdk)

The Watson openwhisk-sdk contains packages for each of the Watson Services to provide a convenient way to call the Watson APIs.

# Watson Packages

This SDK contains the following Watson packages:

1. `assistant-v1`
2. `discovery-v1`
3. `language-translator-v2`
4. `language-translator-v3`
5. `natural-language-classifier-v1`
6. `natural-language-understanding-v1`
7. `personality-insights-v3`
8. `speech-to-text-v1`
9. `text-to-speech-v1`
10. `tone-analyzer-v3`
11. `visual-recognition-v3`

# Using the Watson openwhisk-sdk

To use the openwhisk-sdk, you need to:

### Configure CLI
1. Make sure to execute `ibmcloud login` if you're not already logged in.
2. Install the IBM Cloud Functions CLI plugin:

```
ibmcloud plugin install cloud-functions
```
3. Make sure you are authenticated with IBM Functions and can list entities without errors:

```
ibmcloud wsk list

# Setting up a Watson package

1. To install the packages, first clone the package-repo

```
git clone https://github.com/watson-developer-cloud/openwhisk-sdk
```

2. Navigate to the packages/<desired package name> folder.
3. Use `wskdeploy` to install the package using the [`manifest.yml`](./manifest.yml).

```
wskdeploy
```
**In the future,** the utility `wskdeploy` will be integrated into a new `wsk` plugin command `ibmcloud wsk deploy`.
For now download [wskdeploy](https://github.com/apache/incubator-openwhisk-wskdeploy/releases) and add the downloaded binary to your PATH

### Bind Service Credentials
You will need to bind your service credentials to the package, so that the Actions will have access to the service credentials. Individual README instructions within each package detail this step.

# Invoking an action

Each package contains a series of actions. Each action accepts a number of parameters which can either be passed on the command line, or passed via a JSON file. For instance, let's look at the `message` action from the `conversation-v1` package.

The `message` action retrieves a response to a user's input. The parameters that this action accepts are:

* `username` : The Watson Conversation API username.

* `password` : The Watson Conversation API password.

* `headers`: The request headers.

* `url`: override default service base url.

* `headers.X-Watson-Learning-Opt-Out`: opt-out of data collection.

* `version_date` : Release date of the API version in YYYY-MM-DD format.

* `workspace_id` : The unique identifier of the workspace.

* `input` : An input object that includes the input text.

* `alternate_intents` : Whether to return more than one intent. Set to `true` to return all matching intents.

* `context` : State information for the conversation. Continue a conversation by including the context object from the previous response.

* `entities` : Include the entities from the previous response when they do not need to change and to prevent Watson from trying to identify them.

* `intents` : An array of name-confidence pairs for the user input. Include the intents from the previous response when they do not need to change and to prevent Watson from trying to identify them.

* `output` : System output. Include the output from the request when you have several requests within the same Dialog turn to pass back in the intermediate information.

If you haven't created a package binding, you can invoke the message action by providing all the required parameters, i.e.:

```
bx wsk action invoke conversation-v1/message -p username <username> -p password <password> -p version_date <version_date> -p workspace_id 'my-id' -p input '{"text": "Hello world!"}'
```

If you've created a binding, you can invoke the message action via:

```
bx wsk action invoke <binding-name>/message -p workspace_id 'my-id' -p input '{"text": "Hello world!"}'
```

# Documentation

You can find links to the documentation at https://console.bluemix.net/developer/watson/documentation. Find the service that you're interested in, click API reference, and then select the Node tab.
