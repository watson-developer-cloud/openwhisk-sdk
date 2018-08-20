# Watson Speech to Text V1 Package

The IBM&reg; Speech to Text service provides an API that uses IBM's speech-recognition capabilities to produce transcripts of spoken audio. The service can transcribe speech from various languages and audio formats. It addition to basic transcription, the service can produce detailed information about many aspects of the audio. For most languages, the service supports two sampling rates, broadband and narrowband. It returns all JSON response content in the UTF-8 character set. For more information about the service, see the [IBM&reg; Cloud documentation](https://console.bluemix.net/docs/services/speech-to-text/index.html).

### API usage guidelines
* **Audio formats:** The service accepts audio in many formats (MIME types). See [Audio formats](https://console.bluemix.net/docs/services/speech-to-text/audio-formats.html).
* **HTTP interfaces:** The service provides three HTTP interfaces for speech recognition. The sessionless interface includes a single synchronous method. The session-based interface includes multiple synchronous methods for maintaining a long, multi-turn exchange with the service. And the asynchronous interface provides multiple methods that use registered callbacks and polling for non-blocking recognition. See [The HTTP REST interface](https://console.bluemix.net/docs/services/speech-to-text/http.html) and [The asynchronous HTTP interface](https://console.bluemix.net/docs/services/speech-to-text/async.html).

  **Important:** The session-based interface is deprecated as of August 8, 2018, and will be removed from service on September 7, 2018. Use the sessionless, asynchronous, or WebSocket interface instead. For more information, see the August 8 service update in the [Release notes](https://console.bluemix.net/docs/services/speech-to-text/release-notes.html#August2018).
* **WebSocket interface:** The service also offers a WebSocket interface for speech recognition. The WebSocket interface provides a full-duplex, low-latency communication channel. Clients send requests and audio to the service and receive results over a single connection in an asynchronous fashion. See [The WebSocket interface](https://console.bluemix.net/docs/services/speech-to-text/websockets.html).
* **Customization:** Use language model customization to expand the vocabulary of a base model with domain-specific terminology. Use acoustic model customization to adapt a base model for the acoustic characteristics of your audio. Language model customization is generally available for production use by most supported languages; acoustic model customization is beta functionality that is available for all supported languages. See [The customization interface](https://console.bluemix.net/docs/services/speech-to-text/custom.html).
* **Customization IDs:** Many methods accept a customization ID to identify a custom language or custom acoustic model. Customization IDs are Globally Unique Identifiers (GUIDs). They are hexadecimal strings that have the format `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`.
* **`X-Watson-Learning-Opt-Out`:** By default, all Watson services log requests and their results. Logging is done only to improve the services for future users. The logged data is not shared or made public. To prevent IBM from accessing your data for general service improvements, set the `X-Watson-Learning-Opt-Out` request header to `true` for all requests. You must set the header on each request that you do not want IBM to access for general service improvements.

  Methods of the customization interface do not log corpora, words, and audio resources that you use to build custom models. Your training data is never used to improve the service's base models. However, the service does log such data when a custom model is used with a recognition request. You must set the `X-Watson-Learning-Opt-Out` request header to `true` to prevent IBM from accessing the data to improve the service.
* **`X-Watson-Metadata`**: This header allows you to associate a customer ID with data that is passed with a request. If necessary, you can use the **Delete labeled data** method to delete the data for a customer ID. See [Information security](https://console.bluemix.net/docs/services/speech-to-text/information-security.html).

The Watson Speech to Text V1 Package will contain the following entities. Find additional details at the API Reference by clicking the entity name.

| Entity | Type | Parameters | Description |
| --- | --- | --- | --- |
| [`speech-to-text-v1`](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html) | package | username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,  | Watson Speech to Text V1 Service |
| [get-model](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#get-model) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    model_id,  | Get a model |
| [list-models](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#list-models) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url, | List models |
| [recognize](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#recognize) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    audio,     content_type,     model,     customization_id,     acoustic_customization_id,     base_model_version,     customization_weight,     inactivity_timeout,     keywords,     keywords_threshold,     max_alternatives,     word_alternatives_threshold,     word_confidence,     timestamps,     profanity_filter,     smart_formatting,     speaker_labels,  | Recognize audio |
| [check-job](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#check-job) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    id,  | Check a job |
| [check-jobs](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#check-jobs) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url, | Check jobs |
| [create-job](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#create-job) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    audio,     content_type,     model,     callback_url,     events,     user_token,     results_ttl,     customization_id,     acoustic_customization_id,     base_model_version,     customization_weight,     inactivity_timeout,     keywords,     keywords_threshold,     max_alternatives,     word_alternatives_threshold,     word_confidence,     timestamps,     profanity_filter,     smart_formatting,     speaker_labels,  | Create a job |
| [delete-job](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#delete-job) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    id,  | Delete a job |
| [register-callback](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#register-callback) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    callback_url,     user_secret,  | Register a callback |
| [unregister-callback](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#unregister-callback) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    callback_url,  | Unregister a callback |
| [create-language-model](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#create-language-model) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,   name, base_model_name, dialect, description,  | Create a custom language model |
| [delete-language-model](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#delete-language-model) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,  | Delete a custom language model |
| [get-language-model](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#get-language-model) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,  | Get a custom language model |
| [list-language-models](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#list-language-models) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    language,  | List custom language models |
| [reset-language-model](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#reset-language-model) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,  | Reset a custom language model |
| [train-language-model](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#train-language-model) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,     word_type_to_add,     customization_weight,  | Train a custom language model |
| [upgrade-language-model](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#upgrade-language-model) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,  | Upgrade a custom language model |
| [add-corpus](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#add-corpus) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,     corpus_name,     corpus_file,     allow_overwrite,  | Add a corpus |
| [delete-corpus](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#delete-corpus) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,     corpus_name,  | Delete a corpus |
| [get-corpus](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#get-corpus) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,     corpus_name,  | Get a corpus |
| [list-corpora](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#list-corpora) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,  | List corpora |
| [add-word](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#add-word) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,     word_name,    word, sounds_like, display_as,  | Add a custom word |
| [add-words](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#add-words) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,    words,  | Add custom words |
| [delete-word](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#delete-word) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,     word_name,  | Delete a custom word |
| [get-word](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#get-word) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,     word_name,  | Get a custom word |
| [list-words](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#list-words) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,     word_type,     sort,  | List custom words |
| [create-acoustic-model](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#create-acoustic-model) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,   name, base_model_name, description,  | Create a custom acoustic model |
| [delete-acoustic-model](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#delete-acoustic-model) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,  | Delete a custom acoustic model |
| [get-acoustic-model](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#get-acoustic-model) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,  | Get a custom acoustic model |
| [list-acoustic-models](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#list-acoustic-models) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    language,  | List custom acoustic models |
| [reset-acoustic-model](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#reset-acoustic-model) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,  | Reset a custom acoustic model |
| [train-acoustic-model](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#train-acoustic-model) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,     custom_language_model_id,  | Train a custom acoustic model |
| [upgrade-acoustic-model](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#upgrade-acoustic-model) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,     custom_language_model_id,  | Upgrade a custom acoustic model |
| [add-audio](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#add-audio) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,     audio_name,     audio_resource,     content_type,     contained_content_type,     allow_overwrite,  | Add an audio resource |
| [delete-audio](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#delete-audio) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,     audio_name,  | Delete an audio resource |
| [get-audio](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#get-audio) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,     audio_name,  | Get an audio resource |
| [list-audio](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#list-audio) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,  | List audio resources |
| [delete-user-data](https://www.ibm.com/watson/developercloud/speech-to-text/api/v1/curl.html?curl#delete-user-data) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customer_id,  | Delete labeled data |


## Deploy the Watson Speech to Text V1 Package with IBM Cloud Command Line Interface (CLI):
### Creating a Watson Speech to Text V1 Service Instance

Before you install the package, you must create a Watson Speech to Text V1 service instance and create the credentials.

1. [Create an Watson Speech to Text V1 service instance.](https://console.bluemix.net/catalog/services/speech_to_text)

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
1. To install the Watson Speech to Text V1 package, first clone the package repo.

```
git clone https://github.com/watson-developer-cloud/openwhisk-sdk
```
2. Download [wskdeploy](https://github.com/apache/incubator-openwhisk-wskdeploy/releases) and add the downloaded binary to your PATH
3. Navigate to the packages/speech-to-text-v1 folder.
4. Use `wskdeploy` to install the package using the [`manifest.yaml`](./manifest.yaml) in this folder.

```
wskdeploy
```

### Bind Service Credentials
You will need to bind your Watson Speech to Text V1 service to the `speech-to-text-v1` package, so that the Actions will have access to the service credentials.

```
bx wsk service bind speech_to_text speech-to-text-v1
```
## Using the Watson Speech to Text V1 Package

### Example usage with Watson Speech to Text V1

```
bx wsk action invoke speech-to-text-v1/<action name> -b -p <param name> <param>
```
