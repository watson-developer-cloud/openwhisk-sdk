
# Watson Conversation V1

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


# Actions for Watson Conversation V1
[message](#message)
[create-workspace](#create-workspace)
[delete-workspace](#delete-workspace)
[get-workspace](#get-workspace)
[list-workspaces](#list-workspaces)
[update-workspace](#update-workspace)
[create-intent](#create-intent)
[delete-intent](#delete-intent)
[get-intent](#get-intent)
[list-intents](#list-intents)
[update-intent](#update-intent)
[create-example](#create-example)
[delete-example](#delete-example)
[get-example](#get-example)
[list-examples](#list-examples)
[update-example](#update-example)
[create-counterexample](#create-counterexample)
[delete-counterexample](#delete-counterexample)
[get-counterexample](#get-counterexample)
[list-counterexamples](#list-counterexamples)
[update-counterexample](#update-counterexample)
[create-entity](#create-entity)
[delete-entity](#delete-entity)
[get-entity](#get-entity)
[list-entities](#list-entities)
[update-entity](#update-entity)
[create-value](#create-value)
[delete-value](#delete-value)
[get-value](#get-value)
[list-values](#list-values)
[update-value](#update-value)
[create-synonym](#create-synonym)
[delete-synonym](#delete-synonym)
[get-synonym](#get-synonym)
[list-synonyms](#list-synonyms)
[update-synonym](#update-synonym)
[create-dialog-node](#create-dialog-node)
[delete-dialog-node](#delete-dialog-node)
[get-dialog-node](#get-dialog-node)
[list-dialog-nodes](#list-dialog-nodes)
[update-dialog-node](#update-dialog-node)
[list-all-logs](#list-all-logs)
[list-logs](#list-logs)
[delete-user-data](#delete-user-data)


## message 
`description`: Get response to user input.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.
`input`
* `required`: false
* `bindTime`: false
* `description`: An input object that includes the input text.
`alternate_intents`
* `required`: false
* `bindTime`: false
* `description`: Whether to return more than one intent. Set to `true` to return all matching intents.
`context`
* `required`: false
* `bindTime`: false
* `description`: State information for the conversation. Continue a conversation by including the context object from the previous response.
`entities`
* `required`: false
* `bindTime`: false
* `description`: Entities to use when evaluating the message. Include entities from the previous response to continue using those entities rather than detecting entities in the new input.
`intents`
* `required`: false
* `bindTime`: false
* `description`: Intents to use when evaluating the user input. Include intents from the previous response to continue using those intents rather than trying to recognize intents in the new input.
`output`
* `required`: false
* `bindTime`: false
* `description`: System output. Include the output from the previous response to maintain intermediate information over multiple requests.


`nodes_visited_details`
* `required`: false
* `bindTime`: false
* `description`: Whether to include additional diagnostic information about the dialog nodes that were visited during processing of the message.


## create-workspace 
`description`: Create workspace.

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
* `description`: The name of the workspace. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 64 characters.
`description`
* `required`: false
* `bindTime`: false
* `description`: The description of the workspace. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 128 characters.
`language`
* `required`: false
* `bindTime`: false
* `description`: The language of the workspace.
`intents`
* `required`: false
* `bindTime`: false
* `description`: An array of objects defining the intents for the workspace.
`entities`
* `required`: false
* `bindTime`: false
* `description`: An array of objects defining the entities for the workspace.
`dialog_nodes`
* `required`: false
* `bindTime`: false
* `description`: An array of objects defining the nodes in the workspace dialog.
`counterexamples`
* `required`: false
* `bindTime`: false
* `description`: An array of objects defining input examples that have been marked as irrelevant input.
`metadata`
* `required`: false
* `bindTime`: false
* `description`: Any metadata related to the workspace.
`learning_opt_out`
* `required`: false
* `bindTime`: false
* `description`: Whether training data from the workspace can be used by IBM for general service improvements. `true` indicates that workspace training data is not to be used.



## delete-workspace 
`description`: Delete workspace.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.


## get-workspace 
`description`: Get information about a workspace.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`export`
* `required`: false
* `bindTime`: false
* `description`: Whether to include all element content in the returned data. If **export**=`false`, the returned data includes only information about the element itself. If **export**=`true`, all content, including subelements, is included.

`include_audit`
* `required`: false
* `bindTime`: false
* `description`: Whether to include the audit properties (`created` and `updated` timestamps) in the response.


## list-workspaces 
`description`: List workspaces.

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


`page_limit`
* `required`: false
* `bindTime`: false
* `description`: The number of records to return in each page of results.

`include_count`
* `required`: false
* `bindTime`: false
* `description`: Whether to include information about the number of records returned.

`sort`
* `required`: false
* `bindTime`: false
* `description`: The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`.

`cursor`
* `required`: false
* `bindTime`: false
* `description`: A token identifying the page of results to retrieve.

`include_audit`
* `required`: false
* `bindTime`: false
* `description`: Whether to include the audit properties (`created` and `updated` timestamps) in the response.


## update-workspace 
`description`: Update workspace.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.
`name`
* `required`: false
* `bindTime`: false
* `description`: The name of the workspace. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 64 characters.
`description`
* `required`: false
* `bindTime`: false
* `description`: The description of the workspace. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 128 characters.
`language`
* `required`: false
* `bindTime`: false
* `description`: The language of the workspace.
`intents`
* `required`: false
* `bindTime`: false
* `description`: An array of objects defining the intents for the workspace.
`entities`
* `required`: false
* `bindTime`: false
* `description`: An array of objects defining the entities for the workspace.
`dialog_nodes`
* `required`: false
* `bindTime`: false
* `description`: An array of objects defining the nodes in the workspace dialog.
`counterexamples`
* `required`: false
* `bindTime`: false
* `description`: An array of objects defining input examples that have been marked as irrelevant input.
`metadata`
* `required`: false
* `bindTime`: false
* `description`: Any metadata related to the workspace.
`learning_opt_out`
* `required`: false
* `bindTime`: false
* `description`: Whether training data from the workspace can be used by IBM for general service improvements. `true` indicates that workspace training data is not to be used.


`append`
* `required`: false
* `bindTime`: false
* `description`: Whether the new data is to be appended to the existing data in the workspace. If **append**=`false`, elements included in the new data completely replace the corresponding existing elements, including all subelements. For example, if the new data includes **entities** and **append**=`false`, all existing entities in the workspace are discarded and replaced with the new entities.    If **append**=`true`, existing elements are preserved, and the new elements are added. If any elements in the new data collide with existing elements, the update request fails.


## create-intent 
`description`: Create intent.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.
`intent`
* `required`: true
* `bindTime`: false
* `description`: The name of the intent. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, underscore, hyphen, and dot characters.  - It cannot begin with the reserved prefix `sys-`.  - It must be no longer than 128 characters.
`description`
* `required`: false
* `bindTime`: false
* `description`: The description of the intent. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 128 characters.
`examples`
* `required`: false
* `bindTime`: false
* `description`: An array of user input examples for the intent.



## delete-intent 
`description`: Delete intent.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`intent`
* `required`: true
* `bindTime`: false
* `description`: The intent name.


## get-intent 
`description`: Get intent.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`intent`
* `required`: true
* `bindTime`: false
* `description`: The intent name.

`export`
* `required`: false
* `bindTime`: false
* `description`: Whether to include all element content in the returned data. If **export**=`false`, the returned data includes only information about the element itself. If **export**=`true`, all content, including subelements, is included.

`include_audit`
* `required`: false
* `bindTime`: false
* `description`: Whether to include the audit properties (`created` and `updated` timestamps) in the response.


## list-intents 
`description`: List intents.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`export`
* `required`: false
* `bindTime`: false
* `description`: Whether to include all element content in the returned data. If **export**=`false`, the returned data includes only information about the element itself. If **export**=`true`, all content, including subelements, is included.

`page_limit`
* `required`: false
* `bindTime`: false
* `description`: The number of records to return in each page of results.

`include_count`
* `required`: false
* `bindTime`: false
* `description`: Whether to include information about the number of records returned.

`sort`
* `required`: false
* `bindTime`: false
* `description`: The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`.

`cursor`
* `required`: false
* `bindTime`: false
* `description`: A token identifying the page of results to retrieve.

`include_audit`
* `required`: false
* `bindTime`: false
* `description`: Whether to include the audit properties (`created` and `updated` timestamps) in the response.


## update-intent 
`description`: Update intent.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`intent`
* `required`: true
* `bindTime`: false
* `description`: The intent name.
`new_intent`
* `required`: false
* `bindTime`: false
* `description`: The name of the intent. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, underscore, hyphen, and dot characters.  - It cannot begin with the reserved prefix `sys-`.  - It must be no longer than 128 characters.
`new_description`
* `required`: false
* `bindTime`: false
* `description`: The description of the intent.
`new_examples`
* `required`: false
* `bindTime`: false
* `description`: An array of user input examples for the intent.



## create-example 
`description`: Create user input example.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`intent`
* `required`: true
* `bindTime`: false
* `description`: The intent name.
`text`
* `required`: true
* `bindTime`: false
* `description`: The text of a user input example. This string must conform to the following restrictions:  - It cannot contain carriage return, newline, or tab characters.  - It cannot consist of only whitespace characters.  - It must be no longer than 1024 characters.



## delete-example 
`description`: Delete user input example.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`intent`
* `required`: true
* `bindTime`: false
* `description`: The intent name.

`text`
* `required`: true
* `bindTime`: false
* `description`: The text of the user input example.


## get-example 
`description`: Get user input example.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`intent`
* `required`: true
* `bindTime`: false
* `description`: The intent name.

`text`
* `required`: true
* `bindTime`: false
* `description`: The text of the user input example.

`include_audit`
* `required`: false
* `bindTime`: false
* `description`: Whether to include the audit properties (`created` and `updated` timestamps) in the response.


## list-examples 
`description`: List user input examples.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`intent`
* `required`: true
* `bindTime`: false
* `description`: The intent name.

`page_limit`
* `required`: false
* `bindTime`: false
* `description`: The number of records to return in each page of results.

`include_count`
* `required`: false
* `bindTime`: false
* `description`: Whether to include information about the number of records returned.

`sort`
* `required`: false
* `bindTime`: false
* `description`: The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`.

`cursor`
* `required`: false
* `bindTime`: false
* `description`: A token identifying the page of results to retrieve.

`include_audit`
* `required`: false
* `bindTime`: false
* `description`: Whether to include the audit properties (`created` and `updated` timestamps) in the response.


## update-example 
`description`: Update user input example.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`intent`
* `required`: true
* `bindTime`: false
* `description`: The intent name.

`text`
* `required`: true
* `bindTime`: false
* `description`: The text of the user input example.
`new_text`
* `required`: false
* `bindTime`: false
* `description`: The text of the user input example. This string must conform to the following restrictions:  - It cannot contain carriage return, newline, or tab characters.  - It cannot consist of only whitespace characters.  - It must be no longer than 1024 characters.



## create-counterexample 
`description`: Create counterexample.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.
`text`
* `required`: true
* `bindTime`: false
* `description`: The text of a user input marked as irrelevant input. This string must conform to the following restrictions:  - It cannot contain carriage return, newline, or tab characters  - It cannot consist of only whitespace characters  - It must be no longer than 1024 characters.



## delete-counterexample 
`description`: Delete counterexample.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`text`
* `required`: true
* `bindTime`: false
* `description`: The text of a user input counterexample (for example, `What are you wearing?`).


## get-counterexample 
`description`: Get counterexample.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`text`
* `required`: true
* `bindTime`: false
* `description`: The text of a user input counterexample (for example, `What are you wearing?`).

`include_audit`
* `required`: false
* `bindTime`: false
* `description`: Whether to include the audit properties (`created` and `updated` timestamps) in the response.


## list-counterexamples 
`description`: List counterexamples.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`page_limit`
* `required`: false
* `bindTime`: false
* `description`: The number of records to return in each page of results.

`include_count`
* `required`: false
* `bindTime`: false
* `description`: Whether to include information about the number of records returned.

`sort`
* `required`: false
* `bindTime`: false
* `description`: The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`.

`cursor`
* `required`: false
* `bindTime`: false
* `description`: A token identifying the page of results to retrieve.

`include_audit`
* `required`: false
* `bindTime`: false
* `description`: Whether to include the audit properties (`created` and `updated` timestamps) in the response.


## update-counterexample 
`description`: Update counterexample.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`text`
* `required`: true
* `bindTime`: false
* `description`: The text of a user input counterexample (for example, `What are you wearing?`).
`new_text`
* `required`: false
* `bindTime`: false
* `description`: The text of a user input counterexample.



## create-entity 
`description`: Create entity.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.
`entity`
* `required`: true
* `bindTime`: false
* `description`: The name of the entity. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, underscore, and hyphen characters.  - It cannot begin with the reserved prefix `sys-`.  - It must be no longer than 64 characters.
`description`
* `required`: false
* `bindTime`: false
* `description`: The description of the entity. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 128 characters.
`metadata`
* `required`: false
* `bindTime`: false
* `description`: Any metadata related to the value.
`values`
* `required`: false
* `bindTime`: false
* `description`: An array of objects describing the entity values.
`fuzzy_match`
* `required`: false
* `bindTime`: false
* `description`: Whether to use fuzzy matching for the entity.



## delete-entity 
`description`: Delete entity.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`entity`
* `required`: true
* `bindTime`: false
* `description`: The name of the entity.


## get-entity 
`description`: Get entity.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`entity`
* `required`: true
* `bindTime`: false
* `description`: The name of the entity.

`export`
* `required`: false
* `bindTime`: false
* `description`: Whether to include all element content in the returned data. If **export**=`false`, the returned data includes only information about the element itself. If **export**=`true`, all content, including subelements, is included.

`include_audit`
* `required`: false
* `bindTime`: false
* `description`: Whether to include the audit properties (`created` and `updated` timestamps) in the response.


## list-entities 
`description`: List entities.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`export`
* `required`: false
* `bindTime`: false
* `description`: Whether to include all element content in the returned data. If **export**=`false`, the returned data includes only information about the element itself. If **export**=`true`, all content, including subelements, is included.

`page_limit`
* `required`: false
* `bindTime`: false
* `description`: The number of records to return in each page of results.

`include_count`
* `required`: false
* `bindTime`: false
* `description`: Whether to include information about the number of records returned.

`sort`
* `required`: false
* `bindTime`: false
* `description`: The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`.

`cursor`
* `required`: false
* `bindTime`: false
* `description`: A token identifying the page of results to retrieve.

`include_audit`
* `required`: false
* `bindTime`: false
* `description`: Whether to include the audit properties (`created` and `updated` timestamps) in the response.


## update-entity 
`description`: Update entity.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`entity`
* `required`: true
* `bindTime`: false
* `description`: The name of the entity.
`new_entity`
* `required`: false
* `bindTime`: false
* `description`: The name of the entity. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, underscore, and hyphen characters.  - It cannot begin with the reserved prefix `sys-`.  - It must be no longer than 64 characters.
`new_description`
* `required`: false
* `bindTime`: false
* `description`: The description of the entity. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 128 characters.
`new_metadata`
* `required`: false
* `bindTime`: false
* `description`: Any metadata related to the entity.
`new_fuzzy_match`
* `required`: false
* `bindTime`: false
* `description`: Whether to use fuzzy matching for the entity.
`new_values`
* `required`: false
* `bindTime`: false
* `description`: An array of entity values.



## create-value 
`description`: Add entity value.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`entity`
* `required`: true
* `bindTime`: false
* `description`: The name of the entity.
`value`
* `required`: true
* `bindTime`: false
* `description`: The text of the entity value. This string must conform to the following restrictions:  - It cannot contain carriage return, newline, or tab characters.  - It cannot consist of only whitespace characters.  - It must be no longer than 64 characters.
`metadata`
* `required`: false
* `bindTime`: false
* `description`: Any metadata related to the entity value.
`synonyms`
* `required`: false
* `bindTime`: false
* `description`: An array containing any synonyms for the entity value. You can provide either synonyms or patterns (as indicated by **type**), but not both. A synonym must conform to the following restrictions:  - It cannot contain carriage return, newline, or tab characters.  - It cannot consist of only whitespace characters.  - It must be no longer than 64 characters.
`patterns`
* `required`: false
* `bindTime`: false
* `description`: An array of patterns for the entity value. You can provide either synonyms or patterns (as indicated by **type**), but not both. A pattern is a regular expression no longer than 128 characters. For more information about how to specify a pattern, see the [documentation](https://console.bluemix.net/docs/services/conversation/entities.html#creating-entities).
`value_type`
* `required`: false
* `bindTime`: false
* `description`: Specifies the type of value.



## delete-value 
`description`: Delete entity value.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`entity`
* `required`: true
* `bindTime`: false
* `description`: The name of the entity.

`value`
* `required`: true
* `bindTime`: false
* `description`: The text of the entity value.


## get-value 
`description`: Get entity value.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`entity`
* `required`: true
* `bindTime`: false
* `description`: The name of the entity.

`value`
* `required`: true
* `bindTime`: false
* `description`: The text of the entity value.

`export`
* `required`: false
* `bindTime`: false
* `description`: Whether to include all element content in the returned data. If **export**=`false`, the returned data includes only information about the element itself. If **export**=`true`, all content, including subelements, is included.

`include_audit`
* `required`: false
* `bindTime`: false
* `description`: Whether to include the audit properties (`created` and `updated` timestamps) in the response.


## list-values 
`description`: List entity values.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`entity`
* `required`: true
* `bindTime`: false
* `description`: The name of the entity.

`export`
* `required`: false
* `bindTime`: false
* `description`: Whether to include all element content in the returned data. If **export**=`false`, the returned data includes only information about the element itself. If **export**=`true`, all content, including subelements, is included.

`page_limit`
* `required`: false
* `bindTime`: false
* `description`: The number of records to return in each page of results.

`include_count`
* `required`: false
* `bindTime`: false
* `description`: Whether to include information about the number of records returned.

`sort`
* `required`: false
* `bindTime`: false
* `description`: The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`.

`cursor`
* `required`: false
* `bindTime`: false
* `description`: A token identifying the page of results to retrieve.

`include_audit`
* `required`: false
* `bindTime`: false
* `description`: Whether to include the audit properties (`created` and `updated` timestamps) in the response.


## update-value 
`description`: Update entity value.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`entity`
* `required`: true
* `bindTime`: false
* `description`: The name of the entity.

`value`
* `required`: true
* `bindTime`: false
* `description`: The text of the entity value.
`new_value`
* `required`: false
* `bindTime`: false
* `description`: The text of the entity value. This string must conform to the following restrictions:  - It cannot contain carriage return, newline, or tab characters.  - It cannot consist of only whitespace characters.  - It must be no longer than 64 characters.
`new_metadata`
* `required`: false
* `bindTime`: false
* `description`: Any metadata related to the entity value.
`new_type`
* `required`: false
* `bindTime`: false
* `description`: Specifies the type of value.
`new_synonyms`
* `required`: false
* `bindTime`: false
* `description`: An array of synonyms for the entity value. You can provide either synonyms or patterns (as indicated by **type**), but not both. A synonym must conform to the following resrictions:  - It cannot contain carriage return, newline, or tab characters.  - It cannot consist of only whitespace characters.  - It must be no longer than 64 characters.
`new_patterns`
* `required`: false
* `bindTime`: false
* `description`: An array of patterns for the entity value. You can provide either synonyms or patterns (as indicated by **type**), but not both. A pattern is a regular expression no longer than 128 characters. For more information about how to specify a pattern, see the [documentation](https://console.bluemix.net/docs/services/conversation/entities.html#creating-entities).



## create-synonym 
`description`: Add entity value synonym.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`entity`
* `required`: true
* `bindTime`: false
* `description`: The name of the entity.

`value`
* `required`: true
* `bindTime`: false
* `description`: The text of the entity value.
`synonym`
* `required`: true
* `bindTime`: false
* `description`: The text of the synonym. This string must conform to the following restrictions:  - It cannot contain carriage return, newline, or tab characters.  - It cannot consist of only whitespace characters.  - It must be no longer than 64 characters.



## delete-synonym 
`description`: Delete entity value synonym.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`entity`
* `required`: true
* `bindTime`: false
* `description`: The name of the entity.

`value`
* `required`: true
* `bindTime`: false
* `description`: The text of the entity value.

`synonym`
* `required`: true
* `bindTime`: false
* `description`: The text of the synonym.


## get-synonym 
`description`: Get entity value synonym.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`entity`
* `required`: true
* `bindTime`: false
* `description`: The name of the entity.

`value`
* `required`: true
* `bindTime`: false
* `description`: The text of the entity value.

`synonym`
* `required`: true
* `bindTime`: false
* `description`: The text of the synonym.

`include_audit`
* `required`: false
* `bindTime`: false
* `description`: Whether to include the audit properties (`created` and `updated` timestamps) in the response.


## list-synonyms 
`description`: List entity value synonyms.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`entity`
* `required`: true
* `bindTime`: false
* `description`: The name of the entity.

`value`
* `required`: true
* `bindTime`: false
* `description`: The text of the entity value.

`page_limit`
* `required`: false
* `bindTime`: false
* `description`: The number of records to return in each page of results.

`include_count`
* `required`: false
* `bindTime`: false
* `description`: Whether to include information about the number of records returned.

`sort`
* `required`: false
* `bindTime`: false
* `description`: The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`.

`cursor`
* `required`: false
* `bindTime`: false
* `description`: A token identifying the page of results to retrieve.

`include_audit`
* `required`: false
* `bindTime`: false
* `description`: Whether to include the audit properties (`created` and `updated` timestamps) in the response.


## update-synonym 
`description`: Update entity value synonym.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`entity`
* `required`: true
* `bindTime`: false
* `description`: The name of the entity.

`value`
* `required`: true
* `bindTime`: false
* `description`: The text of the entity value.

`synonym`
* `required`: true
* `bindTime`: false
* `description`: The text of the synonym.
`new_synonym`
* `required`: false
* `bindTime`: false
* `description`: The text of the synonym. This string must conform to the following restrictions:  - It cannot contain carriage return, newline, or tab characters.  - It cannot consist of only whitespace characters.  - It must be no longer than 64 characters.



## create-dialog-node 
`description`: Create dialog node.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.
`dialog_node`
* `required`: true
* `bindTime`: false
* `description`: The dialog node ID. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, space, underscore, hyphen, and dot characters.  - It must be no longer than 1024 characters.
`description`
* `required`: false
* `bindTime`: false
* `description`: The description of the dialog node. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 128 characters.
`conditions`
* `required`: false
* `bindTime`: false
* `description`: The condition that will trigger the dialog node. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 2048 characters.
`parent`
* `required`: false
* `bindTime`: false
* `description`: The ID of the parent dialog node.
`previous_sibling`
* `required`: false
* `bindTime`: false
* `description`: The ID of the previous dialog node.
`output`
* `required`: false
* `bindTime`: false
* `description`: The output of the dialog node. For more information about how to specify dialog node output, see the [documentation](https://console.bluemix.net/docs/services/conversation/dialog-overview.html#complex).
`context`
* `required`: false
* `bindTime`: false
* `description`: The context for the dialog node.
`metadata`
* `required`: false
* `bindTime`: false
* `description`: The metadata for the dialog node.
`next_step`
* `required`: false
* `bindTime`: false
* `description`: The next step to be executed in dialog processing.
`actions`
* `required`: false
* `bindTime`: false
* `description`: An array of objects describing any actions to be invoked by the dialog node.
`title`
* `required`: false
* `bindTime`: false
* `description`: The alias used to identify the dialog node. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, space, underscore, hyphen, and dot characters.  - It must be no longer than 64 characters.
`node_type`
* `required`: false
* `bindTime`: false
* `description`: How the dialog node is processed.
`event_name`
* `required`: false
* `bindTime`: false
* `description`: How an `event_handler` node is processed.
`variable`
* `required`: false
* `bindTime`: false
* `description`: The location in the dialog context where output is stored.
`digress_in`
* `required`: false
* `bindTime`: false
* `description`: Whether this top-level dialog node can be digressed into.
`digress_out`
* `required`: false
* `bindTime`: false
* `description`: Whether this dialog node can be returned to after a digression.
`digress_out_slots`
* `required`: false
* `bindTime`: false
* `description`: Whether the user can digress to top-level nodes while filling out slots.



## delete-dialog-node 
`description`: Delete dialog node.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`dialog_node`
* `required`: true
* `bindTime`: false
* `description`: The dialog node ID (for example, `get_order`).


## get-dialog-node 
`description`: Get dialog node.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`dialog_node`
* `required`: true
* `bindTime`: false
* `description`: The dialog node ID (for example, `get_order`).

`include_audit`
* `required`: false
* `bindTime`: false
* `description`: Whether to include the audit properties (`created` and `updated` timestamps) in the response.


## list-dialog-nodes 
`description`: List dialog nodes.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`page_limit`
* `required`: false
* `bindTime`: false
* `description`: The number of records to return in each page of results.

`include_count`
* `required`: false
* `bindTime`: false
* `description`: Whether to include information about the number of records returned.

`sort`
* `required`: false
* `bindTime`: false
* `description`: The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`.

`cursor`
* `required`: false
* `bindTime`: false
* `description`: A token identifying the page of results to retrieve.

`include_audit`
* `required`: false
* `bindTime`: false
* `description`: Whether to include the audit properties (`created` and `updated` timestamps) in the response.


## update-dialog-node 
`description`: Update dialog node.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`dialog_node`
* `required`: true
* `bindTime`: false
* `description`: The dialog node ID (for example, `get_order`).
`new_dialog_node`
* `required`: false
* `bindTime`: false
* `description`: The dialog node ID. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, space, underscore, hyphen, and dot characters.  - It must be no longer than 1024 characters.
`new_description`
* `required`: false
* `bindTime`: false
* `description`: The description of the dialog node. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 128 characters.
`new_conditions`
* `required`: false
* `bindTime`: false
* `description`: The condition that will trigger the dialog node. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 2048 characters.
`new_parent`
* `required`: false
* `bindTime`: false
* `description`: The ID of the parent dialog node.
`new_previous_sibling`
* `required`: false
* `bindTime`: false
* `description`: The ID of the previous sibling dialog node.
`new_output`
* `required`: false
* `bindTime`: false
* `description`: The output of the dialog node. For more information about how to specify dialog node output, see the [documentation](https://console.bluemix.net/docs/services/conversation/dialog-overview.html#complex).
`new_context`
* `required`: false
* `bindTime`: false
* `description`: The context for the dialog node.
`new_metadata`
* `required`: false
* `bindTime`: false
* `description`: The metadata for the dialog node.
`new_next_step`
* `required`: false
* `bindTime`: false
* `description`: The next step to be executed in dialog processing.
`new_title`
* `required`: false
* `bindTime`: false
* `description`: The alias used to identify the dialog node. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, space, underscore, hyphen, and dot characters.  - It must be no longer than 64 characters.
`new_type`
* `required`: false
* `bindTime`: false
* `description`: How the dialog node is processed.
`new_event_name`
* `required`: false
* `bindTime`: false
* `description`: How an `event_handler` node is processed.
`new_variable`
* `required`: false
* `bindTime`: false
* `description`: The location in the dialog context where output is stored.
`new_actions`
* `required`: false
* `bindTime`: false
* `description`: An array of objects describing any actions to be invoked by the dialog node.
`new_digress_in`
* `required`: false
* `bindTime`: false
* `description`: Whether this top-level dialog node can be digressed into.
`new_digress_out`
* `required`: false
* `bindTime`: false
* `description`: Whether this dialog node can be returned to after a digression.
`new_digress_out_slots`
* `required`: false
* `bindTime`: false
* `description`: Whether the user can digress to top-level nodes while filling out slots.



## list-all-logs 
`description`: List log events in all workspaces.

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


`filter`
* `required`: true
* `bindTime`: false
* `description`: A cacheable parameter that limits the results to those matching the specified filter. You must specify a filter query that includes a value for `language`, as well as a value for `workspace_id` or `request.context.metadata.deployment`. For more information, see the [documentation](https://console.bluemix.net/docs/services/conversation/filter-reference.html#filter-query-syntax).

`sort`
* `required`: false
* `bindTime`: false
* `description`: The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`.

`page_limit`
* `required`: false
* `bindTime`: false
* `description`: The number of records to return in each page of results.

`cursor`
* `required`: false
* `bindTime`: false
* `description`: A token identifying the page of results to retrieve.


## list-logs 
`description`: List log events in a workspace.

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


`workspace_id`
* `required`: true
* `bindTime`: false
* `description`: Unique identifier of the workspace.

`sort`
* `required`: false
* `bindTime`: false
* `description`: The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`.

`filter`
* `required`: false
* `bindTime`: false
* `description`: A cacheable parameter that limits the results to those matching the specified filter. For more information, see the [documentation](https://console.bluemix.net/docs/services/conversation/filter-reference.html#filter-query-syntax).

`page_limit`
* `required`: false
* `bindTime`: false
* `description`: The number of records to return in each page of results.

`cursor`
* `required`: false
* `bindTime`: false
* `description`: A token identifying the page of results to retrieve.


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

