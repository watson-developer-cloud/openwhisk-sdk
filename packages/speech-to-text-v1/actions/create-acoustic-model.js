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
 * Create a custom acoustic model.
 *
 * Creates a new custom acoustic model for a specified base model. The custom acoustic model can be used only with the
 * base model for which it is created. The model is owned by the instance of the service whose credentials are used to
 * create it.
 *
 * **See also:** [Create a custom acoustic
 * model](https://console.bluemix.net/docs/services/speech-to-text/acoustic-create.html#createModel).
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
 * @param {string} params.name - A user-defined name for the new custom acoustic model. Use a name that is unique among
 * all custom acoustic models that you own. Use a localized name that matches the language of the custom model. Use a
 * name that describes the acoustic environment of the custom model, such as `Mobile custom model` or `Noisy car custom
 * model`.
 * @param {string} params.base_model_name - The name of the base language model that is to be customized by the new
 * custom acoustic model. The new custom model can be used only with the base model that it customizes. To determine
 * whether a base model supports acoustic model customization, refer to [Language support for
 * customization](https://console.bluemix.net/docs/services/speech-to-text/custom.html#languageSupport).
 * @param {string} [params.description] - A description of the new custom acoustic model. Use a localized description
 * that matches the language of the custom model.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
     const _params = vcap.getCredentialsFromServiceBind(params, 'speech-to-text', 'speech_to_text');
    _params.headers = extend(
      {},
      _params.headers,
      { 'User-Agent': 'openwhisk' }
    );
    let service;
    try {
      service = new SpeechToTextV1(_params);
      service.createAcousticModel(_params, (err, response) => {
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
