language-translator-v2
**$$**

# Watson Language Translator V2

## Parameters:

`username`
* `required`: false
* `bindTime`: true
* `description`: The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable."},

`password`
* `required`: false
* `bindTime`: true
* `description`: The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.

`iam_access_token`
* `required`: false
* `bindTime`: true
* `description`: An IAM access token fully managed by the application. Responsibility falls on the application to refresh the token, either before it expires or reactively upon receiving a 401 from the service, as any requests made with an expired token will fail.

`iam_apikey`
* `required`: false
* `bindTime`:true
* `description`: An API key that can be used to request IAM tokens. If this API key is provided, the SDK will manage the token and handle the refreshing.

`iam_url`
* `required`: false
* `bindTime`: true
* `description`: An optional URL for the IAM service API. Defaults to 'https://iam.ng.bluemix.net/identity/token"}

`headers`
* `required`: false
* `bindTime`: true
* `description`: The request headers

`headers[X-Watson-Learning-Opt-Out]`
* `required`:false
* `bindTime`: true
* `description`: opt-out of data collection

`url`
* `required`: false
* `bindTime`: true
* `description`: override default service base url



# Actions for Watson Language Translator V2
[translate](#translate)
[identify](#identify)
[list-identifiable-languages](#list-identifiable-languages)
[create-model](#create-model)
[delete-model](#delete-model)
[get-model](#get-model)
[list-models](#list-models)


## translate 
`description`: Translate.

### parameters

`username`
* `required`: false
* `bindTime`: true
* `description`: The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.

`password`
* `required`: false
* `bindTime`: true
* `description`: The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.

`iam_access_token`
* `required`: false
* `bindTime`: true
* `description`: An IAM access token fully managed by the application. Responsibility falls on the application to refresh the token, either before it expires or reactively upon receiving a 401 from the service, as any requests made with an expired token will fail.

`iam_apikey`
* `required`: false
* `bindTime`:true
* `description`: An API key that can be used to request IAM tokens. If this API key is provided, the SDK will manage the token and handle the refreshing.

`iam_url`
* `required`: false
* `bindTime`: true
* `description`: An optional URL for the IAM service API. Defaults to 'https://iam.ng.bluemix.net/identity/token"}

`headers`
* `required`: false
* `bindTime`: true
* `description`: The request headers

`headers[X-Watson-Learning-Opt-Out]`
* `required`:false
* `bindTime`: true
* `description`: opt-out of data collection

`url`
* `required`: false
* `bindTime`: true
* `description`: override default service base url



`text`
* `required`: true
* `bindTime`: false
* `description`: Input text in UTF-8 encoding. Multiple entries will result in multiple translations in the response.
`model_id`
* `required`: false
* `bindTime`: false
* `description`: Model ID of the translation model to use. If this is specified, the **source** and **target** parameters will be ignored. The method requires either a model ID or both the **source** and **target** parameters.
`source`
* `required`: false
* `bindTime`: false
* `description`: Language code of the source text language. Use with `target` as an alternative way to select a translation model. When `source` and `target` are set, and a model ID is not set, the system chooses a default model for the language pair (usually the model based on the news domain).
`target`
* `required`: false
* `bindTime`: false
* `description`: Language code of the translation target language. Use with source as an alternative way to select a translation model.



## identify 
`description`: Identify language.

### parameters

`username`
* `required`: false
* `bindTime`: true
* `description`: The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.

`password`
* `required`: false
* `bindTime`: true
* `description`: The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.

`iam_access_token`
* `required`: false
* `bindTime`: true
* `description`: An IAM access token fully managed by the application. Responsibility falls on the application to refresh the token, either before it expires or reactively upon receiving a 401 from the service, as any requests made with an expired token will fail.

`iam_apikey`
* `required`: false
* `bindTime`:true
* `description`: An API key that can be used to request IAM tokens. If this API key is provided, the SDK will manage the token and handle the refreshing.

`iam_url`
* `required`: false
* `bindTime`: true
* `description`: An optional URL for the IAM service API. Defaults to 'https://iam.ng.bluemix.net/identity/token"}

`headers`
* `required`: false
* `bindTime`: true
* `description`: The request headers

`headers[X-Watson-Learning-Opt-Out]`
* `required`:false
* `bindTime`: true
* `description`: opt-out of data collection

`url`
* `required`: false
* `bindTime`: true
* `description`: override default service base url




`text`
* `required`: true
* `bindTime`: false
* `description`: Input text in UTF-8 format.


## list-identifiable-languages 
`description`: List identifiable languages.

### parameters

`username`
* `required`: false
* `bindTime`: true
* `description`: The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.

`password`
* `required`: false
* `bindTime`: true
* `description`: The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.

`iam_access_token`
* `required`: false
* `bindTime`: true
* `description`: An IAM access token fully managed by the application. Responsibility falls on the application to refresh the token, either before it expires or reactively upon receiving a 401 from the service, as any requests made with an expired token will fail.

`iam_apikey`
* `required`: false
* `bindTime`:true
* `description`: An API key that can be used to request IAM tokens. If this API key is provided, the SDK will manage the token and handle the refreshing.

`iam_url`
* `required`: false
* `bindTime`: true
* `description`: An optional URL for the IAM service API. Defaults to 'https://iam.ng.bluemix.net/identity/token"}

`headers`
* `required`: false
* `bindTime`: true
* `description`: The request headers

`headers[X-Watson-Learning-Opt-Out]`
* `required`:false
* `bindTime`: true
* `description`: opt-out of data collection

`url`
* `required`: false
* `bindTime`: true
* `description`: override default service base url





## create-model 
`description`: Create model.

### parameters

`username`
* `required`: false
* `bindTime`: true
* `description`: The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.

`password`
* `required`: false
* `bindTime`: true
* `description`: The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.

`iam_access_token`
* `required`: false
* `bindTime`: true
* `description`: An IAM access token fully managed by the application. Responsibility falls on the application to refresh the token, either before it expires or reactively upon receiving a 401 from the service, as any requests made with an expired token will fail.

`iam_apikey`
* `required`: false
* `bindTime`:true
* `description`: An API key that can be used to request IAM tokens. If this API key is provided, the SDK will manage the token and handle the refreshing.

`iam_url`
* `required`: false
* `bindTime`: true
* `description`: An optional URL for the IAM service API. Defaults to 'https://iam.ng.bluemix.net/identity/token"}

`headers`
* `required`: false
* `bindTime`: true
* `description`: The request headers

`headers[X-Watson-Learning-Opt-Out]`
* `required`:false
* `bindTime`: true
* `description`: opt-out of data collection

`url`
* `required`: false
* `bindTime`: true
* `description`: override default service base url




`base_model_id`
* `required`: true
* `bindTime`: false
* `description`: The model ID of the model to use as the base for customization. To see available models, use the `List models` method.

`name`
* `required`: false
* `bindTime`: false
* `description`: An optional model name that you can use to identify the model. Valid characters are letters, numbers, dashes, underscores, spaces and apostrophes. The maximum length is 32 characters.

`forced_glossary`
* `required`: false
* `bindTime`: false
* `description`: Must be a base64-encoded string. A TMX file with your customizations. The customizations in the file completely overwrite the domain translaton data, including high frequency or high confidence phrase translations. You can upload only one glossary with a file size less than 10 MB per call.

`parallel_corpus`
* `required`: false
* `bindTime`: false
* `description`: Must be a base64-encoded string. A TMX file that contains entries that are treated as a parallel corpus instead of a glossary.

`monolingual_corpus`
* `required`: false
* `bindTime`: false
* `description`: Must be a base64-encoded string. A UTF-8 encoded plain text file that is used to customize the target language model.


## delete-model 
`description`: Delete model.

### parameters

`username`
* `required`: false
* `bindTime`: true
* `description`: The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.

`password`
* `required`: false
* `bindTime`: true
* `description`: The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.

`iam_access_token`
* `required`: false
* `bindTime`: true
* `description`: An IAM access token fully managed by the application. Responsibility falls on the application to refresh the token, either before it expires or reactively upon receiving a 401 from the service, as any requests made with an expired token will fail.

`iam_apikey`
* `required`: false
* `bindTime`:true
* `description`: An API key that can be used to request IAM tokens. If this API key is provided, the SDK will manage the token and handle the refreshing.

`iam_url`
* `required`: false
* `bindTime`: true
* `description`: An optional URL for the IAM service API. Defaults to 'https://iam.ng.bluemix.net/identity/token"}

`headers`
* `required`: false
* `bindTime`: true
* `description`: The request headers

`headers[X-Watson-Learning-Opt-Out]`
* `required`:false
* `bindTime`: true
* `description`: opt-out of data collection

`url`
* `required`: false
* `bindTime`: true
* `description`: override default service base url




`model_id`
* `required`: true
* `bindTime`: false
* `description`: Model ID of the model to delete.


## get-model 
`description`: Get model details.

### parameters

`username`
* `required`: false
* `bindTime`: true
* `description`: The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.

`password`
* `required`: false
* `bindTime`: true
* `description`: The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.

`iam_access_token`
* `required`: false
* `bindTime`: true
* `description`: An IAM access token fully managed by the application. Responsibility falls on the application to refresh the token, either before it expires or reactively upon receiving a 401 from the service, as any requests made with an expired token will fail.

`iam_apikey`
* `required`: false
* `bindTime`:true
* `description`: An API key that can be used to request IAM tokens. If this API key is provided, the SDK will manage the token and handle the refreshing.

`iam_url`
* `required`: false
* `bindTime`: true
* `description`: An optional URL for the IAM service API. Defaults to 'https://iam.ng.bluemix.net/identity/token"}

`headers`
* `required`: false
* `bindTime`: true
* `description`: The request headers

`headers[X-Watson-Learning-Opt-Out]`
* `required`:false
* `bindTime`: true
* `description`: opt-out of data collection

`url`
* `required`: false
* `bindTime`: true
* `description`: override default service base url




`model_id`
* `required`: true
* `bindTime`: false
* `description`: Model ID of the model to get.


## list-models 
`description`: List models.

### parameters

`username`
* `required`: false
* `bindTime`: true
* `description`: The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.

`password`
* `required`: false
* `bindTime`: true
* `description`: The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.

`iam_access_token`
* `required`: false
* `bindTime`: true
* `description`: An IAM access token fully managed by the application. Responsibility falls on the application to refresh the token, either before it expires or reactively upon receiving a 401 from the service, as any requests made with an expired token will fail.

`iam_apikey`
* `required`: false
* `bindTime`:true
* `description`: An API key that can be used to request IAM tokens. If this API key is provided, the SDK will manage the token and handle the refreshing.

`iam_url`
* `required`: false
* `bindTime`: true
* `description`: An optional URL for the IAM service API. Defaults to 'https://iam.ng.bluemix.net/identity/token"}

`headers`
* `required`: false
* `bindTime`: true
* `description`: The request headers

`headers[X-Watson-Learning-Opt-Out]`
* `required`:false
* `bindTime`: true
* `description`: opt-out of data collection

`url`
* `required`: false
* `bindTime`: true
* `description`: override default service base url




`source`
* `required`: false
* `bindTime`: false
* `description`: Specify a language code to filter results by source language.

`target`
* `required`: false
* `bindTime`: false
* `description`: Specify a language code to filter results by target language.

`default_models`
* `required`: false
* `bindTime`: false
* `description`: If the default parameter isn't specified, the service will return all models (default and non-default) for each language pair. To return only default models, set this to `true`. To return only non-default models, set this to `false`.

