
# Watson Speech to Text V1

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



# Actions for Watson Speech to Text V1
# Actions for Watson Speech to Text V1
[get-model](#get-model)
[list-models](#list-models)
[recognize-sessionless](#recognize-sessionless)
[check-job](#check-job)
[check-jobs](#check-jobs)
[create-job](#create-job)
[delete-job](#delete-job)
[register-callback](#register-callback)
[unregister-callback](#unregister-callback)
[create-language-model](#create-language-model)
[delete-language-model](#delete-language-model)
[get-language-model](#get-language-model)
[list-language-models](#list-language-models)
[reset-language-model](#reset-language-model)
[train-language-model](#train-language-model)
[upgrade-language-model](#upgrade-language-model)
[add-corpus](#add-corpus)
[delete-corpus](#delete-corpus)
[get-corpus](#get-corpus)
[list-corpora](#list-corpora)
[add-word](#add-word)
[add-words](#add-words)
[delete-word](#delete-word)
[get-word](#get-word)
[list-words](#list-words)
[create-acoustic-model](#create-acoustic-model)
[delete-acoustic-model](#delete-acoustic-model)
[get-acoustic-model](#get-acoustic-model)
[list-acoustic-models](#list-acoustic-models)
[reset-acoustic-model](#reset-acoustic-model)
[train-acoustic-model](#train-acoustic-model)
[upgrade-acoustic-model](#upgrade-acoustic-model)
[add-audio](#add-audio)
[delete-audio](#delete-audio)
[get-audio](#get-audio)
[list-audio](#list-audio)
[delete-user-data](#delete-user-data)


## get-model 
`description`: Get a model.

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
* `description`: The identifier of the model in the form of its name from the output of the **Get models** method.


## list-models 
`description`: Get models.

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





## recognize-sessionless 
`description`: Sends audio for speech recognition in sessionless mode.

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




`audio`
* `required`: true
* `bindTime`: false
* `description`: The audio to transcribe in the format specified by the `Content-Type` header.

`content_type`
* `required`: true
* `bindTime`: false
* `description`: The type of the input: audio/basic, audio/flac, audio/l16, audio/mp3, audio/mpeg, audio/mulaw, audio/ogg, audio/ogg;codecs=opus, audio/ogg;codecs=vorbis, audio/wav, audio/webm, audio/webm;codecs=opus, or audio/webm;codecs=vorbis.

`model`
* `required`: false
* `bindTime`: false
* `description`: The identifier of the model that is to be used for the recognition request or, for the **Create a session** method, with the new session.

`customization_id`
* `required`: false
* `bindTime`: false
* `description`: The customization ID (GUID) of a custom language model that is to be used with the recognition request or, for the **Create a session** method, with the new session. The base model of the specified custom language model must match the model specified with the `model` parameter. You must make the request with service credentials created for the instance of the service that owns the custom model. By default, no custom language model is used.

`acoustic_customization_id`
* `required`: false
* `bindTime`: false
* `description`: The customization ID (GUID) of a custom acoustic model that is to be used with the recognition request or, for the **Create a session** method, with the new session. The base model of the specified custom acoustic model must match the model specified with the `model` parameter. You must make the request with service credentials created for the instance of the service that owns the custom model. By default, no custom acoustic model is used.

`base_model_version`
* `required`: false
* `bindTime`: false
* `description`: The version of the specified base model that is to be used with recognition request or, for the **Create a session** method, with the new session. Multiple versions of a base model can exist when a model is updated for internal improvements. The parameter is intended primarily for use with custom models that have been upgraded for a new base model. The default value depends on whether the parameter is used with or without a custom model. For more information, see [Base model version](https://console.bluemix.net/docs/services/speech-to-text/input.html#version).

`customization_weight`
* `required`: false
* `bindTime`: false
* `description`: If you specify the customization ID (GUID) of a custom language model with the recognition request or, for sessions, with the **Create a session** method, the customization weight tells the service how much weight to give to words from the custom language model compared to those from the base model for the current request.   Specify a value between 0.0 and 1.0. Unless a different customization weight was specified for the custom model when it was trained, the default value is 0.3. A customization weight that you specify overrides a weight that was specified when the custom model was trained.   The default value yields the best performance in general. Assign a higher value if your audio makes frequent use of OOV words from the custom model. Use caution when setting the weight: a higher value can improve the accuracy of phrases from the custom model's domain, but it can negatively affect performance on non-domain phrases.

`inactivity_timeout`
* `required`: false
* `bindTime`: false
* `description`: The time in seconds after which, if only silence (no speech) is detected in submitted audio, the connection is closed with a 400 error. Useful for stopping audio submission from a live microphone when a user simply walks away. Use `-1` for infinity.

`keywords`
* `required`: false
* `bindTime`: false
* `description`: An array of keyword strings to spot in the audio. Each keyword string can include one or more tokens. Keywords are spotted only in the final hypothesis, not in interim results. If you specify any keywords, you must also specify a keywords threshold. You can spot a maximum of 1000 keywords. Omit the parameter or specify an empty array if you do not need to spot keywords.

`keywords_threshold`
* `required`: false
* `bindTime`: false
* `description`: A confidence value that is the lower bound for spotting a keyword. A word is considered to match a keyword if its confidence is greater than or equal to the threshold. Specify a probability between 0 and 1 inclusive. No keyword spotting is performed if you omit the parameter. If you specify a threshold, you must also specify one or more keywords.

`max_alternatives`
* `required`: false
* `bindTime`: false
* `description`: The maximum number of alternative transcripts to be returned. By default, a single transcription is returned.

`word_alternatives_threshold`
* `required`: false
* `bindTime`: false
* `description`: A confidence value that is the lower bound for identifying a hypothesis as a possible word alternative (also known as "Confusion Networks"). An alternative word is considered if its confidence is greater than or equal to the threshold. Specify a probability between 0 and 1 inclusive. No alternative words are computed if you omit the parameter.

`word_confidence`
* `required`: false
* `bindTime`: false
* `description`: If `true`, a confidence measure in the range of 0 to 1 is returned for each word. By default, no word confidence measures are returned.

`timestamps`
* `required`: false
* `bindTime`: false
* `description`: If `true`, time alignment is returned for each word. By default, no timestamps are returned.

`profanity_filter`
* `required`: false
* `bindTime`: false
* `description`: If `true` (the default), filters profanity from all output except for keyword results by replacing inappropriate words with a series of asterisks. Set the parameter to `false` to return results with no censoring. Applies to US English transcription only.

`smart_formatting`
* `required`: false
* `bindTime`: false
* `description`: If `true`, converts dates, times, series of digits and numbers, phone numbers, currency values, and internet addresses into more readable, conventional representations in the final transcript of a recognition request. For US English, also converts certain keyword strings to punctuation symbols. By default, no smart formatting is performed. Applies to US English and Spanish transcription only.

`speaker_labels`
* `required`: false
* `bindTime`: false
* `description`: If `true`, the response includes labels that identify which words were spoken by which participants in a multi-person exchange. By default, no speaker labels are returned. Setting `speaker_labels` to `true` forces the `timestamps` parameter to be `true`, regardless of whether you specify `false` for the parameter.   To determine whether a language model supports speaker labels, use the **Get models** method and check that the attribute `speaker_labels` is set to `true`. You can also refer to [Speaker labels](https://console.bluemix.net/docs/services/speech-to-text/output.html#speaker_labels).


## check-job 
`description`: Check a job.

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




`id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the asynchronous job.


## check-jobs 
`description`: Check jobs.

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





## create-job 
`description`: Create a job.

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




`audio`
* `required`: true
* `bindTime`: false
* `description`: The audio to transcribe in the format specified by the `Content-Type` header.

`content_type`
* `required`: true
* `bindTime`: false
* `description`: The type of the input: audio/basic, audio/flac, audio/l16, audio/mp3, audio/mpeg, audio/mulaw, audio/ogg, audio/ogg;codecs=opus, audio/ogg;codecs=vorbis, audio/wav, audio/webm, audio/webm;codecs=opus, or audio/webm;codecs=vorbis.

`model`
* `required`: false
* `bindTime`: false
* `description`: The identifier of the model that is to be used for the recognition request or, for the **Create a session** method, with the new session.

`callback_url`
* `required`: false
* `bindTime`: false
* `description`: A URL to which callback notifications are to be sent. The URL must already be successfully white-listed by using the **Register a callback** method. Omit the parameter to poll the service for job completion and results. You can include the same callback URL with any number of job creation requests. Use the `user_token` parameter to specify a unique user-specified string with each job to differentiate the callback notifications for the jobs.

`events`
* `required`: false
* `bindTime`: false
* `description`: If the job includes a callback URL, a comma-separated list of notification events to which to subscribe. Valid events are: `recognitions.started` generates a callback notification when the service begins to process the job. `recognitions.completed` generates a callback notification when the job is complete; you must use the **Check a job** method to retrieve the results before they time out or are deleted. `recognitions.completed_with_results` generates a callback notification when the job is complete; the notification includes the results of the request. `recognitions.failed` generates a callback notification if the service experiences an error while processing the job. Omit the parameter to subscribe to the default events: `recognitions.started`, `recognitions.completed`, and `recognitions.failed`. The `recognitions.completed` and `recognitions.completed_with_results` events are incompatible; you can specify only of the two events. If the job does not include a callback URL, omit the parameter.

`user_token`
* `required`: false
* `bindTime`: false
* `description`: If the job includes a callback URL, a user-specified string that the service is to include with each callback notification for the job; the token allows the user to maintain an internal mapping between jobs and notification events. If the job does not include a callback URL, omit the parameter.

`results_ttl`
* `required`: false
* `bindTime`: false
* `description`: The number of minutes for which the results are to be available after the job has finished. If not delivered via a callback, the results must be retrieved within this time. Omit the parameter to use a time to live of one week. The parameter is valid with or without a callback URL.

`customization_id`
* `required`: false
* `bindTime`: false
* `description`: The customization ID (GUID) of a custom language model that is to be used with the recognition request or, for the **Create a session** method, with the new session. The base model of the specified custom language model must match the model specified with the `model` parameter. You must make the request with service credentials created for the instance of the service that owns the custom model. By default, no custom language model is used.

`acoustic_customization_id`
* `required`: false
* `bindTime`: false
* `description`: The customization ID (GUID) of a custom acoustic model that is to be used with the recognition request or, for the **Create a session** method, with the new session. The base model of the specified custom acoustic model must match the model specified with the `model` parameter. You must make the request with service credentials created for the instance of the service that owns the custom model. By default, no custom acoustic model is used.

`base_model_version`
* `required`: false
* `bindTime`: false
* `description`: The version of the specified base model that is to be used with recognition request or, for the **Create a session** method, with the new session. Multiple versions of a base model can exist when a model is updated for internal improvements. The parameter is intended primarily for use with custom models that have been upgraded for a new base model. The default value depends on whether the parameter is used with or without a custom model. For more information, see [Base model version](https://console.bluemix.net/docs/services/speech-to-text/input.html#version).

`customization_weight`
* `required`: false
* `bindTime`: false
* `description`: If you specify the customization ID (GUID) of a custom language model with the recognition request or, for sessions, with the **Create a session** method, the customization weight tells the service how much weight to give to words from the custom language model compared to those from the base model for the current request.   Specify a value between 0.0 and 1.0. Unless a different customization weight was specified for the custom model when it was trained, the default value is 0.3. A customization weight that you specify overrides a weight that was specified when the custom model was trained.   The default value yields the best performance in general. Assign a higher value if your audio makes frequent use of OOV words from the custom model. Use caution when setting the weight: a higher value can improve the accuracy of phrases from the custom model's domain, but it can negatively affect performance on non-domain phrases.

`inactivity_timeout`
* `required`: false
* `bindTime`: false
* `description`: The time in seconds after which, if only silence (no speech) is detected in submitted audio, the connection is closed with a 400 error. Useful for stopping audio submission from a live microphone when a user simply walks away. Use `-1` for infinity.

`keywords`
* `required`: false
* `bindTime`: false
* `description`: An array of keyword strings to spot in the audio. Each keyword string can include one or more tokens. Keywords are spotted only in the final hypothesis, not in interim results. If you specify any keywords, you must also specify a keywords threshold. You can spot a maximum of 1000 keywords. Omit the parameter or specify an empty array if you do not need to spot keywords.

`keywords_threshold`
* `required`: false
* `bindTime`: false
* `description`: A confidence value that is the lower bound for spotting a keyword. A word is considered to match a keyword if its confidence is greater than or equal to the threshold. Specify a probability between 0 and 1 inclusive. No keyword spotting is performed if you omit the parameter. If you specify a threshold, you must also specify one or more keywords.

`max_alternatives`
* `required`: false
* `bindTime`: false
* `description`: The maximum number of alternative transcripts to be returned. By default, a single transcription is returned.

`word_alternatives_threshold`
* `required`: false
* `bindTime`: false
* `description`: A confidence value that is the lower bound for identifying a hypothesis as a possible word alternative (also known as "Confusion Networks"). An alternative word is considered if its confidence is greater than or equal to the threshold. Specify a probability between 0 and 1 inclusive. No alternative words are computed if you omit the parameter.

`word_confidence`
* `required`: false
* `bindTime`: false
* `description`: If `true`, a confidence measure in the range of 0 to 1 is returned for each word. By default, no word confidence measures are returned.

`timestamps`
* `required`: false
* `bindTime`: false
* `description`: If `true`, time alignment is returned for each word. By default, no timestamps are returned.

`profanity_filter`
* `required`: false
* `bindTime`: false
* `description`: If `true` (the default), filters profanity from all output except for keyword results by replacing inappropriate words with a series of asterisks. Set the parameter to `false` to return results with no censoring. Applies to US English transcription only.

`smart_formatting`
* `required`: false
* `bindTime`: false
* `description`: If `true`, converts dates, times, series of digits and numbers, phone numbers, currency values, and internet addresses into more readable, conventional representations in the final transcript of a recognition request. For US English, also converts certain keyword strings to punctuation symbols. By default, no smart formatting is performed. Applies to US English and Spanish transcription only.

`speaker_labels`
* `required`: false
* `bindTime`: false
* `description`: If `true`, the response includes labels that identify which words were spoken by which participants in a multi-person exchange. By default, no speaker labels are returned. Setting `speaker_labels` to `true` forces the `timestamps` parameter to be `true`, regardless of whether you specify `false` for the parameter.   To determine whether a language model supports speaker labels, use the **Get models** method and check that the attribute `speaker_labels` is set to `true`. You can also refer to [Speaker labels](https://console.bluemix.net/docs/services/speech-to-text/output.html#speaker_labels).


## delete-job 
`description`: Delete a job.

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




`id`
* `required`: true
* `bindTime`: false
* `description`: The ID of the asynchronous job.


## register-callback 
`description`: Register a callback.

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




`callback_url`
* `required`: true
* `bindTime`: false
* `description`: An HTTP or HTTPS URL to which callback notifications are to be sent. To be white-listed, the URL must successfully echo the challenge string during URL verification. During verification, the client can also check the signature that the service sends in the `X-Callback-Signature` header to verify the origin of the request.

`user_secret`
* `required`: false
* `bindTime`: false
* `description`: A user-specified string that the service uses to generate the HMAC-SHA1 signature that it sends via the `X-Callback-Signature` header. The service includes the header during URL verification and with every notification sent to the callback URL. It calculates the signature over the payload of the notification. If you omit the parameter, the service does not send the header.


## unregister-callback 
`description`: Unregister a callback.

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




`callback_url`
* `required`: true
* `bindTime`: false
* `description`: The callback URL that is to be unregistered.


## create-language-model 
`description`: Create a custom language model.

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



`name`
* `required`: true
* `bindTime`: false
* `description`: A user-defined name for the new custom language model. Use a name that is unique among all custom language models that you own. Use a localized name that matches the language of the custom model. Use a name that describes the domain of the custom model, such as `Medical custom model` or `Legal custom model`.
`base_model_name`
* `required`: true
* `bindTime`: false
* `description`: The name of the base language model that is to be customized by the new custom language model. The new custom model can be used only with the base model that it customizes. To determine whether a base model supports language model customization, request information about the base model and check that the attribute `custom_language_model` is set to `true`, or refer to [Language support for customization](https://console.bluemix.net/docs/services/speech-to-text/custom.html#languageSupport).
`dialect`
* `required`: false
* `bindTime`: false
* `description`: The dialect of the specified language that is to be used with the custom language model. The parameter is meaningful only for Spanish models, for which the service creates a custom language model that is suited for speech in one of the following dialects: * `es-ES` for Castilian Spanish (the default) * `es-LA` for Latin American Spanish * `es-US` for North American (Mexican) Spanish   A specified dialect must be valid for the base model. By default, the dialect matches the language of the base model; for example, `en-US` for either of the US English language models.
`description`
* `required`: false
* `bindTime`: false
* `description`: A description of the new custom language model. Use a localized description that matches the language of the custom model.



## delete-language-model 
`description`: Delete a custom language model.

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




`customization_id`
* `required`: true
* `bindTime`: false
* `description`: The customization ID (GUID) of the custom language model. You must make the request with service credentials created for the instance of the service that owns the custom model.


## get-language-model 
`description`: List a custom language model.

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




`customization_id`
* `required`: true
* `bindTime`: false
* `description`: The customization ID (GUID) of the custom language model. You must make the request with service credentials created for the instance of the service that owns the custom model.


## list-language-models 
`description`: List custom language models.

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




`language`
* `required`: false
* `bindTime`: false
* `description`: The identifier of the language for which custom language or custom acoustic models are to be returned (for example, `en-US`). Omit the parameter to see all custom language or custom acoustic models owned by the requesting service credentials.


## reset-language-model 
`description`: Reset a custom language model.

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




`customization_id`
* `required`: true
* `bindTime`: false
* `description`: The customization ID (GUID) of the custom language model. You must make the request with service credentials created for the instance of the service that owns the custom model.


## train-language-model 
`description`: Train a custom language model.

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




`customization_id`
* `required`: true
* `bindTime`: false
* `description`: The customization ID (GUID) of the custom language model. You must make the request with service credentials created for the instance of the service that owns the custom model.

`word_type_to_add`
* `required`: false
* `bindTime`: false
* `description`: The type of words from the custom language model's words resource on which to train the model: * `all` (the default) trains the model on all new words, regardless of whether they were extracted from corpora or were added or modified by the user. * `user` trains the model only on new words that were added or modified by the user; the model is not trained on new words extracted from corpora.

`customization_weight`
* `required`: false
* `bindTime`: false
* `description`: Specifies a customization weight for the custom language model. The customization weight tells the service how much weight to give to words from the custom language model compared to those from the base model for speech recognition. Specify a value between 0.0 and 1.0; the default is 0.3.   The default value yields the best performance in general. Assign a higher value if your audio makes frequent use of OOV words from the custom model. Use caution when setting the weight: a higher value can improve the accuracy of phrases from the custom model's domain, but it can negatively affect performance on non-domain phrases.   The value that you assign is used for all recognition requests that use the model. You can override it for any recognition request by specifying a customization weight for that request.


## upgrade-language-model 
`description`: Upgrade a custom language model.

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




`customization_id`
* `required`: true
* `bindTime`: false
* `description`: The customization ID (GUID) of the custom language model. You must make the request with service credentials created for the instance of the service that owns the custom model.


## add-corpus 
`description`: Add a corpus.

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




`customization_id`
* `required`: true
* `bindTime`: false
* `description`: The customization ID (GUID) of the custom language model. You must make the request with service credentials created for the instance of the service that owns the custom model.

`corpus_name`
* `required`: true
* `bindTime`: false
* `description`: The name of the corpus for the custom language model. When adding a corpus, do not include spaces in the name; use a localized name that matches the language of the custom model; and do not use the name `user`, which is reserved by the service to denote custom words added or modified by the user.

`corpus_file`
* `required`: true
* `bindTime`: false
* `description`: Must be a base64-encoded string. A plain text file that contains the training data for the corpus. Encode the file in UTF-8 if it contains non-ASCII characters; the service assumes UTF-8 encoding if it encounters non-ASCII characters. With cURL, use the `--data-binary` option to upload the file for the request.

`allow_overwrite`
* `required`: false
* `bindTime`: false
* `description`: If `true`, the specified corpus or audio resource overwrites an existing corpus or audio resource with the same name. If `false` (the default), the request fails if a corpus or audio resource with the same name already exists. The parameter has no effect if a corpus or audio resource with the same name does not already exist.

`corpus_file_content_type`
* `required`: false
* `bindTime`: false
* `description`: The content type of corpus_file.


## delete-corpus 
`description`: Delete a corpus.

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




`customization_id`
* `required`: true
* `bindTime`: false
* `description`: The customization ID (GUID) of the custom language model. You must make the request with service credentials created for the instance of the service that owns the custom model.

`corpus_name`
* `required`: true
* `bindTime`: false
* `description`: The name of the corpus for the custom language model. When adding a corpus, do not include spaces in the name; use a localized name that matches the language of the custom model; and do not use the name `user`, which is reserved by the service to denote custom words added or modified by the user.


## get-corpus 
`description`: List a corpus.

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




`customization_id`
* `required`: true
* `bindTime`: false
* `description`: The customization ID (GUID) of the custom language model. You must make the request with service credentials created for the instance of the service that owns the custom model.

`corpus_name`
* `required`: true
* `bindTime`: false
* `description`: The name of the corpus for the custom language model. When adding a corpus, do not include spaces in the name; use a localized name that matches the language of the custom model; and do not use the name `user`, which is reserved by the service to denote custom words added or modified by the user.


## list-corpora 
`description`: List corpora.

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




`customization_id`
* `required`: true
* `bindTime`: false
* `description`: The customization ID (GUID) of the custom language model. You must make the request with service credentials created for the instance of the service that owns the custom model.


## add-word 
`description`: Add a custom word.

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




`customization_id`
* `required`: true
* `bindTime`: false
* `description`: The customization ID (GUID) of the custom language model. You must make the request with service credentials created for the instance of the service that owns the custom model.

`word_name`
* `required`: true
* `bindTime`: false
* `description`: The custom word for the custom language model. When you add or update a custom word with the **Add a custom word** method, do not include spaces in the word. Use a `-` (dash) or `_` (underscore) to connect the tokens of compound words.
`word`
* `required`: false
* `bindTime`: false
* `description`: For the **Add custom words** method, you must specify the custom word that is to be added to or updated in the custom model. Do not include spaces in the word. Use a `-` (dash) or `_` (underscore) to connect the tokens of compound words.   Omit this field for the **Add a custom word** method.
`sounds_like`
* `required`: false
* `bindTime`: false
* `description`: An array of sounds-like pronunciations for the custom word. Specify how words that are difficult to pronounce, foreign words, acronyms, and so on can be pronounced by users. For a word that is not in the service's base vocabulary, omit the parameter to have the service automatically generate a sounds-like pronunciation for the word. For a word that is in the service's base vocabulary, use the parameter to specify additional pronunciations for the word. You cannot override the default pronunciation of a word; pronunciations you add augment the pronunciation from the base vocabulary. A word can have at most five sounds-like pronunciations, and a pronunciation can include at most 40 characters not including spaces.
`display_as`
* `required`: false
* `bindTime`: false
* `description`: An alternative spelling for the custom word when it appears in a transcript. Use the parameter when you want the word to have a spelling that is different from its usual representation or from its spelling in corpora training data.



## add-words 
`description`: Add custom words.

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




`customization_id`
* `required`: true
* `bindTime`: false
* `description`: The customization ID (GUID) of the custom language model. You must make the request with service credentials created for the instance of the service that owns the custom model.
`words`
* `required`: true
* `bindTime`: false
* `description`: An array of objects that provides information about each custom word that is to be added to or updated in the custom language model.



## delete-word 
`description`: Delete a custom word.

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




`customization_id`
* `required`: true
* `bindTime`: false
* `description`: The customization ID (GUID) of the custom language model. You must make the request with service credentials created for the instance of the service that owns the custom model.

`word_name`
* `required`: true
* `bindTime`: false
* `description`: The custom word for the custom language model. When you add or update a custom word with the **Add a custom word** method, do not include spaces in the word. Use a `-` (dash) or `_` (underscore) to connect the tokens of compound words.


## get-word 
`description`: List a custom word.

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




`customization_id`
* `required`: true
* `bindTime`: false
* `description`: The customization ID (GUID) of the custom language model. You must make the request with service credentials created for the instance of the service that owns the custom model.

`word_name`
* `required`: true
* `bindTime`: false
* `description`: The custom word for the custom language model. When you add or update a custom word with the **Add a custom word** method, do not include spaces in the word. Use a `-` (dash) or `_` (underscore) to connect the tokens of compound words.


## list-words 
`description`: List custom words.

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




`customization_id`
* `required`: true
* `bindTime`: false
* `description`: The customization ID (GUID) of the custom language model. You must make the request with service credentials created for the instance of the service that owns the custom model.

`word_type`
* `required`: false
* `bindTime`: false
* `description`: The type of words to be listed from the custom language model's words resource: * `all` (the default) shows all words. * `user` shows only custom words that were added or modified by the user. * `corpora` shows only OOV that were extracted from corpora.

`sort`
* `required`: false
* `bindTime`: false
* `description`: Indicates the order in which the words are to be listed, `alphabetical` or by `count`. You can prepend an optional `+` or `-` to an argument to indicate whether the results are to be sorted in ascending or descending order. By default, words are sorted in ascending alphabetical order. For alphabetical ordering, the lexicographical precedence is numeric values, uppercase letters, and lowercase letters. For count ordering, values with the same count are ordered alphabetically. With cURL, URL encode the `+` symbol as `%2B`.


## create-acoustic-model 
`description`: Create a custom acoustic model.

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



`name`
* `required`: true
* `bindTime`: false
* `description`: A user-defined name for the new custom acoustic model. Use a name that is unique among all custom acoustic models that you own. Use a localized name that matches the language of the custom model. Use a name that describes the acoustic environment of the custom model, such as `Mobile custom model` or `Noisy car custom model`.
`base_model_name`
* `required`: true
* `bindTime`: false
* `description`: The name of the base language model that is to be customized by the new custom acoustic model. The new custom model can be used only with the base model that it customizes. To determine whether a base model supports acoustic model customization, refer to [Language support for customization](https://console.bluemix.net/docs/services/speech-to-text/custom.html#languageSupport).
`description`
* `required`: false
* `bindTime`: false
* `description`: A description of the new custom acoustic model. Use a localized description that matches the language of the custom model.



## delete-acoustic-model 
`description`: Delete a custom acoustic model.

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




`customization_id`
* `required`: true
* `bindTime`: false
* `description`: The customization ID (GUID) of the custom acoustic model. You must make the request with service credentials created for the instance of the service that owns the custom model.


## get-acoustic-model 
`description`: List a custom acoustic model.

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




`customization_id`
* `required`: true
* `bindTime`: false
* `description`: The customization ID (GUID) of the custom acoustic model. You must make the request with service credentials created for the instance of the service that owns the custom model.


## list-acoustic-models 
`description`: List custom acoustic models.

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




`language`
* `required`: false
* `bindTime`: false
* `description`: The identifier of the language for which custom language or custom acoustic models are to be returned (for example, `en-US`). Omit the parameter to see all custom language or custom acoustic models owned by the requesting service credentials.


## reset-acoustic-model 
`description`: Reset a custom acoustic model.

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




`customization_id`
* `required`: true
* `bindTime`: false
* `description`: The customization ID (GUID) of the custom acoustic model. You must make the request with service credentials created for the instance of the service that owns the custom model.


## train-acoustic-model 
`description`: Train a custom acoustic model.

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




`customization_id`
* `required`: true
* `bindTime`: false
* `description`: The customization ID (GUID) of the custom acoustic model. You must make the request with service credentials created for the instance of the service that owns the custom model.

`custom_language_model_id`
* `required`: false
* `bindTime`: false
* `description`: The customization ID (GUID) of a custom language model that is to be used during training of the custom acoustic model. Specify a custom language model that has been trained with verbatim transcriptions of the audio resources or that contains words that are relevant to the contents of the audio resources.


## upgrade-acoustic-model 
`description`: Upgrade a custom acoustic model.

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




`customization_id`
* `required`: true
* `bindTime`: false
* `description`: The customization ID (GUID) of the custom acoustic model. You must make the request with service credentials created for the instance of the service that owns the custom model.

`custom_language_model_id`
* `required`: false
* `bindTime`: false
* `description`: If the custom acoustic model was trained with a custom language model, the customization ID (GUID) of that custom language model. The custom language model must be upgraded before the custom acoustic model can be upgraded.


## add-audio 
`description`: Add an audio resource.

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




`customization_id`
* `required`: true
* `bindTime`: false
* `description`: The customization ID (GUID) of the custom acoustic model. You must make the request with service credentials created for the instance of the service that owns the custom model.

`audio_name`
* `required`: true
* `bindTime`: false
* `description`: The name of the audio resource for the custom acoustic model. When adding an audio resource, do not include spaces in the name; use a localized name that matches the language of the custom model.

`audio_resource`
* `required`: true
* `bindTime`: false
* `description`: The audio resource that is to be added to the custom acoustic model, an individual audio file or an archive file.

`content_type`
* `required`: true
* `bindTime`: false
* `description`: The type of the input: application/zip, application/gzip, audio/basic, audio/flac, audio/l16, audio/mp3, audio/mpeg, audio/mulaw, audio/ogg, audio/ogg;codecs=opus, audio/ogg;codecs=vorbis, audio/wav, audio/webm, audio/webm;codecs=opus, or audio/webm;codecs=vorbis.

`contained_content_type`
* `required`: false
* `bindTime`: false
* `description`: For an archive-type resource, specifies the format of the audio files contained in the archive file. The parameter accepts all of the audio formats supported for use with speech recognition, including the `rate`, `channels`, and `endianness` parameters that are used with some formats. For a complete list of supported audio formats, see [Audio formats](/docs/services/speech-to-text/input.html#formats).

`allow_overwrite`
* `required`: false
* `bindTime`: false
* `description`: If `true`, the specified corpus or audio resource overwrites an existing corpus or audio resource with the same name. If `false` (the default), the request fails if a corpus or audio resource with the same name already exists. The parameter has no effect if a corpus or audio resource with the same name does not already exist.


## delete-audio 
`description`: Delete an audio resource.

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




`customization_id`
* `required`: true
* `bindTime`: false
* `description`: The customization ID (GUID) of the custom acoustic model. You must make the request with service credentials created for the instance of the service that owns the custom model.

`audio_name`
* `required`: true
* `bindTime`: false
* `description`: The name of the audio resource for the custom acoustic model. When adding an audio resource, do not include spaces in the name; use a localized name that matches the language of the custom model.


## get-audio 
`description`: List an audio resource.

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




`customization_id`
* `required`: true
* `bindTime`: false
* `description`: The customization ID (GUID) of the custom acoustic model. You must make the request with service credentials created for the instance of the service that owns the custom model.

`audio_name`
* `required`: true
* `bindTime`: false
* `description`: The name of the audio resource for the custom acoustic model. When adding an audio resource, do not include spaces in the name; use a localized name that matches the language of the custom model.


## list-audio 
`description`: List audio resources.

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




`customization_id`
* `required`: true
* `bindTime`: false
* `description`: The customization ID (GUID) of the custom acoustic model. You must make the request with service credentials created for the instance of the service that owns the custom model.


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




`customer_id`
* `required`: true
* `bindTime`: false
* `description`: The customer ID for which all data is to be deleted.

