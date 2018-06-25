# Watson Language Translator V2 Package

IBM Watson Language Translator translates text from one language to another. The service offers multiple domain-specific models that you can customize based on your unique terminology and language. Use Language Translator to take news from across the globe and present it in your language, communicate with your customers in their own language, and more.

The Watson Language Translator V2 Package will contain the following entities. Find additional details at the API Reference by clicking the entity name.

| Entity | Type | Parameters | Description |
| --- | --- | --- | --- |
| [`language-translator-v2`](https://www.ibm.com/watson/developercloud/language-translator/api/v2/curl.html) | package | username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,  | Watson Language Translator V2 Service |
| [translate](https://www.ibm.com/watson/developercloud/language-translator/api/v2/curl.html?curl#translate) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,   text, model_id, source, target,  | Translate. |
| [identify](https://www.ibm.com/watson/developercloud/language-translator/api/v2/curl.html?curl#identify) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    text,  | Identify language. |
| [list-identifiable-languages](https://www.ibm.com/watson/developercloud/language-translator/api/v2/curl.html?curl#list-identifiable-languages) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url, | List identifiable languages. |
| [create-model](https://www.ibm.com/watson/developercloud/language-translator/api/v2/curl.html?curl#create-model) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    base_model_id,     name,     forced_glossary,     parallel_corpus,     monolingual_corpus,  | Create model. |
| [delete-model](https://www.ibm.com/watson/developercloud/language-translator/api/v2/curl.html?curl#delete-model) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    model_id,  | Delete model. |
| [get-model](https://www.ibm.com/watson/developercloud/language-translator/api/v2/curl.html?curl#get-model) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    model_id,  | Get model details. |
| [list-models](https://www.ibm.com/watson/developercloud/language-translator/api/v2/curl.html?curl#list-models) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    source,     target,     default_models,  | List models. |


## Deploy the Watson Language Translator V2 Package with IBM Cloud Command Line Interface (CLI):
### Creating a Watson Language Translator V2 Service Instance

Before you install the package, you must create a Watson Language Translator V2 service instance and create the credentials.

1. [Create an Watson Language Translator V2 service instance.](https://console.bluemix.net/catalog/services/language_translator)

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
1. To install the Watson Language Translator V2 package, first clone the package repo.

```
git clone https://github.com/watson-developer-cloud/openwhisk-sdk
```
2. Download [wskdeploy](https://github.com/apache/incubator-openwhisk-wskdeploy/releases) and add the downloaded binary to your PATH
3. Navigate to the packages/language-translator-v2 folder.
4. Use `wskdeploy` to install the package using the [`manifest.yml`](./manifest.yml) in this folder.

```
wskdeploy
```

### Bind Service Credentials
You will need to bind your Watson Language Translator V2 service to the `language-translator-v2` package, so that the Actions will have access to the service credentials.

```
bx wsk service bind language_translator language-translator-v2
```
## Using the Watson Language Translator V2 Package

### Example usage with Watson Language Translator V2

```
bx wsk action invoke language-translator-v2/<action name> -b -p <param name> <param>
```