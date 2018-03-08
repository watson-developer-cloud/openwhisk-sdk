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
const pkg = require('../../package.json');

/**
 * Creates a job for an asynchronous recognition request.
 *
 * Creates a job for a new asynchronous recognition request. The job is owned by the user whose service credentials are used to create it. How you learn the status and results of a job depends on the parameters you include with the job creation request: * By callback notification: Include the `callback_url` query parameter to specify a URL to which the service is to send callback notifications when the status of the job changes. Optionally, you can also include the `events` and `user_token` query parameters to subscribe to specific events and to specify a string that is to be included with each notification for the job. * By polling the service: Omit the `callback_url`, `events`, and `user_token` query parameters. You must then use the `GET /v1/recognitions` or `GET /v1/recognitions/{id}` methods to check the status of the job, using the latter to retrieve the results when the job is complete.  The two approaches are not mutually exclusive. You can poll the service for job status or obtain results from the service manually even if you include a callback URL. In both cases, you can include the `results_ttl` parameter to specify how long the results are to remain available after the job is complete. Note that using the HTTPS `GET /v1/recognitions/{id}` method to retrieve results is more secure than receiving them via callback notification over HTTP because it provides confidentiality in addition to authentication and data integrity.   The method supports the same basic parameters as other HTTP and WebSocket recognition requests. The service imposes a data size limit of 100 MB. It automatically detects the endianness of the incoming audio and, for audio that includes multiple channels, downmixes the audio to one-channel mono during transcoding. (For the `audio/l16` format, you can specify the endianness.).
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.username] - required unless use_unauthenticated is set.
 * @param {string} [params.password] - required unless use_unauthenticated is set.
 * @param {Object} [params.headers]
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {ReadableStream|FileObject|Buffer} params.audio - Audio to transcribe in the format specified by the `Content-Type` header.
 * @param {string} params.content_type - The type of the input: audio/basic, audio/flac, audio/l16, audio/mp3, audio/mpeg, audio/mulaw, audio/ogg, audio/ogg;codecs=opus, audio/ogg;codecs=vorbis, audio/wav, audio/webm, audio/webm;codecs=opus, or audio/webm;codecs=vorbis.
 * @param {string} [params.transfer_encoding] - Set to `chunked` to send the audio in streaming mode. The data does not need to exist fully before being streamed to the service.
 * @param {string} [params.model] - The identifier of the model to be used for the recognition request. (Use `GET /v1/models` for a list of available models.).
 * @param {string} [params.callback_url] - A URL to which callback notifications are to be sent. The URL must already be successfully white-listed by using the `POST /v1/register_callback` method. Omit the parameter to poll the service for job completion and results. You can include the same callback URL with any number of job creation requests. Use the `user_token` query parameter to specify a unique user-specified string with each job to differentiate the callback notifications for the jobs.
 * @param {string} [params.events] - If the job includes a callback URL, a comma-separated list of notification events to which to subscribe. Valid events are: `recognitions.started` generates a callback notification when the service begins to process the job. `recognitions.completed` generates a callback notification when the job is complete; you must use the `GET /v1/recognitions/{id}` method to retrieve the results before they time out or are deleted. `recognitions.completed_with_results` generates a callback notification when the job is complete; the notification includes the results of the request. `recognitions.failed` generates a callback notification if the service experiences an error while processing the job. Omit the parameter to subscribe to the default events: `recognitions.started`, `recognitions.completed`, and `recognitions.failed`. The `recognitions.completed` and `recognitions.completed_with_results` events are incompatible; you can specify only of the two events. If the job does not include a callback URL, omit the parameter.
 * @param {string} [params.user_token] - If the job includes a callback URL, a user-specified string that the service is to include with each callback notification for the job; the token allows the user to maintain an internal mapping between jobs and notification events. If the job does not include a callback URL, omit the parameter.
 * @param {number} [params.results_ttl] - The number of minutes for which the results are to be available after the job has finished. If not delivered via a callback, the results must be retrieved within this time. Omit the parameter to use a time to live of one week. The parameter is valid with or without a callback URL.
 * @param {string} [params.customization_id] - The GUID of a custom language model that is to be used with the request. The base model of the specified custom language model must match the model specified with the `model` parameter. You must make the request with service credentials created for the instance of the service that owns the custom model. By default, no custom language model is used.
 * @param {string} [params.acoustic_customization_id] - The GUID of a custom acoustic model that is to be used with the request. The base model of the specified custom acoustic model must match the model specified with the `model` parameter. You must make the request with service credentials created for the instance of the service that owns the custom model. By default, no custom acoustic model is used.
 * @param {number} [params.customization_weight] - If you specify a `customization_id` with the request, you can use the `customization_weight` parameter to tell the service how much weight to give to words from the custom language model compared to those from the base model for speech recognition.   Specify a value between 0.0 and 1.0. Unless a different customization weight was specified for the custom model when it was trained, the default value is 0.3. A customization weight that you specify overrides a weight that was specified when the custom model was trained.   The default value yields the best performance in general. Assign a higher value if your audio makes frequent use of OOV words from the custom model. Use caution when setting the weight: a higher value can improve the accuracy of phrases from the custom model's domain, but it can negatively affect  performance on non-domain phrases.
 * @param {string} [params.version] - The version of the specified base `model` that is to be used with the request. Multiple versions of a base model can exist when a model is updated for internal improvements. The parameter is intended primarily for use with custom models that have been upgraded for a new base model. The default value depends on whether the parameter is used with or without a custom model. For more information, see [Base model version](https://console.bluemix.net/docs/services/speech-to-text/input.html#version).
 * @param {number} [params.inactivity_timeout] - The time in seconds after which, if only silence (no speech) is detected in submitted audio, the connection is closed with a 400 error. Useful for stopping audio submission from a live microphone when a user simply walks away. Use `-1` for infinity.
 * @param {string[]} [params.keywords] - Array of keyword strings to spot in the audio. Each keyword string can include one or more tokens. Keywords are spotted only in the final hypothesis, not in interim results. If you specify any keywords, you must also specify a keywords threshold. Omit the parameter or specify an empty array if you do not need to spot keywords.
 * @param {number} [params.keywords_threshold] - Confidence value that is the lower bound for spotting a keyword. A word is considered to match a keyword if its confidence is greater than or equal to the threshold. Specify a probability between 0 and 1 inclusive. No keyword spotting is performed if you omit the parameter. If you specify a threshold, you must also specify one or more keywords.
 * @param {number} [params.max_alternatives] - Maximum number of alternative transcripts to be returned. By default, a single transcription is returned.
 * @param {number} [params.word_alternatives_threshold] - Confidence value that is the lower bound for identifying a hypothesis as a possible word alternative (also known as "Confusion Networks"). An alternative word is considered if its confidence is greater than or equal to the threshold. Specify a probability between 0 and 1 inclusive. No alternative words are computed if you omit the parameter.
 * @param {boolean} [params.word_confidence] - If `true`, confidence measure per word is returned.
 * @param {boolean} [params.timestamps] - If `true`, time alignment for each word is returned.
 * @param {boolean} [params.profanity_filter] - If `true` (the default), filters profanity from all output except for keyword results by replacing inappropriate words with a series of asterisks. Set the parameter to `false` to return results with no censoring. Applies to US English transcription only.
 * @param {boolean} [params.smart_formatting] - If `true`, converts dates, times, series of digits and numbers, phone numbers, currency values, and Internet addresses into more readable, conventional representations in the final transcript of a recognition request. If `false` (the default), no formatting is performed. Applies to US English transcription only.
 * @param {boolean} [params.speaker_labels] - Indicates whether labels that identify which words were spoken by which participants in a multi-person exchange are to be included in the response. The default is `false`; no speaker labels are returned. Setting `speaker_labels` to `true` forces the `timestamps` parameter to be `true`, regardless of whether you specify `false` for the parameter.   To determine whether a language model supports speaker labels, use the `GET /v1/models` method and check that the attribute `speaker_labels` is set to `true`. You can also refer to [Speaker labels](https://console.bluemix.net/docs/services/speech-to-text/output.html#speaker_labels).
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    const _params = params || {};
    _params.headers['User-Agent'] = `openwhisk-${pkg.version}`;
    let service;
    try {
      service = new SpeechToTextV1(_params);
    } catch (err) {
      reject(err.message);
      return;
    }
    service.createJob(_params, (err, response) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(response);
      }
    });
  });
}
global.main = main;
module.exports.test = main;
