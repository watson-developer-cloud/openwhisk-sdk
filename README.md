# openwhisk-sdk [![Build Status](https://travis.ibm.com/Watson/openwhisk-sdk.svg?token=ouxuNEZVg24FqsCxcPYL&branch=master)](https://travis.ibm.com/Watson/openwhisk-sdk)

The Watson openwhisk-sdk contains packages for each of the Watson Services to provide a convenient way to call the Watson APIs.

# Watson Packages

This SDK contains the following Watson packages:

1. `conversation-v1`
2. `discovery-v1`
3. `language-translator-v2`
4. `natural-language-classifier-v1`
5. `natural-language-understanding-v1`
6. `personality-insights-v3`
7. `speech-to-text-v1`
8. `text-to-speech-v1`
9. `tone-analyzer-v3`
10. `visual-recognition-v3`

# Using the Watson openwhisk-sdk

To use the openwhisk-sdk, you need to:

1. Install node (follow instructions [here](https://docs.npmjs.com/getting-started/installing-node))
2. Install the bx wsk cli (follow instructions [here](https://console.bluemix.net/docs/openwhisk/bluemix_cli.html#cloudfunctions_cli))
3. Clone this repository
4. run `install.py` to install the Watson packages into your namespace.

Optionally, for a simpler usage pattern:

* Set up the Watson Package you want to use (See the sections below about setting up the package)

# Setting up a Watson package

To set up a package for usage with your Watson service instance, you must manually create a package binding for you Watson service. You need the Watson service username and password, or api_key if applicable. You may also want to bind some or all of the following parameters:

* `username` : The Watson Service API username.
* `password` : The Watson Service API password.
* `api_key` : The Watson Service API api_key.
* `url` : override default service base url.
* `version_date` : Release date of the API version in YYYY-MM-DD format.
* `headers` : The request headers.
* `headers.X-Watson-Learning-Opt-Out` : opt-out of data collection.

- Create a package binding that is configured for your Watson service.

```
bx wsk package bind <package-name> <binding-name> -p username MYUSERNAME -p password MYPASSWORD
```

```
bx wsk package bind <package-name> <binding-name> -p api_key <api_key>
```

* If you want to bind more than the credentials, it's easiest to create a JSON file with the parameters you want to bind, then run the binding command via the bx wsk cli.

```
{
    "username": <username>,
    "password": <password>,
    "url": <url>,
    "version_date": <version_date>,
    "headers": {
        "X-Watson-Learning-Opt-Out": true
    }
}
```

```
bx wsk package bind <package-name> <binding-name> --param-file binding.json
```

# Invoking an action

Each package contains a series of actions. Each actions accepts a number of parameters which can either be passed on the command line, or passed via a JSON file. For instance, let's look at the `message` action from the `conversation-v1` package.

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

You can find links to the documentation at https://www.ibm.com/watson/developercloud/doc/index.html. Find the service that you're interested in, click API reference, and then select the Node tab.
