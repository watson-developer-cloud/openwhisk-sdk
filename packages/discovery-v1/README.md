
# Watson Discovery V1

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



# Actions for Watson Discovery V1
[create-environment](#create-environment)
[delete-environment](#delete-environment)
[get-environment](#get-environment)
[list-environments](#list-environments)
[list-fields](#list-fields)
[update-environment](#update-environment)
[create-configuration](#create-configuration)
[delete-configuration](#delete-configuration)
[get-configuration](#get-configuration)
[list-configurations](#list-configurations)
[update-configuration](#update-configuration)
[test-configuration-in-environment](#test-configuration-in-environment)
[create-collection](#create-collection)
[delete-collection](#delete-collection)
[get-collection](#get-collection)
[list-collection-fields](#list-collection-fields)
[list-collections](#list-collections)
[update-collection](#update-collection)
[create-expansions](#create-expansions)
[delete-expansions](#delete-expansions)
[list-expansions](#list-expansions)
[add-document](#add-document)
[delete-document](#delete-document)
[get-document-status](#get-document-status)
[update-document](#update-document)
[federated-query](#federated-query)
[federated-query-notices](#federated-query-notices)
[query](#query)
[query-entities](#query-entities)
[query-notices](#query-notices)
[query-relations](#query-relations)
[add-training-data](#add-training-data)
[create-training-example](#create-training-example)
[delete-all-training-data](#delete-all-training-data)
[delete-training-data](#delete-training-data)
[delete-training-example](#delete-training-example)
[get-training-data](#get-training-data)
[get-training-example](#get-training-example)
[list-training-data](#list-training-data)
[list-training-examples](#list-training-examples)
[update-training-example](#update-training-example)
[delete-user-data](#delete-user-data)


## create-environment 
`description`: Create an environment.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.

`name`
* `required`: true
* `bindTime`: false
* `description`: Name that identifies the environment.
`description`
* `required`: false
* `bindTime`: false
* `description`: Description of the environment.
`size`
* `required`: false
* `bindTime`: false
* `description`: **Deprecated**: Size of the environment.



## delete-environment 
`description`: Delete environment.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.


## get-environment 
`description`: Get environment info.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.


## list-environments 
`description`: List environments.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`name`
* `required`: false
* `bindTime`: false
* `description`: Show only the environment with the given name.


## list-fields 
`description`: List fields across collections.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`collection_ids`
* `required`: true
* `bindTime`: false
* `description`: A comma-separated list of collection IDs to be queried against.


## update-environment 
`description`: Update an environment.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.
`name`
* `required`: false
* `bindTime`: false
* `description`: Name that identifies the environment.
`description`
* `required`: false
* `bindTime`: false
* `description`: Description of the environment.



## create-configuration 
`description`: Add configuration.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.
`name`
* `required`: true
* `bindTime`: false
* `description`: The name of the configuration.
`description`
* `required`: false
* `bindTime`: false
* `description`: The description of the configuration, if available.
`conversions`
* `required`: false
* `bindTime`: false
* `description`: The document conversion settings for the configuration.
`enrichments`
* `required`: false
* `bindTime`: false
* `description`: An array of document enrichment settings for the configuration.
`normalizations`
* `required`: false
* `bindTime`: false
* `description`: Defines operations that can be used to transform the final output JSON into a normalized form. Operations are executed in the order that they appear in the array.



## delete-configuration 
`description`: Delete a configuration.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`configuration_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the configuration.


## get-configuration 
`description`: Get configuration details.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`configuration_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the configuration.


## list-configurations 
`description`: List configurations.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`name`
* `required`: false
* `bindTime`: false
* `description`: Find configurations with the given name.


## update-configuration 
`description`: Update a configuration.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`configuration_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the configuration.
`name`
* `required`: true
* `bindTime`: false
* `description`: The name of the configuration.
`description`
* `required`: false
* `bindTime`: false
* `description`: The description of the configuration, if available.
`conversions`
* `required`: false
* `bindTime`: false
* `description`: The document conversion settings for the configuration.
`enrichments`
* `required`: false
* `bindTime`: false
* `description`: An array of document enrichment settings for the configuration.
`normalizations`
* `required`: false
* `bindTime`: false
* `description`: Defines operations that can be used to transform the final output JSON into a normalized form. Operations are executed in the order that they appear in the array.



## test-configuration-in-environment 
`description`: Test configuration.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`configuration`
* `required`: false
* `bindTime`: false
* `description`: The configuration to use to process the document. If this part is provided, then the provided configuration is used to process the document. If the `configuration_id` is also provided (both are present at the same time), then request is rejected. The maximum supported configuration size is 1 MB. Configuration parts larger than 1 MB are rejected. See the `GET /configurations/{configuration_id}` operation for an example configuration.

`step`
* `required`: false
* `bindTime`: false
* `description`: Specify to only run the input document through the given step instead of running the input document through the entire ingestion workflow. Valid values are `convert`, `enrich`, and `normalize`.

`configuration_id`
* `required`: false
* `bindTime`: false
* `description`: The ID of the configuration to use to process the document. If the `configuration` form part is also provided (both are present at the same time), then request will be rejected.

`file`
* `required`: false
* `bindTime`: false
* `description`: Must be a base64-encoded string. The content of the document to ingest. The maximum supported file size is 50 megabytes. Files larger than 50 megabytes is rejected.

`metadata`
* `required`: false
* `bindTime`: false
* `description`: If you're using the Data Crawler to upload your documents, you can test a document against the type of metadata that the Data Crawler might send. The maximum supported metadata file size is 1 MB. Metadata parts larger than 1 MB are rejected. Example:  ``` {   "Creator": "Johnny Appleseed",   "Subject": "Apples" } ```.

`file_content_type`
* `required`: false
* `bindTime`: false
* `description`: The content type of file.


## create-collection 
`description`: Create a collection.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.
`name`
* `required`: true
* `bindTime`: false
* `description`: The name of the collection to be created.
`description`
* `required`: false
* `bindTime`: false
* `description`: A description of the collection.
`configuration_id`
* `required`: false
* `bindTime`: false
* `description`: The ID of the configuration in which the collection is to be created.
`language`
* `required`: false
* `bindTime`: false
* `description`: The language of the documents stored in the collection, in the form of an ISO 639-1 language code.



## delete-collection 
`description`: Delete a collection.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`collection_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the collection.


## get-collection 
`description`: Get collection details.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`collection_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the collection.


## list-collection-fields 
`description`: List collection fields.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`collection_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the collection.


## list-collections 
`description`: List collections.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`name`
* `required`: false
* `bindTime`: false
* `description`: Find collections with the given name.


## update-collection 
`description`: Update a collection.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`collection_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the collection.
`name`
* `required`: true
* `bindTime`: false
* `description`: The name of the collection.
`description`
* `required`: false
* `bindTime`: false
* `description`: A description of the collection.
`configuration_id`
* `required`: false
* `bindTime`: false
* `description`: The ID of the configuration in which the collection is to be updated.



## create-expansions 
`description`: Create or update expansion list.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`collection_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the collection.
`expansions`
* `required`: true
* `bindTime`: false
* `description`: An array of query expansion definitions.    Each object in the `expansions` array represents a term or set of terms that will be expanded into other terms. Each expansion object can be configured so that all terms are expanded to all other terms in the object - bi-directional, or a set list of terms can be expanded into a second list of terms - uni-directional.   To create a bi-directional expansion specify an `expanded_terms` array. When found in a query, all items in the `expanded_terms` array are then expanded to the other items in the same array.   To create a uni-directional expansion, specify both an array of `input_terms` and an array of `expanded_terms`. When items in the `input_terms` array are present in a query, they are expanded using the items listed in the `expanded_terms` array.



## delete-expansions 
`description`: Delete the expansion list.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`collection_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the collection.


## list-expansions 
`description`: Get the expansion list.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`collection_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the collection.


## add-document 
`description`: Add a document.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`collection_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the collection.

`file`
* `required`: false
* `bindTime`: false
* `description`: Must be a base64-encoded string. The content of the document to ingest. The maximum supported file size is 50 megabytes. Files larger than 50 megabytes is rejected.

`metadata`
* `required`: false
* `bindTime`: false
* `description`: If you're using the Data Crawler to upload your documents, you can test a document against the type of metadata that the Data Crawler might send. The maximum supported metadata file size is 1 MB. Metadata parts larger than 1 MB are rejected. Example:  ``` {   "Creator": "Johnny Appleseed",   "Subject": "Apples" } ```.

`file_content_type`
* `required`: false
* `bindTime`: false
* `description`: The content type of file.


## delete-document 
`description`: Delete a document.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`collection_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the collection.

`document_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the document.


## get-document-status 
`description`: Get document details.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`collection_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the collection.

`document_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the document.


## update-document 
`description`: Update a document.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`collection_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the collection.

`document_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the document.

`file`
* `required`: false
* `bindTime`: false
* `description`: Must be a base64-encoded string. The content of the document to ingest. The maximum supported file size is 50 megabytes. Files larger than 50 megabytes is rejected.

`metadata`
* `required`: false
* `bindTime`: false
* `description`: If you're using the Data Crawler to upload your documents, you can test a document against the type of metadata that the Data Crawler might send. The maximum supported metadata file size is 1 MB. Metadata parts larger than 1 MB are rejected. Example:  ``` {   "Creator": "Johnny Appleseed",   "Subject": "Apples" } ```.

`file_content_type`
* `required`: false
* `bindTime`: false
* `description`: The content type of file.


## federated-query 
`description`: Query documents in multiple collections.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`collection_ids`
* `required`: true
* `bindTime`: false
* `description`: A comma-separated list of collection IDs to be queried against.

`filter`
* `required`: false
* `bindTime`: false
* `description`: A cacheable query that limits the documents returned to exclude any documents that don't mention the query content. Filter searches are better for metadata type searches and when you are trying to get a sense of concepts in the data set.

`query`
* `required`: false
* `bindTime`: false
* `description`: A query search returns all documents in your data set with full enrichments and full text, but with the most relevant documents listed first. Use a query search when you want to find the most relevant search results. You cannot use `natural_language_query` and `query` at the same time.

`natural_language_query`
* `required`: false
* `bindTime`: false
* `description`: A natural language query that returns relevant documents by utilizing training data and natural language understanding. You cannot use `natural_language_query` and `query` at the same time.

`aggregation`
* `required`: false
* `bindTime`: false
* `description`: An aggregation search uses combinations of filters and query search to return an exact answer. Aggregations are useful for building applications, because you can use them to build lists, tables, and time series. For a full list of possible aggregrations, see the Query reference.

`count`
* `required`: false
* `bindTime`: false
* `description`: Number of documents to return.

`return_fields`
* `required`: false
* `bindTime`: false
* `description`: A comma separated list of the portion of the document hierarchy to return.

`offset`
* `required`: false
* `bindTime`: false
* `description`: The number of query results to skip at the beginning. For example, if the total number of results that are returned is 10, and the offset is 8, it returns the last two results.

`sort`
* `required`: false
* `bindTime`: false
* `description`: A comma separated list of fields in the document to sort on. You can optionally specify a sort direction by prefixing the field with `-` for descending or `+` for ascending. Ascending is the default sort direction if no prefix is specified.

`highlight`
* `required`: false
* `bindTime`: false
* `description`: When true a highlight field is returned for each result which contains the fields that match the query with `<em></em>` tags around the matching query terms. Defaults to false.

`deduplicate`
* `required`: false
* `bindTime`: false
* `description`: When `true` and used with a Watson Discovery News collection, duplicate results (based on the contents of the `title` field) are removed. Duplicate comparison is limited to the current query only, `offset` is not considered. Defaults to `false`. This parameter is currently Beta functionality.

`deduplicate_field`
* `required`: false
* `bindTime`: false
* `description`: When specified, duplicate results based on the field specified are removed from the returned results. Duplicate comparison is limited to the current query only, `offset` is not considered. This parameter is currently Beta functionality.

`similar`
* `required`: false
* `bindTime`: false
* `description`: When `true`, results are returned based on their similarity to the document IDs specified in the `similar.document_ids` parameter. The default is `false`.

`similar_document_ids`
* `required`: false
* `bindTime`: false
* `description`: A comma-separated list of document IDs that will be used to find similar documents.   **Note:** If the `natural_language_query` parameter is also specified, it will be used to expand the scope of the document similarity search to include the natural language query. Other query parameters, such as `filter` and `query` are subsequently applied and reduce the query scope.

`similar_fields`
* `required`: false
* `bindTime`: false
* `description`: A comma-separated list of field names that will be used as a basis for comparison to identify similar documents. If not specified, the entire document is used for comparison.


## federated-query-notices 
`description`: Query multiple collection system notices.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`collection_ids`
* `required`: true
* `bindTime`: false
* `description`: A comma-separated list of collection IDs to be queried against.

`filter`
* `required`: false
* `bindTime`: false
* `description`: A cacheable query that limits the documents returned to exclude any documents that don't mention the query content. Filter searches are better for metadata type searches and when you are trying to get a sense of concepts in the data set.

`query`
* `required`: false
* `bindTime`: false
* `description`: A query search returns all documents in your data set with full enrichments and full text, but with the most relevant documents listed first. Use a query search when you want to find the most relevant search results. You cannot use `natural_language_query` and `query` at the same time.

`natural_language_query`
* `required`: false
* `bindTime`: false
* `description`: A natural language query that returns relevant documents by utilizing training data and natural language understanding. You cannot use `natural_language_query` and `query` at the same time.

`aggregation`
* `required`: false
* `bindTime`: false
* `description`: An aggregation search uses combinations of filters and query search to return an exact answer. Aggregations are useful for building applications, because you can use them to build lists, tables, and time series. For a full list of possible aggregrations, see the Query reference.

`count`
* `required`: false
* `bindTime`: false
* `description`: Number of documents to return.

`return_fields`
* `required`: false
* `bindTime`: false
* `description`: A comma separated list of the portion of the document hierarchy to return.

`offset`
* `required`: false
* `bindTime`: false
* `description`: The number of query results to skip at the beginning. For example, if the total number of results that are returned is 10, and the offset is 8, it returns the last two results.

`sort`
* `required`: false
* `bindTime`: false
* `description`: A comma separated list of fields in the document to sort on. You can optionally specify a sort direction by prefixing the field with `-` for descending or `+` for ascending. Ascending is the default sort direction if no prefix is specified.

`highlight`
* `required`: false
* `bindTime`: false
* `description`: When true a highlight field is returned for each result which contains the fields that match the query with `<em></em>` tags around the matching query terms. Defaults to false.

`deduplicate_field`
* `required`: false
* `bindTime`: false
* `description`: When specified, duplicate results based on the field specified are removed from the returned results. Duplicate comparison is limited to the current query only, `offset` is not considered. This parameter is currently Beta functionality.

`similar`
* `required`: false
* `bindTime`: false
* `description`: When `true`, results are returned based on their similarity to the document IDs specified in the `similar.document_ids` parameter. The default is `false`.

`similar_document_ids`
* `required`: false
* `bindTime`: false
* `description`: A comma-separated list of document IDs that will be used to find similar documents.   **Note:** If the `natural_language_query` parameter is also specified, it will be used to expand the scope of the document similarity search to include the natural language query. Other query parameters, such as `filter` and `query` are subsequently applied and reduce the query scope.

`similar_fields`
* `required`: false
* `bindTime`: false
* `description`: A comma-separated list of field names that will be used as a basis for comparison to identify similar documents. If not specified, the entire document is used for comparison.


## query 
`description`: Query your collection.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`collection_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the collection.

`filter`
* `required`: false
* `bindTime`: false
* `description`: A cacheable query that limits the documents returned to exclude any documents that don't mention the query content. Filter searches are better for metadata type searches and when you are trying to get a sense of concepts in the data set.

`query`
* `required`: false
* `bindTime`: false
* `description`: A query search returns all documents in your data set with full enrichments and full text, but with the most relevant documents listed first. Use a query search when you want to find the most relevant search results. You cannot use `natural_language_query` and `query` at the same time.

`natural_language_query`
* `required`: false
* `bindTime`: false
* `description`: A natural language query that returns relevant documents by utilizing training data and natural language understanding. You cannot use `natural_language_query` and `query` at the same time.

`passages`
* `required`: false
* `bindTime`: false
* `description`: A passages query that returns the most relevant passages from the results.

`aggregation`
* `required`: false
* `bindTime`: false
* `description`: An aggregation search uses combinations of filters and query search to return an exact answer. Aggregations are useful for building applications, because you can use them to build lists, tables, and time series. For a full list of possible aggregrations, see the Query reference.

`count`
* `required`: false
* `bindTime`: false
* `description`: Number of documents to return.

`return_fields`
* `required`: false
* `bindTime`: false
* `description`: A comma separated list of the portion of the document hierarchy to return.

`offset`
* `required`: false
* `bindTime`: false
* `description`: The number of query results to skip at the beginning. For example, if the total number of results that are returned is 10, and the offset is 8, it returns the last two results.

`sort`
* `required`: false
* `bindTime`: false
* `description`: A comma separated list of fields in the document to sort on. You can optionally specify a sort direction by prefixing the field with `-` for descending or `+` for ascending. Ascending is the default sort direction if no prefix is specified.

`highlight`
* `required`: false
* `bindTime`: false
* `description`: When true a highlight field is returned for each result which contains the fields that match the query with `<em></em>` tags around the matching query terms. Defaults to false.

`passages_fields`
* `required`: false
* `bindTime`: false
* `description`: A comma-separated list of fields that passages are drawn from. If this parameter not specified, then all top-level fields are included.

`passages_count`
* `required`: false
* `bindTime`: false
* `description`: The maximum number of passages to return. The search returns fewer passages if the requested total is not found. The default is `10`. The maximum is `100`.

`passages_characters`
* `required`: false
* `bindTime`: false
* `description`: The approximate number of characters that any one passage will have. The default is `400`. The minimum is `50`. The maximum is `2000`.

`deduplicate`
* `required`: false
* `bindTime`: false
* `description`: When `true` and used with a Watson Discovery News collection, duplicate results (based on the contents of the `title` field) are removed. Duplicate comparison is limited to the current query only, `offset` is not considered. Defaults to `false`. This parameter is currently Beta functionality.

`deduplicate_field`
* `required`: false
* `bindTime`: false
* `description`: When specified, duplicate results based on the field specified are removed from the returned results. Duplicate comparison is limited to the current query only, `offset` is not considered. This parameter is currently Beta functionality.

`similar`
* `required`: false
* `bindTime`: false
* `description`: When `true`, results are returned based on their similarity to the document IDs specified in the `similar.document_ids` parameter. The default is `false`.

`similar_document_ids`
* `required`: false
* `bindTime`: false
* `description`: A comma-separated list of document IDs that will be used to find similar documents.   **Note:** If the `natural_language_query` parameter is also specified, it will be used to expand the scope of the document similarity search to include the natural language query. Other query parameters, such as `filter` and `query` are subsequently applied and reduce the query scope.

`similar_fields`
* `required`: false
* `bindTime`: false
* `description`: A comma-separated list of field names that will be used as a basis for comparison to identify similar documents. If not specified, the entire document is used for comparison.


## query-entities 
`description`: Knowledge Graph entity query.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`collection_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the collection.
`feature`
* `required`: false
* `bindTime`: false
* `description`: The entity query feature to perform. Supported features are `disambiguate` and `similar_entities`.
`entity`
* `required`: false
* `bindTime`: false
* `description`: A text string that appears within the entity text field.
`context`
* `required`: false
* `bindTime`: false
* `description`: Entity text to provide context for the queried entity and rank based on that association. For example, if you wanted to query the city of London in England your query would look for `London` with the context of `England`.
`count`
* `required`: false
* `bindTime`: false
* `description`: The number of results to return. The default is `10`. The maximum is `1000`.
`evidence_count`
* `required`: false
* `bindTime`: false
* `description`: The number of evidence items to return for each result. The default is `0`. The maximum number of evidence items per query is 10,000.



## query-notices 
`description`: Query system notices.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`collection_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the collection.

`filter`
* `required`: false
* `bindTime`: false
* `description`: A cacheable query that limits the documents returned to exclude any documents that don't mention the query content. Filter searches are better for metadata type searches and when you are trying to get a sense of concepts in the data set.

`query`
* `required`: false
* `bindTime`: false
* `description`: A query search returns all documents in your data set with full enrichments and full text, but with the most relevant documents listed first. Use a query search when you want to find the most relevant search results. You cannot use `natural_language_query` and `query` at the same time.

`natural_language_query`
* `required`: false
* `bindTime`: false
* `description`: A natural language query that returns relevant documents by utilizing training data and natural language understanding. You cannot use `natural_language_query` and `query` at the same time.

`passages`
* `required`: false
* `bindTime`: false
* `description`: A passages query that returns the most relevant passages from the results.

`aggregation`
* `required`: false
* `bindTime`: false
* `description`: An aggregation search uses combinations of filters and query search to return an exact answer. Aggregations are useful for building applications, because you can use them to build lists, tables, and time series. For a full list of possible aggregrations, see the Query reference.

`count`
* `required`: false
* `bindTime`: false
* `description`: Number of documents to return.

`return_fields`
* `required`: false
* `bindTime`: false
* `description`: A comma separated list of the portion of the document hierarchy to return.

`offset`
* `required`: false
* `bindTime`: false
* `description`: The number of query results to skip at the beginning. For example, if the total number of results that are returned is 10, and the offset is 8, it returns the last two results.

`sort`
* `required`: false
* `bindTime`: false
* `description`: A comma separated list of fields in the document to sort on. You can optionally specify a sort direction by prefixing the field with `-` for descending or `+` for ascending. Ascending is the default sort direction if no prefix is specified.

`highlight`
* `required`: false
* `bindTime`: false
* `description`: When true a highlight field is returned for each result which contains the fields that match the query with `<em></em>` tags around the matching query terms. Defaults to false.

`passages_fields`
* `required`: false
* `bindTime`: false
* `description`: A comma-separated list of fields that passages are drawn from. If this parameter not specified, then all top-level fields are included.

`passages_count`
* `required`: false
* `bindTime`: false
* `description`: The maximum number of passages to return. The search returns fewer passages if the requested total is not found. The default is `10`. The maximum is `100`.

`passages_characters`
* `required`: false
* `bindTime`: false
* `description`: The approximate number of characters that any one passage will have. The default is `400`. The minimum is `50`. The maximum is `2000`.

`deduplicate_field`
* `required`: false
* `bindTime`: false
* `description`: When specified, duplicate results based on the field specified are removed from the returned results. Duplicate comparison is limited to the current query only, `offset` is not considered. This parameter is currently Beta functionality.

`similar`
* `required`: false
* `bindTime`: false
* `description`: When `true`, results are returned based on their similarity to the document IDs specified in the `similar.document_ids` parameter. The default is `false`.

`similar_document_ids`
* `required`: false
* `bindTime`: false
* `description`: A comma-separated list of document IDs that will be used to find similar documents.   **Note:** If the `natural_language_query` parameter is also specified, it will be used to expand the scope of the document similarity search to include the natural language query. Other query parameters, such as `filter` and `query` are subsequently applied and reduce the query scope.

`similar_fields`
* `required`: false
* `bindTime`: false
* `description`: A comma-separated list of field names that will be used as a basis for comparison to identify similar documents. If not specified, the entire document is used for comparison.


## query-relations 
`description`: Knowledge Graph relationship query.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`collection_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the collection.
`entities`
* `required`: false
* `bindTime`: false
* `description`: An array of entities to find relationships for.
`context`
* `required`: false
* `bindTime`: false
* `description`: Entity text to provide context for the queried entity and rank based on that association. For example, if you wanted to query the city of London in England your query would look for `London` with the context of `England`.
`sort`
* `required`: false
* `bindTime`: false
* `description`: The sorting method for the relationships, can be `score` or `frequency`. `frequency` is the number of unique times each entity is identified. The default is `score`.
`filter`
* `required`: false
* `bindTime`: false
* `description`: Filters to apply to the relationship query.
`count`
* `required`: false
* `bindTime`: false
* `description`: The number of results to return. The default is `10`. The maximum is `1000`.
`evidence_count`
* `required`: false
* `bindTime`: false
* `description`: The number of evidence items to return for each result. The default is `0`. The maximum number of evidence items per query is 10,000.



## add-training-data 
`description`: Add query to training data.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`collection_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the collection.
`natural_language_query`
* `required`: false
* `bindTime`: false
* `description`: 
`filter`
* `required`: false
* `bindTime`: false
* `description`: 
`examples`
* `required`: false
* `bindTime`: false
* `description`: 



## create-training-example 
`description`: Add example to training data query.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`collection_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the collection.

`query_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the query used for training.
`document_id`
* `required`: false
* `bindTime`: false
* `description`: 
`cross_reference`
* `required`: false
* `bindTime`: false
* `description`: 
`relevance`
* `required`: false
* `bindTime`: false
* `description`: 



## delete-all-training-data 
`description`: Delete all training data.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`collection_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the collection.


## delete-training-data 
`description`: Delete a training data query.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`collection_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the collection.

`query_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the query used for training.


## delete-training-example 
`description`: Delete example for training data query.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`collection_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the collection.

`query_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the query used for training.

`example_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the document as it is indexed.


## get-training-data 
`description`: Get details about a query.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`collection_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the collection.

`query_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the query used for training.


## get-training-example 
`description`: Get details for training data example.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`collection_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the collection.

`query_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the query used for training.

`example_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the document as it is indexed.


## list-training-data 
`description`: List training data.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`collection_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the collection.


## list-training-examples 
`description`: List examples for a training data query.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`collection_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the collection.

`query_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the query used for training.


## update-training-example 
`description`: Change label or cross reference for example.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`environment_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the environment.

`collection_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the collection.

`query_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the query used for training.

`example_id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the document as it is indexed.
`cross_reference`
* `required`: false
* `bindTime`: false
* `description`: 
`relevance`
* `required`: false
* `bindTime`: false
* `description`: 



## delete-user-data 
`description`: Delete labeled data.

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


`version`
* `required`: true
* `bindTime`: true
* `description`: Release date of the API version in YYYY-MM-DD format.


`customer_id`
* `required`: true
* `bindTime`: false
* `description`: The customer ID for which all data is to be deleted.

