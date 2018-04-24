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
 * Sends audio for speech recognition in sessionless mode.
 *
 * Sends audio and returns transcription results for a sessionless recognition request. Returns only the final results; to enable interim results, use session-based requests or the WebSocket API. The service imposes a data size limit of 100 MB. It automatically detects the endianness of the incoming audio and, for audio that includes multiple channels, downmixes the audio to one-channel mono during transcoding. (For the `audio/l16` format, you can specify the endianness.)   ###Streaming mode   For requests to transcribe live audio as it becomes available or to transcribe multiple audio files with multipart requests, you must set the `Transfer-Encoding` header to `chunked` to use streaming mode. In streaming mode, the server closes the connection (status code 408) if the service receives no data chunk for 30 seconds and the service has no audio to transcribe for 30 seconds. The server also closes the connection (status code 400) if no speech is detected for `inactivity_timeout` seconds of audio (not processing time); use the `inactivity_timeout` parameter to change the default of 30 seconds.   ###Non-multipart requests   For non-multipart requests, you specify all parameters of the request as a collection of request headers and query parameters, and you provide the audio as the body of the request. This is the recommended means of submitting a recognition request. Use the following parameters: * **Required:** `Content-Type` and `audio` * **Optional:** `Transfer-Encoding`, `model`, `customization_id`, `acoustic_customization_id`, `base_model_version`, `customization_weight`, `inactivity_timeout`, `keywords`, `keywords_threshold`, `max_alternatives`, `word_alternatives_threshold`, `word_confidence`, `timestamps`, `profanity_filter`, `smart_formatting`, and `speaker_labels`     ###Multipart requests   For multipart requests, you specify a few parameters of the request as request headers and query parameters, but you specify most parameters as multipart form data in the form of JSON metadata, in which only `part_content_type` is required. You then specify the audio files for the request as subsequent parts of the form data. Use this approach with browsers that do not support JavaScript or when the parameters of the request are greater than the 8 KB limit imposed by most HTTP servers and proxies. Use the following parameters: * **Required:** `Content-Type`, `metadata`, and `upload` * **Optional:** `Transfer-Encoding`, `model`, `customization_id`, `acoustic_customization_id`, and `base_model_version`   An example of the multipart metadata for a pair of FLAC files follows. This first part of the request is sent as JSON; the remaining parts are the audio files for the request.  `metadata=\"{\\\"part_content_type\\\":\\\"audio/flac\\\",\\\"data_parts_count\\\":2,\\\"inactivity_timeout\\\"=-1}\"`   **Note about the Try It Out feature:** The `Try it out!` button is **not** supported for use with the the `POST /v1/recognize` method. For examples of calls to the method, see the [Speech to Text API reference](http://www.ibm.com/watson/developercloud/speech-to-text/api/v1/).
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.username] - The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
 * @param {string} [params.password] - The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
 * @param {Object} [params.headers] - Custom HTTP request headers
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} [params.model] - The identifier of the model that is to be used for the recognition request.
 * @param {string} [params.customization_id] - The GUID of a custom language model that is to be used with the request. The base model of the specified custom language model must match the model specified with the `model` parameter. You must make the request with service credentials created for the instance of the service that owns the custom model. By default, no custom language model is used.
 * @param {string} [params.acoustic_customization_id] - The GUID of a custom acoustic model that is to be used with the request. The base model of the specified custom acoustic model must match the model specified with the `model` parameter. You must make the request with service credentials created for the instance of the service that owns the custom model. By default, no custom acoustic model is used.
 * @param {string} [params.base_model_version] - The version of the specified base model that is to be used for speech recognition. Multiple versions of a base model can exist when a model is updated for internal improvements. The parameter is intended primarily for use with custom models that have been upgraded for a new base model. The default value depends on whether the parameter is used with or without a custom model. For more information, see [Base model version](https://console.bluemix.net/docs/services/speech-to-text/input.html#version).
 * @param {number} [params.customization_weight] - NON-MULTIPART ONLY: If you specify a customization ID with the request, you can use the customization weight to tell the service how much weight to give to words from the custom language model compared to those from the base model for speech recognition.   Specify a value between 0.0 and 1.0. Unless a different customization weight was specified for the custom model when it was trained, the default value is 0.3. A customization weight that you specify overrides a weight that was specified when the custom model was trained.   The default value yields the best performance in general. Assign a higher value if your audio makes frequent use of OOV words from the custom model. Use caution when setting the weight: a higher value can improve the accuracy of phrases from the custom model's domain, but it can negatively affect performance on non-domain phrases.
 * @param {ReadableStream|FileObject|Buffer} [params.audio] - NON-MULTIPART ONLY: Audio to transcribe in the format specified by the `Content-Type` header. **Required for a non-multipart request.**.
 * @param {string} [params.content_type] - The type of the input: audio/basic, audio/flac, audio/l16, audio/mp3, audio/mpeg, audio/mulaw, audio/ogg, audio/ogg;codecs=opus, audio/ogg;codecs=vorbis, audio/wav, audio/webm, audio/webm;codecs=opus, audio/webm;codecs=vorbis, or multipart/form-data.
 * @param {number} [params.inactivity_timeout] - NON-MULTIPART ONLY: The time in seconds after which, if only silence (no speech) is detected in submitted audio, the connection is closed with a 400 error. Useful for stopping audio submission from a live microphone when a user simply walks away. Use `-1` for infinity.
 * @param {string[]} [params.keywords] - NON-MULTIPART ONLY: Array of keyword strings to spot in the audio. Each keyword string can include one or more tokens. Keywords are spotted only in the final hypothesis, not in interim results. If you specify any keywords, you must also specify a keywords threshold. You can spot a maximum of 1000 keywords. Omit the parameter or specify an empty array if you do not need to spot keywords.
 * @param {number} [params.keywords_threshold] - NON-MULTIPART ONLY: Confidence value that is the lower bound for spotting a keyword. A word is considered to match a keyword if its confidence is greater than or equal to the threshold. Specify a probability between 0 and 1 inclusive. No keyword spotting is performed if you omit the parameter. If you specify a threshold, you must also specify one or more keywords.
 * @param {number} [params.max_alternatives] - NON-MULTIPART ONLY: Maximum number of alternative transcripts to be returned. By default, a single transcription is returned.
 * @param {number} [params.word_alternatives_threshold] - NON-MULTIPART ONLY: Confidence value that is the lower bound for identifying a hypothesis as a possible word alternative (also known as "Confusion Networks"). An alternative word is considered if its confidence is greater than or equal to the threshold. Specify a probability between 0 and 1 inclusive. No alternative words are computed if you omit the parameter.
 * @param {boolean} [params.word_confidence] - NON-MULTIPART ONLY: If `true`, confidence measure per word is returned.
 * @param {boolean} [params.timestamps] - NON-MULTIPART ONLY: If `true`, time alignment for each word is returned.
 * @param {boolean} [params.profanity_filter] - NON-MULTIPART ONLY: If `true` (the default), filters profanity from all output except for keyword results by replacing inappropriate words with a series of asterisks. Set the parameter to `false` to return results with no censoring. Applies to US English transcription only.
 * @param {boolean} [params.smart_formatting] - NON-MULTIPART ONLY: If `true`, converts dates, times, series of digits and numbers, phone numbers, currency values, and Internet addresses into more readable, conventional representations in the final transcript of a recognition request. If `false` (the default), no formatting is performed. Applies to US English transcription only.
 * @param {boolean} [params.speaker_labels] - NON-MULTIPART ONLY: Indicates whether labels that identify which words were spoken by which participants in a multi-person exchange are to be included in the response. The default is `false`; no speaker labels are returned. Setting `speaker_labels` to `true` forces the `timestamps` parameter to be `true`, regardless of whether you specify `false` for the parameter.   To determine whether a language model supports speaker labels, use the **Get models** method and check that the attribute `speaker_labels` is set to `true`. You can also refer to [Speaker labels](https://console.bluemix.net/docs/services/speech-to-text/output.html#speaker_labels).
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
    service.recognizeSessionless(_params, (err, response) => {
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
