/**
 * Copyright 2017 IBM All Rights Reserved.
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

/**
 * Sends audio for speech recognition in sessionless mode.
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.username] - required unless use_unauthenticated is set.
 * @param {string} [params.password] - required unless use_unauthenticated is set.
 * @param {Object} [params.headers]
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} [params.transfer_encoding] - Set to `chunked` to send the audio in streaming mode; the data does not need to exist fully before being streamed to the service.   MULTIPART: You must also set this header for requests with more than one audio part.
 * @param {string} [params.model] - The identifier of the model to be used for the recognition request. (Use `GET /v1/models` for a list of available models.).
 * @param {string} [params.customization_id] - The GUID of a custom language model that is to be used with the request. The base model of the specified custom language model must match the model specified with the `model` parameter. You must make the request with service credentials created for the instance of the service that owns the custom model. By default, no custom language model is used.
 * @param {string} [params.acoustic_customization_id] - The GUID of a custom acoustic model that is to be used with the request. The base model of the specified custom acoustic model must match the model specified with the `model` parameter. You must make the request with service credentials created for the instance of the service that owns the custom model. By default, no custom acoustic model is used.
 * @param {number} [params.customization_weight] - If you specify a `customization_id` with the request, you can use the `customization_weight` parameter to tell the service how much weight to give to words from the custom language model compared to those from the base model for speech recognition.   Specify a value between 0.0 and 1.0. Unless a different customization weight was specified for the custom model when it was trained, the default value is 0.3. A customization weight that you specify overrides a weight that was specified when the custom model was trained.   The default value yields the best performance in general. Assign a higher value if your audio makes frequent use of OOV words from the custom model. Use caution when setting the weight: a higher value can improve the accuracy of phrases from the custom model's domain, but it can negatively affect  performance on non-domain phrases.
 * @param {Blob} [params.audio] - NON-MULTIPART ONLY: Audio to transcribe in the format specified by the `Content-Type` header. **Required for a non-multipart request.**.
 * @param {string} [params.content_type] - The type of the input: audio/basic, audio/flac, audio/l16, audio/mp3, audio/mpeg, audio/mulaw, audio/ogg, audio/ogg;codecs=opus, audio/ogg;codecs=vorbis, audio/wav, audio/webm, audio/webm;codecs=opus, audio/webm;codecs=vorbis, or multipart/form-data.
 * @param {number} [params.inactivity_timeout] - NON-MULTIPART ONLY: The time in seconds after which, if only silence (no speech) is detected in submitted audio, the connection is closed with a 400 error. Useful for stopping audio submission from a live microphone when a user simply walks away. Use `-1` for infinity.
 * @param {string[]} [params.keywords] - NON-MULTIPART ONLY: Array of keyword strings to spot in the audio. Each keyword string can include one or more tokens. Keywords are spotted only in the final hypothesis, not in interim results. Omit the parameter or specify an empty array if you do not need to spot keywords.
 * @param {number} [params.keywords_threshold] - NON-MULTIPART ONLY: Confidence value that is the lower bound for spotting a keyword. A word is considered to match a keyword if its confidence is greater than or equal to the threshold. Specify a probability between 0 and 1 inclusive. No keyword spotting is performed if you omit the parameter. If you specify a threshold, you must also specify one or more keywords.
 * @param {number} [params.max_alternatives] - NON-MULTIPART ONLY: Maximum number of alternative transcripts to be returned. By default, a single transcription is returned.
 * @param {number} [params.word_alternatives_threshold] - NON-MULTIPART ONLY: Confidence value that is the lower bound for identifying a hypothesis as a possible word alternative (also known as "Confusion Networks"). An alternative word is considered if its confidence is greater than or equal to the threshold. Specify a probability between 0 and 1 inclusive. No alternative words are computed if you omit the parameter.
 * @param {boolean} [params.word_confidence] - NON-MULTIPART ONLY: If `true`, confidence measure per word is returned.
 * @param {boolean} [params.timestamps] - NON-MULTIPART ONLY: If `true`, time alignment for each word is returned.
 * @param {boolean} [params.profanity_filter] - NON-MULTIPART ONLY: If `true` (the default), filters profanity from all output except for keyword results by replacing inappropriate words with a series of asterisks. Set the parameter to `false` to return results with no censoring. Applies to US English transcription only.
 * @param {boolean} [params.smart_formatting] - NON-MULTIPART ONLY: If `true`, converts dates, times, series of digits and numbers, phone numbers, currency values, and Internet addresses into more readable, conventional representations in the final transcript of a recognition request. If `false` (the default), no formatting is performed. Applies to US English transcription only.
 * @param {boolean} [params.speaker_labels] - NON-MULTIPART ONLY: Indicates whether labels that identify which words were spoken by which participants in a multi-person exchange are to be included in the response. The default is `false`; no speaker labels are returned. Setting `speaker_labels` to `true` forces the `timestamps` parameter to be `true`, regardless of whether you specify `false` for the parameter.   To determine whether a language model supports speaker labels, use the `GET /v1/models` method and check that the attribute `speaker_labels` is set to `true`. You can also refer to [Speaker labels](https://console.bluemix.net/docs/services/speech-to-text/output.html#speaker_labels).
 * @param {string} [params.metadata] - MULTIPART ONLY: Parameters for the multipart recognition request. This must be the first part of the request and must consist of JSON-formatted data. The information describes the subsequent parts of the request, which pass the audio files to be transcribed. **Required for a multipart request.**.
 * @param {string} [params.upload] - Must be a base64-encoded string. MULTIPART ONLY: One or more audio files for the request. For multiple audio files, set `Transfer-Encoding` to `chunked`. **Required for a multipart request.**.
 * @param {string} [params.upload_content_type] - The content type of upload.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    const fileParams = ['upload'];
    fileParams.forEach((fileParam) => {
      try {
        params[fileParam] = Buffer.from(params[fileParam], 'base64');
      } catch (err) {
        reject(err.message);
        return;
      }
    });
    let service;
    try {
      service = new SpeechToTextV1(params);
    } catch (err) {
      reject(err.message);
      return;
    }
    service.recognizeSessionless(params, (err, response) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(response);
      }
    });
  });
}
module.exports.main = main;
