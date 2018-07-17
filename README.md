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

# Before you begin
* You need an [IBM Cloud][ibm-cloud-onboarding] account.

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
```
# Setting up a Watson package

1. To install the packages, first clone the package-repo

```
git clone https://github.com/watson-developer-cloud/openwhisk-sdk
```

2. Download [wskdeploy](https://github.com/apache/incubator-openwhisk-wskdeploy/releases) and add the downloaded binary to your PATH
3. Navigate to the packages/<desired package name> folder.
4. Use `wskdeploy` to install the package using the [`manifest.yml`](./manifest.yml) in this folder.

```
wskdeploy
```

### Bind Service Credentials
Bind your service credentials to the package so that the Actions have access to the service credentials. For details and specific commands for each package, see the package README.

Authenticate actions by binding credentials with the following pattern:

```sh
bx wsk service bind <name-of-service> <name-of-package>
```

### Passing Authentication Parameters

You can override binding credentials by passing authentication parameters to each action if you need to.

* In some instances, you authenticate by providing the `username` and `password` for the service instance.

### IAM

Some services use token-based Identity and Access Management (IAM) authentication. IAM authentication uses a service API key to get an access token that is passed with the call. Access tokens are valid for approximately one hour and must be regenerated.

Using a service bind will automatically attach your IAM credentials to the package, but you may optionally pass in these parameters to override.

You supply either an IAM service **API key** or an **access token** with the parameters `iam_apikey` and `iam_access_token`:

* Use the API key to have the SDK manage the lifecycle of the access token. The SDK requests an access token, ensures that the access token is valid, and refreshes it if necessary.
* Use the access token if you want to manage the lifecycle yourself. For details, see [Authenticating with IAM tokens](https://console.bluemix.net/docs/services/watson/getting-started-iam.html). If you want to switch to API key, override your stored IAM credentials with an IAM API key.

> _NOTE_: Authenticating with the `X-Watson-Authorization-Token` header or the `watson-token` query param is now deprecated. The token continues to work with Cloud Foundry services, but is not supported for services that use Identity and Access Management (IAM) authentication. For details see [Authenticating with IAM tokens](https://console.bluemix.net/docs/services/watson/getting-started-iam.html#iam)

# Invoking an action

Each package contains a series of actions. Each action accepts a number of parameters which can either be passed on the command line, or passed via a JSON file. For instance, let's look at the `message` action from the `assistant-v1` package.

The `message` action retrieves a response to a user's input. The parameters that this action accepts are:

* `username` : The Watson Assistant API username.

* `password` : The Watson Assistant API password.

* `iam_access_token` :  The IAM access token. You manage the lifecycle of the token

* `iam_apikey` : The API key. Used to get an access token that is passed with the call.

* `iam_url`: The URL of the IAM service. Usually not required. Defaults to 'https://iam.bluemix.net/identity/token'.

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

If you haven't created a service binding, you can invoke the message action by providing all the required parameters. For example:

```
bx wsk action invoke assistant-v1/message -p username <username> -p password <password> -p version_date <version_date> -p workspace_id 'my-id' -p input '{"text": "Hello world!"}'
```

If you've created a binding, you can invoke the message action via:

```
bx wsk action invoke <package-name>/message -p workspace_id 'my-id' -p input '{"text": "Hello world!"}'
```

# Documentation

You can find links to the documentation at https://console.bluemix.net/developer/watson/documentation. Find the service that you're interested in, click API reference, and then select the Node tab.

[ibm-cloud-onboarding]: http://console.bluemix.net/registration?target=/developer/watson&cm_sp=WatsonPlatform-WatsonServices-_-OnPageNavLink-IBMWatson_SDKs-_-Openwhisk
