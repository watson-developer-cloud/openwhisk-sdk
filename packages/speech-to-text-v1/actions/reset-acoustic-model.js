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

/**
 * Reset a custom acoustic model.
 *
 * Resets a custom acoustic model by removing all audio resources from the model. Resetting a custom acoustic model
 * initializes the model to its state when it was first created. Metadata such as the name and language of the model are
 * preserved, but the model's audio resources are removed and must be re-created. You must use credentials for the
 * instance of the service that owns a model to reset it.
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
 * @param {string} params.customization_id - The customization ID (GUID) of the custom acoustic model. You must make the
 * request with service credentials created for the instance of the service that owns the custom model.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    const _params = getParams(params, 'speech-to-text', 'speech_to_text');
    _params.headers = extend({}, _params.headers, { 'User-Agent': 'openwhisk' });
    let service;
    try {
      service = new SpeechToTextV1(_params);
      service.resetAcousticModel(_params, (err, response) => {
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

/**
* Helper function used to authenticate credentials bound to package using wsk service bind
*
* @param {Object} theParams - parameters sent to service
* @param {string} service - name of service in bluemix used to retrieve credentials, used for IAM instances
* @param {string} serviceAltName - alternate name of service used for cloud foundry instances
*/
function getParams(theParams, service, serviceAltName) {
  if (Object.keys(theParams).length === 0) {
    return theParams;
  }
  let bxCreds;
  if (theParams.__bx_creds) {
    if (theParams.__bx_creds[service]) {
      bxCreds = theParams.__bx_creds[service];
    } else if (theParams.__bx_creds[serviceAltName]) {
      bxCreds = theParams.__bx_creds[serviceAltName];
    } else {
      bxCreds = {};
    }
  } else {
    bxCreds = {};
  }
  const _params = Object.assign({}, bxCreds, theParams);
  if (_params.apikey) {
    _params.iam_apikey = _params.apikey;
  }
  delete _params.__bx_creds;
  return _params;
}
global.main = main;
module.exports.test = main;
