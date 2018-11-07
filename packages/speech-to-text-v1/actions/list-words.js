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
 * List custom words.
 *
 * Lists information about custom words from a custom language model. You can list all words from the custom model's
 * words resource, only custom words that were added or modified by the user, or only out-of-vocabulary (OOV) words that
 * were extracted from corpora. You can also indicate the order in which the service is to return words; by default,
 * words are listed in ascending alphabetical order. You must use credentials for the instance of the service that owns
 * a model to query information about its words.
 *
 * **See also:** [Listing words from a custom language
 * model](https://console.bluemix.net/docs/services/speech-to-text/language-words.html#listWords).
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
 * @param {string} [params.word_type] - The type of words to be listed from the custom language model's words resource:
 * * `all` (the default) shows all words.
 * * `user` shows only custom words that were added or modified by the user.
 * * `corpora` shows only OOV that were extracted from corpora.
 * @param {string} [params.sort] - Indicates the order in which the words are to be listed, `alphabetical` or by
 * `count`. You can prepend an optional `+` or `-` to an argument to indicate whether the results are to be sorted in
 * ascending or descending order. By default, words are sorted in ascending alphabetical order. For alphabetical
 * ordering, the lexicographical precedence is numeric values, uppercase letters, and lowercase letters. For count
 * ordering, values with the same count are ordered alphabetically. With the `curl` command, URL encode the `+` symbol
 * as `%2B`.
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
      service.listWords(_params, (err, response) => {
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
