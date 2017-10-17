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

const TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');

/**
 * Gets the pronunciation for a word.
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.username] - required unless use_unauthenticated is set.
 * @param {string} [params.password] - required unless use_unauthenticated is set.
 * @param {Object} [params.headers]
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} params.text - The word for which the pronunciation is requested.
 * @param {string} [params.voice] - Specify a voice to obtain the pronunciation for the specified word in the language of that voice. All voices for the same language (for example, `en-US`) return the same translation. Do not specify both a `voice` and a `customization_id`. Retrieve available voices with the `GET /v1/voices` method.
 * @param {string} [params.format] - Specify the phoneme set in which to return the pronunciation. Omit the parameter to obtain the pronunciation in the default format.
 * @param {string} [params.customization_id] - GUID of a custom voice model for which the pronunciation is to be returned. You must make the request with service credentials created for the instance of the service that owns the custom model. If the word is not defined in the specified voice model, the service returns the default translation for the model's language. Omit the parameter to see the translation for the specified voice with no customization. Do not specify both a `voice` and a `customization_id`.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    let service;
    try {
      service = new TextToSpeechV1(params);
    } catch (err) {
      reject(err.message);
    }
    service.pronunciation(params, (err, response) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(response);
      }
    });
  });
}
module.exports.main = main;
