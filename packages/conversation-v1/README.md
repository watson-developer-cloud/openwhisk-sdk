# Watson Conversation V1 Package

The IBM Watson Conversation service combines machine learning, natural language understanding, and integrated dialog tools to create conversation flows between your apps and your users.

The Watson Conversation V1 Package will contain the following entities. Find additional details at the API Reference by clicking the entity name.

| Entity | Type | Parameters | Description |
| --- | --- | --- | --- |
| [`conversation-v1`](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html) | package | username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,  | Watson Conversation V1 Service |
| [message](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#message) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,    input, alternate_intents, context, entities, intents, output,     nodes_visited_details,  | Get response to user input. |
| [create-workspace](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#create-workspace) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,   name, description, language, intents, entities, dialog_nodes, counterexamples, metadata, learning_opt_out,  | Create workspace. |
| [delete-workspace](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#delete-workspace) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,  | Delete workspace. |
| [get-workspace](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#get-workspace) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     export,     include_audit,  | Get information about a workspace. |
| [list-workspaces](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#list-workspaces) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    page_limit,     include_count,     sort,     cursor,     include_audit,  | List workspaces. |
| [update-workspace](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#update-workspace) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,    name, description, language, intents, entities, dialog_nodes, counterexamples, metadata, learning_opt_out,     append,  | Update workspace. |
| [create-intent](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#create-intent) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,    intent, description, examples,  | Create intent. |
| [delete-intent](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#delete-intent) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     intent,  | Delete intent. |
| [get-intent](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#get-intent) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     intent,     export,     include_audit,  | Get intent. |
| [list-intents](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#list-intents) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     export,     page_limit,     include_count,     sort,     cursor,     include_audit,  | List intents. |
| [update-intent](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#update-intent) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     intent,    new_intent, new_description, new_examples,  | Update intent. |
| [create-example](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#create-example) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     intent,    text,  | Create user input example. |
| [delete-example](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#delete-example) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     intent,     text,  | Delete user input example. |
| [get-example](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#get-example) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     intent,     text,     include_audit,  | Get user input example. |
| [list-examples](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#list-examples) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     intent,     page_limit,     include_count,     sort,     cursor,     include_audit,  | List user input examples. |
| [update-example](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#update-example) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     intent,     text,    new_text,  | Update user input example. |
| [create-counterexample](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#create-counterexample) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,    text,  | Create counterexample. |
| [delete-counterexample](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#delete-counterexample) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     text,  | Delete counterexample. |
| [get-counterexample](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#get-counterexample) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     text,     include_audit,  | Get counterexample. |
| [list-counterexamples](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#list-counterexamples) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     page_limit,     include_count,     sort,     cursor,     include_audit,  | List counterexamples. |
| [update-counterexample](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#update-counterexample) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     text,    new_text,  | Update counterexample. |
| [create-entity](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#create-entity) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,    entity, description, metadata, values, fuzzy_match,  | Create entity. |
| [delete-entity](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#delete-entity) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     entity,  | Delete entity. |
| [get-entity](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#get-entity) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     entity,     export,     include_audit,  | Get entity. |
| [list-entities](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#list-entities) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     export,     page_limit,     include_count,     sort,     cursor,     include_audit,  | List entities. |
| [update-entity](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#update-entity) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     entity,    new_entity, new_description, new_metadata, new_fuzzy_match, new_values,  | Update entity. |
| [create-value](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#create-value) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     entity,    value, metadata, synonyms, patterns, value_type,  | Add entity value. |
| [delete-value](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#delete-value) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     entity,     value,  | Delete entity value. |
| [get-value](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#get-value) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     entity,     value,     export,     include_audit,  | Get entity value. |
| [list-values](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#list-values) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     entity,     export,     page_limit,     include_count,     sort,     cursor,     include_audit,  | List entity values. |
| [update-value](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#update-value) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     entity,     value,    new_value, new_metadata, new_type, new_synonyms, new_patterns,  | Update entity value. |
| [create-synonym](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#create-synonym) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     entity,     value,    synonym,  | Add entity value synonym. |
| [delete-synonym](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#delete-synonym) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     entity,     value,     synonym,  | Delete entity value synonym. |
| [get-synonym](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#get-synonym) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     entity,     value,     synonym,     include_audit,  | Get entity value synonym. |
| [list-synonyms](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#list-synonyms) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     entity,     value,     page_limit,     include_count,     sort,     cursor,     include_audit,  | List entity value synonyms. |
| [update-synonym](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#update-synonym) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     entity,     value,     synonym,    new_synonym,  | Update entity value synonym. |
| [create-dialog-node](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#create-dialog-node) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,    dialog_node, description, conditions, parent, previous_sibling, output, context, metadata, next_step, actions, title, node_type, event_name, variable, digress_in, digress_out, digress_out_slots,  | Create dialog node. |
| [delete-dialog-node](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#delete-dialog-node) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     dialog_node,  | Delete dialog node. |
| [get-dialog-node](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#get-dialog-node) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     dialog_node,     include_audit,  | Get dialog node. |
| [list-dialog-nodes](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#list-dialog-nodes) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     page_limit,     include_count,     sort,     cursor,     include_audit,  | List dialog nodes. |
| [update-dialog-node](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#update-dialog-node) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     dialog_node,    new_dialog_node, new_description, new_conditions, new_parent, new_previous_sibling, new_output, new_context, new_metadata, new_next_step, new_title, new_type, new_event_name, new_variable, new_actions, new_digress_in, new_digress_out, new_digress_out_slots,  | Update dialog node. |
| [list-all-logs](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#list-all-logs) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    filter,     sort,     page_limit,     cursor,  | List log events in all workspaces. |
| [list-logs](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#list-logs) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    workspace_id,     sort,     filter,     page_limit,     cursor,  | List log events in a workspace. |
| [delete-user-data](https://www.ibm.com/watson/developercloud/conversation/api/v1/curl.html?curl#delete-user-data) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customer_id,  | Delete labeled data. |


## Deploy the Watson Conversation V1 Package with IBM Cloud Command Line Interface (CLI):
### Creating a Watson Conversation V1 Service Instance

Before you install the package, you must create a Watson Conversation V1 service instance and create the credentials.

1. [Create an Watson Conversation V1 service instance.](https://console.bluemix.net/catalog/services/conversation)

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
1. To install the Watson Conversation V1 package, first clone the package repo.

```
git clone https://github.com/watson-developer-cloud/openwhisk-sdk
```
2. Download [wskdeploy](https://github.com/apache/incubator-openwhisk-wskdeploy/releases) and add the downloaded binary to your PATH
3. Navigate to the packages/conversation-v1 folder.
4. Use `wskdeploy` to install the package using the [`manifest.yml`](./manifest.yml) in this folder.

```
wskdeploy
```

### Bind Service Credentials
You will need to bind your Watson Conversation V1 service to the `conversation-v1` package, so that the Actions will have access to the service credentials.

```
bx wsk service bind conversation conversation-v1
```
## Using the Watson Conversation V1 Package

### Example usage with Watson Conversation V1

```
bx wsk action invoke conversation-v1/<action name> -b -p <param name> <param>
```
