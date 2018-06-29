# Watson Natural Language Understanding V1 Package

Analyze various features of text content at scale. Provide text, raw HTML, or a public URL, and IBM Watson Natural Language Understanding will give you results for the features you request. The service cleans HTML content before analysis by default, so the results can ignore most advertisements and other unwanted content.

You can create <a target="_blank" href="https://www.ibm.com/watson/developercloud/doc/natural-language-understanding/customizing.html">custom models</a> with Watson Knowledge Studio that can be used to detect custom entities and relations in Natural Language Understanding.

The Watson Natural Language Understanding V1 Package will contain the following entities. Find additional details at the API Reference by clicking the entity name.

| Entity | Type | Parameters | Description |
| --- | --- | --- | --- |
| [`natural-language-understanding-v1`](https://www.ibm.com/watson/developercloud/natural-language-understanding/api/v1/curl.html) | package | username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,  | Watson Natural Language Understanding V1 Service |
| [analyze](https://www.ibm.com/watson/developercloud/natural-language-understanding/api/v1/curl.html?curl#analyze) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,   features, text, html, url, clean, xpath, fallback_to_raw, return_analyzed_text, language, limit_text_characters,  | Analyze text, HTML, or a public webpage. |
| [delete-model](https://www.ibm.com/watson/developercloud/natural-language-understanding/api/v1/curl.html?curl#delete-model) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    model_id,  | Delete model. |
| [list-models](https://www.ibm.com/watson/developercloud/natural-language-understanding/api/v1/curl.html?curl#list-models) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url, | List models. |


## Deploy the Watson Natural Language Understanding V1 Package with IBM Cloud Command Line Interface (CLI):
### Creating a Watson Natural Language Understanding V1 Service Instance

Before you install the package, you must create a Watson Natural Language Understanding V1 service instance and create the credentials.

1. [Create an Watson Natural Language Understanding V1 service instance.](https://console.bluemix.net/catalog/services/natural-language-understanding)

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
1. To install the Watson Natural Language Understanding V1 package, first clone the package repo.

```
git clone https://github.com/watson-developer-cloud/openwhisk-sdk
```
2. Download [wskdeploy](https://github.com/apache/incubator-openwhisk-wskdeploy/releases) and add the downloaded binary to your PATH
3. Navigate to the packages/natural-language-understanding-v1 folder.
4. Use `wskdeploy` to install the package using the [`manifest.yml`](./manifest.yml) in this folder.

```
wskdeploy
```

### Bind Service Credentials
You will need to bind your Watson Natural Language Understanding V1 service to the `natural-language-understanding-v1` package, so that the Actions will have access to the service credentials.

```
bx wsk service bind natural-language-understanding natural-language-understanding-v1
```
## Using the Watson Natural Language Understanding V1 Package

### Example usage with Watson Natural Language Understanding V1

```
bx wsk action invoke natural-language-understanding-v1/<action name> -b -p <param name> <param>
```
