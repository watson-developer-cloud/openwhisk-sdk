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
 * Train a custom language model.
 *
 * Initiates the training of a custom language model with new corpora, custom words, or both. After adding, modifying,
 * or deleting corpora or words for a custom language model, use this method to begin the actual training of the model
 * on the latest data. You can specify whether the custom language model is to be trained with all words from its words
 * resource or only with words that were added or modified by the user. You must use credentials for the instance of the
 * service that owns a model to train it.
 *
 * The training method is asynchronous. It can take on the order of minutes to complete depending on the amount of data
 * on which the service is being trained and the current load on the service. The method returns an HTTP 200 response
 * code to indicate that the training process has begun.
 *
 * You can monitor the status of the training by using the **Get a custom language model** method to poll the model's
 * status. Use a loop to check the status every 10 seconds. The method returns a `LanguageModel` object that includes
 * `status` and `progress` fields. A status of `available` means that the custom model is trained and ready to use. The
 * service cannot accept subsequent training requests, or requests to add new corpora or words, until the existing
 * request completes.
 *
 * Training can fail to start for the following reasons:
 * * The service is currently handling another request for the custom model, such as another training request or a
 * request to add a corpus or words to the model.
 * * No training data (corpora or words) have been added to the custom model.
 * * One or more words that were added to the custom model have invalid sounds-like pronunciations that you must fix.
 *
 * **See also:** [Train the custom language
 * model](https://console.bluemix.net/docs/services/speech-to-text/language-create.html#trainModel).
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
 * @param {string} [params.word_type_to_add] - The type of words from the custom language model's words resource on
 * which to train the model:
 * * `all` (the default) trains the model on all new words, regardless of whether they were extracted from corpora or
 * were added or modified by the user.
 * * `user` trains the model only on new words that were added or modified by the user; the model is not trained on new
 * words extracted from corpora.
 * @param {number} [params.customization_weight] - Specifies a customization weight for the custom language model. The
 * customization weight tells the service how much weight to give to words from the custom language model compared to
 * those from the base model for speech recognition. Specify a value between 0.0 and 1.0; the default is 0.3.
 *
 * The default value yields the best performance in general. Assign a higher value if your audio makes frequent use of
 * OOV words from the custom model. Use caution when setting the weight: a higher value can improve the accuracy of
 * phrases from the custom model's domain, but it can negatively affect performance on non-domain phrases.
 *
 * The value that you assign is used for all recognition requests that use the model. You can override it for any
 * recognition request by specifying a customization weight for that request.
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
      service.trainLanguageModel(_params, (err, response) => {
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
