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

const TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
const extend = require('extend');
const vcap = require('vcap_services');

/**
 * Update a custom model.
 *
 * Updates information for the specified custom voice model. You can update metadata such as the name and description of
 * the voice model. You can also update the words in the model and their translations. Adding a new translation for a
 * word that already exists in a custom model overwrites the word's existing translation. A custom model can contain no
 * more than 20,000 entries. You must use credentials for the instance of the service that owns a model to update it.
 *
 * You can define sounds-like or phonetic translations for words. A sounds-like translation consists of one or more
 * words that, when combined, sound like the word. Phonetic translations are based on the SSML phoneme format for
 * representing a word. You can specify them in standard International Phonetic Alphabet (IPA) representation
 *
 *   <code>&lt;phoneme alphabet=\"ipa\" ph=\"t&#601;m&#712;&#593;to\"&gt;&lt;/phoneme&gt;</code>
 *
 *   or in the proprietary IBM Symbolic Phonetic Representation (SPR)
 *
 *   <code>&lt;phoneme alphabet=\"ibm\" ph=\"1gAstroEntxrYFXs\"&gt;&lt;/phoneme&gt;</code>
 *
 * **Note:** This method is currently a beta release.
 *
 * **See also:**
 * * [Updating a custom
 * model](https://console.bluemix.net/docs/services/text-to-speech/custom-models.html#cuModelsUpdate)
 * * [Adding words to a Japanese custom
 * model](https://console.bluemix.net/docs/services/text-to-speech/custom-entries.html#cuJapaneseAdd)
 * * [Understanding customization](https://console.bluemix.net/docs/services/text-to-speech/custom-intro.html).
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
 * @param {string} params.customization_id - The customization ID (GUID) of the custom voice model. You must make the
 * request with service credentials created for the instance of the service that owns the custom model.
 * @param {string} [params.name] - A new name for the custom voice model.
 * @param {string} [params.description] - A new description for the custom voice model.
 * @param {Word[]} [params.words] - An array of `Word` objects that provides the words and their translations that are
 * to be added or updated for the custom voice model. Pass an empty array to make no additions or updates.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    const _params = vcap.getCredentialsFromServiceBind(
      params,
      'text-to-speech',
      'text_to_speech'
    );
    _params.headers = extend(
      {},
      _params.headers,
      { 'User-Agent': 'openwhisk' }
    );
    let service;
    try {
      service = new TextToSpeechV1(_params);
      service.updateVoiceModel(_params, (err, response) => {
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
