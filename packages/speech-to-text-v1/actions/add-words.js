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
 * Add custom words.
 *
 * Adds one or more custom words to a custom language model. The service populates the words resource for a custom model
 * with out-of-vocabulary (OOV) words found in each corpus added to the model. You can use this method to add additional
 * words or to modify existing words in the words resource. The words resource for a model can contain a maximum of 30
 * thousand custom (OOV) words, including words that the service extracts from corpora and words that you add directly.
 *
 * You must use credentials for the instance of the service that owns a model to add or modify custom words for the
 * model. Adding or modifying custom words does not affect the custom model until you train the model for the new data
 * by using the **Train a custom language model** method.
 *
 * You add custom words by providing a `CustomWords` object, which is an array of `CustomWord` objects, one per word.
 * You must use the object's `word` parameter to identify the word that is to be added. You can also provide one or both
 * of the optional `sounds_like` and `display_as` fields for each word.
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
 * overwrites the existing data for the word. If the service encounters an error with the input data, it returns a
 * failure code and does not add any of the words to the words resource.
 *
 * The call returns an HTTP 201 response code if the input data is valid. It then asynchronously processes the words to
 * add them to the model's words resource. The time that it takes for the analysis to complete depends on the number of
 * new words that you add but is generally faster than adding a corpus or training a model.
 *
 * You can monitor the status of the request by using the **List a custom language model** method to poll the model's
 * status. Use a loop to check the status every 10 seconds. The method returns a `Customization` object that includes a
 * `status` field. A status of `ready` means that the words have been added to the custom model. The service cannot
 * accept requests to add new corpora or words or to train the model until the existing request completes.
 *
 * You can use the **List custom words** or **List a custom word** method to review the words that you add. Words with
 * an invalid `sounds_like` field include an `error` field that describes the problem. You can use other words-related
 * methods to correct errors, eliminate typos, and modify how words are pronounced as needed.
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
 * @param {CustomWord[]} params.words - An array of objects that provides information about each custom word that is to
 * be added to or updated in the custom language model.
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
      service.addWords(_params, (err, response) => {
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
