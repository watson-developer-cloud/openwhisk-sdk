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
 * Add a custom word.
 *
 * Adds a custom word to a custom language model. The service populates the words resource for a custom model with
 * out-of-vocabulary (OOV) words found in each corpus added to the model. You can use this method to add a word or to
 * modify an existing word in the words resource. The words resource for a model can contain a maximum of 30 thousand
 * custom (OOV) words, including words that the service extracts from corpora and words that you add directly.
 *
 * You must use credentials for the instance of the service that owns a model to add or modify a custom word for the
 * model. Adding or modifying a custom word does not affect the custom model until you train the model for the new data
 * by using the **Train a custom language model** method.
 *
 * Use the `word_name` parameter to specify the custom word that is to be added or modified. Use the `CustomWord` object
 * to provide one or both of the optional `sounds_like` and `display_as` fields for the word.
 * * The `sounds_like` field provides an array of one or more pronunciations for the word. Use the parameter to specify
 * how the word can be pronounced by users. Use the parameter for words that are difficult to pronounce, foreign words,
 * acronyms, and so on. For example, you might specify that the word `IEEE` can sound like `i triple e`. You can specify
 * a maximum of five sounds-like pronunciations for a word.
 * * The `display_as` field provides a different way of spelling the word in a transcript. Use the parameter when you
 * want the word to appear different from its usual representation or from its spelling in corpora training data. For
 * example, you might indicate that the word `IBM(trademark)` is to be displayed as `IBM&trade;`.
 *
 *
 * If you add a custom word that already exists in the words resource for the custom model, the new definition
 * overwrites the existing data for the word. If the service encounters an error, it does not add the word to the words
 * resource. Use the **List a custom word** method to review the word that you add.
 *
 * **See also:**
 * * [Working with custom
 * words](https://console.bluemix.net/docs/services/speech-to-text/language-resource.html#workingWords)
 * * [Add words to the custom language
 * model](https://console.bluemix.net/docs/services/speech-to-text/language-create.html#addWords).
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
 * @param {string} params.customization_id - The customization ID (GUID) of the custom language model that is to be used
 * for the request. You must make the request with service credentials created for the instance of the service that owns
 * the custom model.
 * @param {string} params.word_name - The custom word for the custom language model. When you add or update a custom
 * word with the **Add a custom word** method, do not include spaces in the word. Use a `-` (dash) or `_` (underscore)
 * to connect the tokens of compound words.
 * @param {string} [params.word] - For the **Add custom words** method, you must specify the custom word that is to be
 * added to or updated in the custom model. Do not include spaces in the word. Use a `-` (dash) or `_` (underscore) to
 * connect the tokens of compound words.
 *
 * Omit this field for the **Add a custom word** method.
 * @param {string[]} [params.sounds_like] - An array of sounds-like pronunciations for the custom word. Specify how
 * words that are difficult to pronounce, foreign words, acronyms, and so on can be pronounced by users.
 * * For a word that is not in the service's base vocabulary, omit the parameter to have the service automatically
 * generate a sounds-like pronunciation for the word.
 * * For a word that is in the service's base vocabulary, use the parameter to specify additional pronunciations for the
 * word. You cannot override the default pronunciation of a word; pronunciations you add augment the pronunciation from
 * the base vocabulary.
 *
 * A word can have at most five sounds-like pronunciations. A pronunciation can include at most 40 characters not
 * including spaces.
 * @param {string} [params.display_as] - An alternative spelling for the custom word when it appears in a transcript.
 * Use the parameter when you want the word to have a spelling that is different from its usual representation or from
 * its spelling in corpora training data.
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
      service.addWord(_params, (err, response) => {
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
