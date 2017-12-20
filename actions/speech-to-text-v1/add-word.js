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
 * Adds a custom word to a custom language model.
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.username] - required unless use_unauthenticated is set.
 * @param {string} [params.password] - required unless use_unauthenticated is set.
 * @param {Object} [params.headers]
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} params.customization_id - The GUID of the custom language model to which a word is to be added. You must make the request with service credentials created for the instance of the service that owns the custom model.
 * @param {string} params.word_name - The custom word that is to be added to or updated in the custom model. Do not include spaces in the word. Use a - (dash) or _ (underscore) to connect the tokens of compound words.
 * @param {string} params.content_type - The type of the input.
 * @param {string} [params.word] - **When specifying an array of one or more words,** you must specify the custom word that is to be added to or updated in the custom model. Do not include spaces in the word. Use a - (dash) or _ (underscore) to connect the tokens of compound words. **When adding or updating a single word directly,** omit this field.
 * @param {string[]} [params.sounds_like] - An array of sounds-like pronunciations for the custom word. Specify how words that are difficult to pronounce, foreign words, acronyms, and so on can be pronounced by users. For a word that is not in the service's base vocabulary, omit the parameter to have the service automatically generate a sounds-like pronunciation for the word. For a word that is in the service's base vocabulary, use the parameter to specify additional pronunciations for the word. You cannot override the default pronunciation of a word; pronunciations you add augment the pronunciation from the base vocabulary. A word can have at most five sounds-like pronunciations, and a pronunciation can include at most 40 characters not including spaces.
 * @param {string} [params.display_as] - An alternative spelling for the custom word when it appears in a transcript. Use the parameter when you want the word to have a spelling that is different from its usual representation or from its spelling in corpora training data.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    let service;
    try {
      service = new SpeechToTextV1(params);
    } catch (err) {
      reject(err.message);
      return;
    }
    service.addWord(params, (err, response) => {
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
