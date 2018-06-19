# Watson Text to Speech V1 Package

### Service Overview
The IBM&reg; Text to Speech service provides an API that uses IBM's speech-synthesis capabilities to synthesize text into natural-sounding speech in a variety of languages, dialects, and voices. The service supports at least one male or female voice, sometimes both, for each language. The audio is streamed back to the client with minimal delay. For more information about the service, see the [IBM&reg; Cloud documentation](https://console.bluemix.net/docs/services/text-to-speech/index.html).

### API usage guidelines
* **Audio formats:** The service can produce audio in many formats (MIME types). See [Specifying an audio format](https://console.bluemix.net/docs/services/text-to-speech/http.html#format).
* **SSML:** Many methods refer to the Speech Synthesis Markup Language (SSML). SSML is an XML-based markup language that provides text annotation for speech-synthesis applications. See [Using SSML](https://console.bluemix.net/docs/services/text-to-speech/SSML.html) and [Using IBM SPR](https://console.bluemix.net/docs/services/text-to-speech/SPRs.html).
* **Word translations:** Many customization methods accept sounds-like or phonetic translations for words. Phonetic translations are based on the SSML phoneme format for representing a word. You can specify them in standard International Phonetic Alphabet (IPA) representation

  &lt;phoneme alphabet="ipa" ph="t&#601;m&#712;&#593;to"&gt;&lt;/phoneme&gt;

  or in the proprietary IBM Symbolic Phonetic Representation (SPR)

  &lt;phoneme alphabet="ibm" ph="1gAstroEntxrYFXs"&gt;&lt;/phoneme&gt;

  See [Understanding customization](https://console.bluemix.net/docs/services/text-to-speech/custom-intro.html).
* **WebSocket interface:** The service also offers a WebSocket interface for speech synthesis. The WebSocket interface supports both plain text and SSML input, including the SSML &lt;mark&gt; element and word timings. See [The WebSocket interface](https://console.bluemix.net/docs/services/text-to-speech/websockets.html).
* **Customization IDs:** Many methods accept a customization ID, which is a Globally Unique Identifier (GUID). Customization IDs are hexadecimal strings that have the format `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`.
* **`X-Watson-Learning-Opt-Out`:** By default, all Watson services log requests and their results. Logging is done only to improve the services for future users. The logged data is not shared or made public. To prevent IBM from accessing your data for general service improvements, set the `X-Watson-Learning-Opt-Out` request header to `true` for all requests. You must set the header on each request that you do not want IBM to access for general service improvements.

  Methods of the customization interface do not log words and translations that you use to build custom voice models. Your training data is never used to improve the service's base models. However, the service does log such data when a custom model is used with a synthesize request. You must set the `X-Watson-Learning-Opt-Out` request header to `true` to prevent IBM from accessing the data to improve the service.
* **`X-Watson-Metadata`:** This header allows you to associate a customer ID with data that is passed with a request. If necessary, you can use the **Delete labeled data** method to delete the data for a customer ID. See [Information security](https://console.bluemix.net/docs/services/text-to-speech/information-security.html).

The Watson Text to Speech V1 Package will contain the following entities. Find additional details at the API Reference by clicking the entity name.

| Entity | Type | Parameters | Description |
| --- | --- | --- | --- |
| [`text-to-speech-v1`](https://www.ibm.com/watson/developercloud/text-to-speech/api/v1/curl.html) | package | username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,  | Watson Text to Speech V1 Service |
| [get-voice](https://www.ibm.com/watson/developercloud/text-to-speech/api/v1/curl.html?curl#get-voice) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    voice,     customization_id,  | Get a voice. |
| [list-voices](https://www.ibm.com/watson/developercloud/text-to-speech/api/v1/curl.html?curl#list-voices) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url, | List voices. |
| [synthesize](https://www.ibm.com/watson/developercloud/text-to-speech/api/v1/curl.html?curl#synthesize) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,   text,     accept,     voice,     customization_id,  | Synthesize audio. |
| [get-pronunciation](https://www.ibm.com/watson/developercloud/text-to-speech/api/v1/curl.html?curl#get-pronunciation) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    text,     voice,     format,     customization_id,  | Get pronunciation. |
| [create-voice-model](https://www.ibm.com/watson/developercloud/text-to-speech/api/v1/curl.html?curl#create-voice-model) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,   name, language, description,  | Create a custom model. |
| [delete-voice-model](https://www.ibm.com/watson/developercloud/text-to-speech/api/v1/curl.html?curl#delete-voice-model) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,  | Delete a custom model. |
| [get-voice-model](https://www.ibm.com/watson/developercloud/text-to-speech/api/v1/curl.html?curl#get-voice-model) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,  | Get a custom model. |
| [list-voice-models](https://www.ibm.com/watson/developercloud/text-to-speech/api/v1/curl.html?curl#list-voice-models) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    language,  | List custom models. |
| [update-voice-model](https://www.ibm.com/watson/developercloud/text-to-speech/api/v1/curl.html?curl#update-voice-model) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,    name, description, words,  | Update a custom model. |
| [add-word](https://www.ibm.com/watson/developercloud/text-to-speech/api/v1/curl.html?curl#add-word) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,     word,    translation, part_of_speech,  | Add a custom word. |
| [add-words](https://www.ibm.com/watson/developercloud/text-to-speech/api/v1/curl.html?curl#add-words) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,    words,  | Add custom words. |
| [delete-word](https://www.ibm.com/watson/developercloud/text-to-speech/api/v1/curl.html?curl#delete-word) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,     word,  | Delete a custom word. |
| [get-word](https://www.ibm.com/watson/developercloud/text-to-speech/api/v1/curl.html?curl#get-word) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,     word,  | Get a custom word. |
| [list-words](https://www.ibm.com/watson/developercloud/text-to-speech/api/v1/curl.html?curl#list-words) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customization_id,  | List custom words. |
| [delete-user-data](https://www.ibm.com/watson/developercloud/text-to-speech/api/v1/curl.html?curl#delete-user-data) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    customer_id,  | Delete labeled data. |


## Deploy the Watson Text to Speech V1 Package with IBM Cloud Command Line Interface (CLI):
### Creating a Watson Text to Speech V1 Service Instance

Before you install the package, you must create a Watson Text to Speech V1 service instance and create the credentials.

1. [Create an Watson Text to Speech V1 service instance.](https://console.bluemix.net/catalog/services/text_to_speech)

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
1. To install the Watson Text to Speech V1 package, first clone the package repo.

```
git clone https://github.com/watson-developer-cloud/openwhisk-sdk
```
2. Download [wskdeploy](https://github.com/apache/incubator-openwhisk-wskdeploy/releases) and add the downloaded binary to your PATH
3. Navigate to the packages/text-to-speech-v1 folder.
4. Use `wskdeploy` to install the package using the [`manifest.yml`](./manifest.yml) in this folder.

```
wskdeploy
```

### Bind Service Credentials
You will need to bind your Watson Text to Speech V1 service to the `text-to-speech-v1` package, so that the Actions will have access to the service credentials.

```
bx wsk service bind text_to_speech text-to-speech-v1
```
## Using the Watson Text to Speech V1 Package

### Example usage with Watson Text to Speech V1

```
bx wsk action invoke visual-recognition-v3/<action name> -b -p <param name> <param>
```