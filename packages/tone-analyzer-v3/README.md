
# Watson Tone Analyzer V3

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



# Actions for Watson Tone Analyzer V3
[tone](#tone)
[tone-chat](#tone-chat)


## tone 
`description`: Analyze general tone.

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


`tone_input`
* `required`: true
* `bindTime`: false
* `description`: JSON, plain text, or HTML input that contains the content to be analyzed. For JSON input, provide an object of type `ToneInput`.

`content_type`
* `required`: true
* `bindTime`: false
* `description`: The type of the input: application/json, text/plain, or text/html. A character encoding can be specified by including a `charset` parameter. For example, 'text/plain;charset=utf-8'.

`sentences`
* `required`: false
* `bindTime`: false
* `description`: Indicates whether the service is to return an analysis of each individual sentence in addition to its analysis of the full document. If `true` (the default), the service returns results for each sentence.

`tones`
* `required`: false
* `bindTime`: false
* `description`: **`2017-09-21`:** Deprecated. The service continues to accept the parameter for backward-compatibility, but the parameter no longer affects the response.   **`2016-05-19`:** A comma-separated list of tones for which the service is to return its analysis of the input; the indicated tones apply both to the full document and to individual sentences of the document. You can specify one or more of the valid values. Omit the parameter to request results for all three tones.

`content_language`
* `required`: false
* `bindTime`: false
* `description`: The language of the input text for the request: English or French. Regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`. The input content must match the specified language. Do not submit content that contains both languages. You can use different languages for **Content-Language** and **Accept-Language**. * **`2017-09-21`:** Accepts `en` or `fr`. * **`2016-05-19`:** Accepts only `en`.

`accept_language`
* `required`: false
* `bindTime`: false
* `description`: The desired language of the response. For two-character arguments, regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`. You can use different languages for **Content-Language** and **Accept-Language**.


## tone-chat 
`description`: Analyze customer engagement tone.

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

`utterances`
* `required`: true
* `bindTime`: false
* `description`: An array of `Utterance` objects that provides the input content that the service is to analyze.


`content_language`
* `required`: false
* `bindTime`: false
* `description`: The language of the input text for the request: English or French. Regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`. The input content must match the specified language. Do not submit content that contains both languages. You can use different languages for **Content-Language** and **Accept-Language**. * **`2017-09-21`:** Accepts `en` or `fr`. * **`2016-05-19`:** Accepts only `en`.

`accept_language`
* `required`: false
* `bindTime`: false
* `description`: The desired language of the response. For two-character arguments, regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`. You can use different languages for **Content-Language** and **Accept-Language**.

