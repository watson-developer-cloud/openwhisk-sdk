# Watson Tone Analyzer V3 Package

The IBM Watson&trade; Tone Analyzer service uses linguistic analysis to detect emotional and language tones in written text. The service can analyze tone at both the document and sentence levels. You can use the service to understand how your written communications are perceived and then to improve the tone of your communications. Businesses can use the service to learn the tone of their customers' communications and to respond to each customer appropriately, or to understand and improve their customer conversations.

**Note:** Request logging is disabled for the Tone Analyzer service. The service neither logs nor retains data from requests and responses, regardless of whether the `X-Watson-Learning-Opt-Out` request header is set. 

The Watson Tone Analyzer V3 Package will contain the following entities. Find additional details at the API Reference by clicking the entity name.

| Entity | Type | Parameters | Description |
| --- | --- | --- | --- |
| [`tone-analyzer-v3`](https://www.ibm.com/watson/developercloud/tone-analyzer/api/v3/curl.html) | package | username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,  | Watson Tone Analyzer V3 Service |
| [tone](https://www.ibm.com/watson/developercloud/tone-analyzer/api/v3/curl.html?curl#tone) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    tone_input,     content_type,     sentences,     tones,     content_language,     accept_language,  | Analyze general tone |
| [tone-chat](https://www.ibm.com/watson/developercloud/tone-analyzer/api/v3/curl.html?curl#tone-chat) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,   utterances,     content_language,     accept_language,  | Analyze customer engagement tone |


## Deploy the Watson Tone Analyzer V3 Package with IBM Cloud Command Line Interface (CLI):
### Creating a Watson Tone Analyzer V3 Service Instance

Before you install the package, you must create a Watson Tone Analyzer V3 service instance and create the credentials.

1. [Create an Watson Tone Analyzer V3 service instance.](https://console.bluemix.net/catalog/services/tone_analyzer)

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
1. To install the Watson Tone Analyzer V3 package, first clone the package repo.

```
git clone https://github.com/watson-developer-cloud/openwhisk-sdk
```
2. Download [wskdeploy](https://github.com/apache/incubator-openwhisk-wskdeploy/releases) and add the downloaded binary to your PATH
3. Navigate to the packages/tone-analyzer-v3 folder.
4. Use `wskdeploy` to install the package using the [`manifest.yaml`](./manifest.yaml) in this folder.

```
wskdeploy
```

### Bind Service Credentials
You will need to bind your Watson Tone Analyzer V3 service to the `tone-analyzer-v3` package, so that the Actions will have access to the service credentials.

```
bx wsk service bind tone_analyzer tone-analyzer-v3
```
## Using the Watson Tone Analyzer V3 Package

### Example usage with Watson Tone Analyzer V3

```
bx wsk action invoke tone-analyzer-v3/<action name> -b -p <param name> <param>
```
