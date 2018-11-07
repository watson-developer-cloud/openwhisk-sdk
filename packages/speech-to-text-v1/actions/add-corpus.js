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
 * Add a corpus.
 *
 * Adds a single corpus text file of new training data to a custom language model. Use multiple requests to submit
 * multiple corpus text files. You must use credentials for the instance of the service that owns a model to add a
 * corpus to it. Adding a corpus does not affect the custom language model until you train the model for the new data by
 * using the **Train a custom language model** method.
 *
 * Submit a plain text file that contains sample sentences from the domain of interest to enable the service to extract
 * words in context. The more sentences you add that represent the context in which speakers use words from the domain,
 * the better the service's recognition accuracy.
 *
 * The call returns an HTTP 201 response code if the corpus is valid. The service then asynchronously processes the
 * contents of the corpus and automatically extracts new words that it finds. This can take on the order of a minute or
 * two to complete depending on the total number of words and the number of new words in the corpus, as well as the
 * current load on the service. You cannot submit requests to add additional corpora or words to the custom model, or to
 * train the model, until the service's analysis of the corpus for the current request completes. Use the **List a
 * corpus** method to check the status of the analysis.
 *
 * The service auto-populates the model's words resource with any word that is not found in its base vocabulary; these
 * are referred to as out-of-vocabulary (OOV) words. You can use the **List custom words** method to examine the words
 * resource, using other words method to eliminate typos and modify how words are pronounced as needed.
 *
 * To add a corpus file that has the same name as an existing corpus, set the `allow_overwrite` parameter to `true`;
 * otherwise, the request fails. Overwriting an existing corpus causes the service to process the corpus text file and
 * extract OOV words anew. Before doing so, it removes any OOV words associated with the existing corpus from the
 * model's words resource unless they were also added by another corpus or they have been modified in some way with the
 * **Add custom words** or **Add a custom word** method.
 *
 * The service limits the overall amount of data that you can add to a custom model to a maximum of 10 million total
 * words from all corpora combined. Also, you can add no more than 30 thousand custom (OOV) words to a model; this
 * includes words that the service extracts from corpora and words that you add directly.
 *
 * **See also:**
 * * [Working with
 * corpora](https://console.bluemix.net/docs/services/speech-to-text/language-resource.html#workingCorpora)
 * * [Add corpora to the custom language
 * model](https://console.bluemix.net/docs/services/speech-to-text/language-create.html#addCorpora).
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
 * @param {string} params.corpus_name - The name of the new corpus for the custom language model. Use a localized name
 * that matches the language of the custom model and reflects the contents of the corpus.
 * * Include a maximum of 128 characters in the name.
 * * Do not include spaces, slashes, or backslashes in the name.
 * * Do not use the name of a corpus that has already been added to the custom model.
 * * Do not use the name `user`, which is reserved by the service to denote custom words that are added or modified by
 * the user.
 * @param {string} params.corpus_file - Must be a base64-encoded string. A plain text file that contains the training
 * data for the corpus. Encode the file in UTF-8 if it contains non-ASCII characters; the service assumes UTF-8 encoding
 * if it encounters non-ASCII characters. With the `curl` command, use the `--data-binary` option to upload the file for
 * the request.
 * @param {boolean} [params.allow_overwrite] - If `true`, the specified corpus or audio resource overwrites an existing
 * corpus or audio resource with the same name. If `false`, the request fails if a corpus or audio resource with the
 * same name already exists. The parameter has no effect if a corpus or audio resource with the same name does not
 * already exist.
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
    const fileParams = ['corpus_file'];
    fileParams.filter(fileParam => _params[fileParam]).forEach((fileParam) => {
      try {
        _params[fileParam] = Buffer.from(_params[fileParam], 'base64');
      } catch (err) {
        reject(err.message);
        return;
      }
    });
    let service;
    try {
      service = new SpeechToTextV1(_params);
      service.addCorpus(_params, (err, response) => {
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
