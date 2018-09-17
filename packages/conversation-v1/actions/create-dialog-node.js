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

const ConversationV1 = require('watson-developer-cloud/conversation/v1');
const extend = require('extend');

/**
 * Create dialog node.
 *
 * Create a new dialog node.
 *
 * This operation is limited to 500 requests per 30 minutes. For more information, see **Rate limiting**.
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
 * @param {string} params.dialog_node - The dialog node ID. This string must conform to the following restrictions:
 * - It can contain only Unicode alphanumeric, space, underscore, hyphen, and dot characters.
 * - It must be no longer than 1024 characters.
 * @param {string} [params.description] - The description of the dialog node. This string cannot contain carriage
 * return, newline, or tab characters, and it must be no longer than 128 characters.
 * @param {string} [params.conditions] - The condition that will trigger the dialog node. This string cannot contain
 * carriage return, newline, or tab characters, and it must be no longer than 2048 characters.
 * @param {string} [params.parent] - The ID of the parent dialog node.
 * @param {string} [params.previous_sibling] - The ID of the previous dialog node.
 * @param {DialogNodeOutput} [params.output] - The output of the dialog node. For more information about how to specify
 * dialog node output, see the
 * [documentation](https://console.bluemix.net/docs/services/conversation/dialog-overview.html#complex).
 * @param {Object} [params.context] - The context for the dialog node.
 * @param {Object} [params.metadata] - The metadata for the dialog node.
 * @param {DialogNodeNextStep} [params.next_step] - The next step to be executed in dialog processing.
 * @param {DialogNodeAction[]} [params.actions] - An array of objects describing any actions to be invoked by the dialog
 * node.
 * @param {string} [params.title] - The alias used to identify the dialog node. This string must conform to the
 * following restrictions:
 * - It can contain only Unicode alphanumeric, space, underscore, hyphen, and dot characters.
 * - It must be no longer than 64 characters.
 * @param {string} [params.node_type] - How the dialog node is processed.
 * @param {string} [params.event_name] - How an `event_handler` node is processed.
 * @param {string} [params.variable] - The location in the dialog context where output is stored.
 * @param {string} [params.digress_in] - Whether this top-level dialog node can be digressed into.
 * @param {string} [params.digress_out] - Whether this dialog node can be returned to after a digression.
 * @param {string} [params.digress_out_slots] - Whether the user can digress to top-level nodes while filling out slots.
 * @param {string} [params.user_label] - A label that can be displayed externally to describe the purpose of the node to
 * users. This string must be no longer than 512 characters.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    const _params = getParams(params, 'conversation');
    _params.headers = extend(
      {},
      _params.headers,
      { 'User-Agent': 'openwhisk' }
    );
    let service;
    try {
      service = new ConversationV1(_params);
      service.createDialogNode(_params, (err, response) => {
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
*/
function getParams(theParams, service) {
  if (Object.keys(theParams).length === 0) {
    return theParams;
  }
  let bxCreds;
  // Code that checks parameters bound using service bind
  if (theParams.__bx_creds) {
    // If user has instance of service
    if (theParams.__bx_creds[service]) {
      bxCreds = theParams.__bx_creds[service];
    } else {
      // User has no instances of service
      bxCreds = {};
    }
  } else {
    bxCreds = {};
  }
  const _params = Object.assign({}, bxCreds, theParams);
  if (_params.apikey) {
    _params.iam_apikey = _params.apikey;
    delete _params.apikey;
  }
  delete _params.__bx_creds;
  return _params;
}
global.main = main;
module.exports.test = main;
