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
 * Upgrade a custom acoustic model.
 *
 * Initiates the upgrade of a custom acoustic model to the latest version of its base language model. The upgrade method
 * is asynchronous. It can take on the order of minutes or hours to complete depending on the amount of data in the
 * custom model and the current load on the service; typically, upgrade takes approximately twice the length of the
 * total audio contained in the custom model. A custom model must be in the `ready` or `available` state to be upgraded.
 * You must use credentials for the instance of the service that owns a model to upgrade it.
 *
 * The method returns an HTTP 200 response code to indicate that the upgrade process has begun successfully. You can
 * monitor the status of the upgrade by using the **Get a custom acoustic model** method to poll the model's status. The
 * method returns an `AcousticModel` object that includes `status` and `progress` fields. Use a loop to check the status
 * once a minute. While it is being upgraded, the custom model has the status `upgrading`. When the upgrade is complete,
 * the model resumes the status that it had prior to upgrade. The service cannot accept subsequent requests for the
 * model until the upgrade completes.
 *
 * If the custom acoustic model was trained with a separately created custom language model, you must use the
 * `custom_language_model_id` parameter to specify the GUID of that custom language model. The custom language model
 * must be upgraded before the custom acoustic model can be upgraded. Omit the parameter if the custom acoustic model
 * was not trained with a custom language model.
 *
 * **See also:** [Upgrading a custom acoustic
 * model](https://console.bluemix.net/docs/services/speech-to-text/custom-upgrade.html#upgradeAcoustic).
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
 * @param {string} params.customization_id - The customization ID (GUID) of the custom acoustic model that is to be used
 * for the request. You must make the request with service credentials created for the instance of the service that owns
 * the custom model.
 * @param {string} [params.custom_language_model_id] - If the custom acoustic model was trained with a custom language
 * model, the customization ID (GUID) of that custom language model. The custom language model must be upgraded before
 * the custom acoustic model can be upgraded.
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
      service.upgradeAcousticModel(_params, (err, response) => {
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
