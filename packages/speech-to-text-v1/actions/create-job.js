/**
 * Copyright 2018 IBM All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
const extend = require('extend');
const vcap = require('vcap_services');

/**
 * Create a job.
 *
 * Creates a job for a new asynchronous recognition request. The job is owned by the user whose service credentials are
 * used to create it. How you learn the status and results of a job depends on the parameters you include with the job
 * creation request:
 * * By callback notification: Include the `callback_url` parameter to specify a URL to which the service is to send
 * callback notifications when the status of the job changes. Optionally, you can also include the `events` and
 * `user_token` parameters to subscribe to specific events and to specify a string that is to be included with each
 * notification for the job.
 * * By polling the service: Omit the `callback_url`, `events`, and `user_token` parameters. You must then use the
 * **Check jobs** or **Check a job** methods to check the status of the job, using the latter to retrieve the results
 * when the job is complete.
 *
 * The two approaches are not mutually exclusive. You can poll the service for job status or obtain results from the
 * service manually even if you include a callback URL. In both cases, you can include the `results_ttl` parameter to
 * specify how long the results are to remain available after the job is complete. Using the HTTPS **Check a job**
 * method to retrieve results is more secure than receiving them via callback notification over HTTP because it provides
 * confidentiality in addition to authentication and data integrity.
 *
 * The method supports the same basic parameters as other HTTP and WebSocket recognition requests. It also supports the
 * following parameters specific to the asynchronous interface:
 * * `callback_url`
 * * `events`
 * * `user_token`
 * * `results_ttl`
 *
 * The service imposes a data size limit of 100 MB. It automatically detects the endianness of the incoming audio and,
 * for audio that includes multiple channels, downmixes the audio to one-channel mono during transcoding.
 *
 * **See also:** [Creating a job](https://console.bluemix.net/docs/services/speech-to-text/async.html#create).
 *
 * ### Streaming mode
 *
 *  For requests to transcribe live audio as it becomes available, you must set the `Transfer-Encoding` header to
 * `chunked` to use streaming mode. In streaming mode, the server closes the connection (status code 408) if the service
 * receives no data chunk for 30 seconds and it has no audio to transcribe for 30 seconds. The server also closes the
 * connection (status code 400) if no speech is detected for `inactivity_timeout` seconds of audio (not processing
 * time); use the `inactivity_timeout` parameter to change the default of 30 seconds.
 *
 * **See also:**
 * * [Audio transmission](https://console.bluemix.net/docs/services/speech-to-text/input.html#transmission)
 * * [Timeouts](https://console.bluemix.net/docs/services/speech-to-text/input.html#timeouts)
 *
 * ### Audio formats (content types)
 *
 *  The service accepts audio in the following formats (MIME types).
 * * For formats that are labeled **Required**, you must use the `Content-Type` header with the request to specify the
 * format of the audio.
 * * For all other formats, you can omit the `Content-Type` header or specify `application/octet-stream` with the header
 * to have the service automatically detect the format of the audio. (With the `curl` command, you can specify either
 * `\"Content-Type:\"` or `\"Content-Type: application/octet-stream\"`.)
 *
 * Where indicated, the format that you specify must include the sampling rate and can optionally include the number of
 * channels and the endianness of the audio.
 * * `audio/basic` (**Required.** Use only with narrowband models.)
 * * `audio/flac`
 * * `audio/l16` (**Required.** Specify the sampling rate (`rate`) and optionally the number of channels (`channels`)
 * and endianness (`endianness`) of the audio.)
 * * `audio/mp3`
 * * `audio/mpeg`
 * * `audio/mulaw` (**Required.** Specify the sampling rate (`rate`) of the audio.)
 * * `audio/ogg` (The service automatically detects the codec of the input audio.)
 * * `audio/ogg;codecs=opus`
 * * `audio/ogg;codecs=vorbis`
 * * `audio/wav` (Provide audio with a maximum of nine channels.)
 * * `audio/webm` (The service automatically detects the codec of the input audio.)
 * * `audio/webm;codecs=opus`
 * * `audio/webm;codecs=vorbis`
 *
 * **See also:** [Audio formats](https://console.bluemix.net/docs/services/speech-to-text/audio-formats.html).
 *
 * **Note:** You must pass a content type when using any of the Watson SDKs. The SDKs require the content-type parameter
 * for all audio formats.
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.username] - The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
 * @param {string} [params.password] - The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
 * @param {string} [params.iam_access_token] - An IAM access token fully managed by the application. Responsibility falls on the application to refresh the token, either before it expires or reactively upon receiving a 401 from the service, as any requests made with an expired token will fail.
 * @param {string} [params.iam_apikey] - An API key that can be used to request IAM tokens. If this API key is provided, the SDK will manage the token and handle the refreshing.
 * @param {string} [params.iam_url] - An optional URL for the IAM service API. Defaults to 'https://iam.bluemix.net/identity/token'.
 * @param {Object} [params.headers] - Custom HTTP request headers
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {ReadableStream|FileObject|Buffer} params.audio - The audio to transcribe.
 * @param {string} params.content_type - The type of the input.
 * @param {string} [params.model] - The identifier of the model that is to be used for the recognition request.
 * @param {string} [params.callback_url] - A URL to which callback notifications are to be sent. The URL must already be
 * successfully white-listed by using the **Register a callback** method. You can include the same callback URL with any
 * number of job creation requests. Omit the parameter to poll the service for job completion and results.
 *
 * Use the `user_token` parameter to specify a unique user-specified string with each job to differentiate the callback
 * notifications for the jobs.
 * @param {string} [params.events] - If the job includes a callback URL, a comma-separated list of notification events
 * to which to subscribe. Valid events are
 * * `recognitions.started` generates a callback notification when the service begins to process the job.
 * * `recognitions.completed` generates a callback notification when the job is complete. You must use the **Check a
 * job** method to retrieve the results before they time out or are deleted.
 * * `recognitions.completed_with_results` generates a callback notification when the job is complete. The notification
 * includes the results of the request.
 * * `recognitions.failed` generates a callback notification if the service experiences an error while processing the
 * job.
 *
 * The `recognitions.completed` and `recognitions.completed_with_results` events are incompatible. You can specify only
 * of the two events.
 *
 * If the job includes a callback URL, omit the parameter to subscribe to the default events: `recognitions.started`,
 * `recognitions.completed`, and `recognitions.failed`. If the job does not include a callback URL, omit the parameter.
 * @param {string} [params.user_token] - If the job includes a callback URL, a user-specified string that the service is
 * to include with each callback notification for the job; the token allows the user to maintain an internal mapping
 * between jobs and notification events. If the job does not include a callback URL, omit the parameter.
 * @param {number} [params.results_ttl] - The number of minutes for which the results are to be available after the job
 * has finished. If not delivered via a callback, the results must be retrieved within this time. Omit the parameter to
 * use a time to live of one week. The parameter is valid with or without a callback URL.
 * @param {string} [params.language_customization_id] - The customization ID (GUID) of a custom language model that is
 * to be used with the recognition request. The base model of the specified custom language model must match the model
 * specified with the `model` parameter. You must make the request with service credentials created for the instance of
 * the service that owns the custom model. By default, no custom language model is used. See [Custom
 * models](https://console.bluemix.net/docs/services/speech-to-text/input.html#custom).
 *
 * **Note:** Use this parameter instead of the deprecated `customization_id` parameter.
 * @param {string} [params.acoustic_customization_id] - The customization ID (GUID) of a custom acoustic model that is
 * to be used with the recognition request. The base model of the specified custom acoustic model must match the model
 * specified with the `model` parameter. You must make the request with service credentials created for the instance of
 * the service that owns the custom model. By default, no custom acoustic model is used. See [Custom
 * models](https://console.bluemix.net/docs/services/speech-to-text/input.html#custom).
 * @param {string} [params.base_model_version] - The version of the specified base model that is to be used with
 * recognition request. Multiple versions of a base model can exist when a model is updated for internal improvements.
 * The parameter is intended primarily for use with custom models that have been upgraded for a new base model. The
 * default value depends on whether the parameter is used with or without a custom model. See [Base model
 * version](https://console.bluemix.net/docs/services/speech-to-text/input.html#version).
 * @param {number} [params.customization_weight] - If you specify the customization ID (GUID) of a custom language model
 * with the recognition request, the customization weight tells the service how much weight to give to words from the
 * custom language model compared to those from the base model for the current request.
 *
 * Specify a value between 0.0 and 1.0. Unless a different customization weight was specified for the custom model when
 * it was trained, the default value is 0.3. A customization weight that you specify overrides a weight that was
 * specified when the custom model was trained.
 *
 * The default value yields the best performance in general. Assign a higher value if your audio makes frequent use of
 * OOV words from the custom model. Use caution when setting the weight: a higher value can improve the accuracy of
 * phrases from the custom model's domain, but it can negatively affect performance on non-domain phrases.
 *
 * See [Custom models](https://console.bluemix.net/docs/services/speech-to-text/input.html#custom).
 * @param {number} [params.inactivity_timeout] - The time in seconds after which, if only silence (no speech) is
 * detected in submitted audio, the connection is closed with a 400 error. The parameter is useful for stopping audio
 * submission from a live microphone when a user simply walks away. Use `-1` for infinity. See
 * [Timeouts](https://console.bluemix.net/docs/services/speech-to-text/input.html#timeouts).
 * @param {string[]} [params.keywords] - An array of keyword strings to spot in the audio. Each keyword string can
 * include one or more string tokens. Keywords are spotted only in the final results, not in interim hypotheses. If you
 * specify any keywords, you must also specify a keywords threshold. You can spot a maximum of 1000 keywords. Omit the
 * parameter or specify an empty array if you do not need to spot keywords. See [Keyword
 * spotting](https://console.bluemix.net/docs/services/speech-to-text/output.html#keyword_spotting).
 * @param {number} [params.keywords_threshold] - A confidence value that is the lower bound for spotting a keyword. A
 * word is considered to match a keyword if its confidence is greater than or equal to the threshold. Specify a
 * probability between 0.0 and 1.0. No keyword spotting is performed if you omit the parameter. If you specify a
 * threshold, you must also specify one or more keywords. See [Keyword
 * spotting](https://console.bluemix.net/docs/services/speech-to-text/output.html#keyword_spotting).
 * @param {number} [params.max_alternatives] - The maximum number of alternative transcripts that the service is to
 * return. By default, a single transcription is returned. See [Maximum
 * alternatives](https://console.bluemix.net/docs/services/speech-to-text/output.html#max_alternatives).
 * @param {number} [params.word_alternatives_threshold] - A confidence value that is the lower bound for identifying a
 * hypothesis as a possible word alternative (also known as "Confusion Networks"). An alternative word is considered if
 * its confidence is greater than or equal to the threshold. Specify a probability between 0.0 and 1.0. No alternative
 * words are computed if you omit the parameter. See [Word
 * alternatives](https://console.bluemix.net/docs/services/speech-to-text/output.html#word_alternatives).
 * @param {boolean} [params.word_confidence] - If `true`, the service returns a confidence measure in the range of 0.0
 * to 1.0 for each word. By default, no word confidence measures are returned. See [Word
 * confidence](https://console.bluemix.net/docs/services/speech-to-text/output.html#word_confidence).
 * @param {boolean} [params.timestamps] - If `true`, the service returns time alignment for each word. By default, no
 * timestamps are returned. See [Word
 * timestamps](https://console.bluemix.net/docs/services/speech-to-text/output.html#word_timestamps).
 * @param {boolean} [params.profanity_filter] - If `true`, the service filters profanity from all output except for
 * keyword results by replacing inappropriate words with a series of asterisks. Set the parameter to `false` to return
 * results with no censoring. Applies to US English transcription only. See [Profanity
 * filtering](https://console.bluemix.net/docs/services/speech-to-text/output.html#profanity_filter).
 * @param {boolean} [params.smart_formatting] - If `true`, the service converts dates, times, series of digits and
 * numbers, phone numbers, currency values, and internet addresses into more readable, conventional representations in
 * the final transcript of a recognition request. For US English, the service also converts certain keyword strings to
 * punctuation symbols. By default, no smart formatting is performed. Applies to US English and Spanish transcription
 * only. See [Smart formatting](https://console.bluemix.net/docs/services/speech-to-text/output.html#smart_formatting).
 * @param {boolean} [params.speaker_labels] - If `true`, the response includes labels that identify which words were
 * spoken by which participants in a multi-person exchange. By default, no speaker labels are returned. Setting
 * `speaker_labels` to `true` forces the `timestamps` parameter to be `true`, regardless of whether you specify `false`
 * for the parameter. To determine whether a language model supports speaker labels, use the **Get models** method and
 * check that the attribute `speaker_labels` is set to `true`. See [Speaker
 * labels](https://console.bluemix.net/docs/services/speech-to-text/output.html#speaker_labels).
 * @param {string} [params.customization_id] - **Deprecated.** Use the `language_customization_id` parameter to specify
 * the customization ID (GUID) of a custom language model that is to be used with the recognition request. Do not
 * specify both parameters with a request.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    const _params = vcap.getCredentialsFromServiceBind(
      params,
      'speech-to-text',
      'speech_to_text'
    );
    _params.headers = extend(
      {},
      _params.headers,
      { 'User-Agent': 'openwhisk' }
    );
    let service;
    try {
      service = new SpeechToTextV1(_params);
      service.createJob(_params, (err, response) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(response);
        }
      });
    } catch (err) {
      reject(err.message);
      return;
    }
  });
}

global.main = main;
module.exports.test = main;
