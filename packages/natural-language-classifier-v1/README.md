# Watson Natural Language Classifier V1 Package

IBM Watson Natural Language Classifier uses machine learning algorithms to return the top matching predefined classes for short text input. You create and train a classifier to connect predefined classes to example texts so that the service can apply those classes to new inputs.

The Watson Natural Language Classifier V1 Package will contain the following entities. Find additional details at the API Reference by clicking the entity name.

| Entity | Type | Parameters | Description |
| --- | --- | --- | --- |
| [`natural-language-classifier-v1`](https://www.ibm.com/watson/developercloud/NaturalLanguageClassifierV1/api/v1/curl.html) | package | username, password,   headers, headers[X-Watson-Learning-Opt-Out], url,  | Watson Natural Language Classifier V1 Service |
| [classify](https://www.ibm.com/watson/developercloud/NaturalLanguageClassifierV1/api/v1/curl.html?curl#) | action |  username, password,   headers, headers[X-Watson-Learning-Opt-Out], url,    classifier_id,    text,  | Classify a phrase. |
| [classify-collection](https://www.ibm.com/watson/developercloud/NaturalLanguageClassifierV1/api/v1/curl.html?curl#) | action |  username, password,   headers, headers[X-Watson-Learning-Opt-Out], url,    classifier_id,    collection,  | Classify multiple phrases. |
| [create-classifier](https://www.ibm.com/watson/developercloud/NaturalLanguageClassifierV1/api/v1/curl.html?curl#) | action |  username, password,   headers, headers[X-Watson-Learning-Opt-Out], url,    metadata,     training_data,  | Create classifier. |
| [delete-classifier](https://www.ibm.com/watson/developercloud/NaturalLanguageClassifierV1/api/v1/curl.html?curl#) | action |  username, password,   headers, headers[X-Watson-Learning-Opt-Out], url,    classifier_id,  | Delete classifier. |
| [get-classifier](https://www.ibm.com/watson/developercloud/NaturalLanguageClassifierV1/api/v1/curl.html?curl#) | action |  username, password,   headers, headers[X-Watson-Learning-Opt-Out], url,    classifier_id,  | Get information about a classifier. |
| [list-classifiers](https://www.ibm.com/watson/developercloud/NaturalLanguageClassifierV1/api/v1/curl.html?curl#) | action |  username, password,   headers, headers[X-Watson-Learning-Opt-Out], url, | List classifiers. |


## Deploy the Watson Natural Language Classifier V1 Package with IBM Cloud Command Line Interface (CLI):
### Creating a Watson Natural Language Classifier V1 Service Instance

Before you install the package, you must create a Watson Natural Language Classifier V1 service instance and create the credentials.

1. [Create an Watson Natural Language Classifier V1 service instance.](https://console.bluemix.net/catalog/services/natural_language_classifier)

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
1. To install the Watson Natural Language Classifier V1 package, first clone the package repo.

```
git clone https://github.com/watson-developer-cloud/openwhisk-sdk
```
2. Navigate to the packages/natural-language-classifier-v1 folder.
3. Use `wskdeploy` to install the package using the [`manifest.yml`](./manifest.yml).

```
wskdeploy
```

**In the future,** the utility `wskdeploy` will be integrated into a new `wsk` plugin command `ibmcloud wsk deploy`.
For now download [wskdeploy](https://github.com/apache/incubator-openwhisk-wskdeploy/releases) and add the downloaded binary to your PATH

### Bind Service Credentials
You will need to bind your Watson Natural Language Classifier V1 service to the `natural-language-classifier-v1` package, so that the Actions will have access to the service credentials.

```
bx wsk service bind natural_language_classifier natural-language-classifier-v1
```
## Using the Watson Natural Language Classifier V1 Package

### Example usage with Watson Natural Language Classifier V1

```
bx wsk action invoke natural-language-classifier-v1/ -b -p bucket myBucket -p key data.txt -p body "Hello World"
```

