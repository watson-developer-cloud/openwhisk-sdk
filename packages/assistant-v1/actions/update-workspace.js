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

const AssistantV1 = require('watson-developer-cloud/assistant/v1');
const extend = require('extend');

/**
 * Update workspace.
 *
 * Update an existing workspace with new or modified data. You must provide component objects defining the content of
 * the updated workspace.
 *
 * This operation is limited to 30 request per 30 minutes. For more information, see **Rate limiting**.
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
 * @param {string} params.version - Release date of the API version in YYYY-MM-DD format.
 * @param {string} params.workspace_id - Unique identifier of the workspace.
 * @param {string} [params.name] - The name of the workspace. This string cannot contain carriage return, newline, or
 * tab characters, and it must be no longer than 64 characters.
 * @param {string} [params.description] - The description of the workspace. This string cannot contain carriage return,
 * newline, or tab characters, and it must be no longer than 128 characters.
 * @param {string} [params.language] - The language of the workspace.
 * @param {CreateIntent[]} [params.intents] - An array of objects defining the intents for the workspace.
 * @param {CreateEntity[]} [params.entities] - An array of objects defining the entities for the workspace.
 * @param {CreateDialogNode[]} [params.dialog_nodes] - An array of objects defining the nodes in the workspace dialog.
 * @param {CreateCounterexample[]} [params.counterexamples] - An array of objects defining input examples that have been
 * marked as irrelevant input.
 * @param {Object} [params.metadata] - Any metadata related to the workspace.
 * @param {boolean} [params.learning_opt_out] - Whether training data from the workspace can be used by IBM for general
 * service improvements. `true` indicates that workspace training data is not to be used.
 * @param {boolean} [params.append] - Whether the new data is to be appended to the existing data in the workspace. If
 * **append**=`false`, elements included in the new data completely replace the corresponding existing elements,
 * including all subelements. For example, if the new data includes **entities** and **append**=`false`, all existing
 * entities in the workspace are discarded and replaced with the new entities.
 *
 * If **append**=`true`, existing elements are preserved, and the new elements are added. If any elements in the new
 * data collide with existing elements, the update request fails.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    const _params = getParams(params, 'conversation', 'conversation');
    _params.headers = extend({}, _params.headers, { 'User-Agent': 'openwhisk' });
    let service;
    try {
      service = new AssistantV1(_params);
      service.updateWorkspace(_params, (err, response) => {
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
