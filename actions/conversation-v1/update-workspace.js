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
const pkg = require('../../package.json');

/**
 * Update workspace.
 *
 * Update an existing workspace with new or modified data. You must provide component objects defining the content of the updated workspace.    This operation is limited to 30 request per 30 minutes. For more information, see **Rate limiting**.
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.username] - The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
 * @param {string} [params.password] - The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
 * @param {Object} [params.headers] - Custom HTTP request headers
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} params.version - Release date of the API version in YYYY-MM-DD format.
 * @param {string} params.workspace_id - Unique identifier of the workspace.
 * @param {string} [params.name] - The name of the workspace. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 64 characters.
 * @param {string} [params.description] - The description of the workspace. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 128 characters.
 * @param {string} [params.language] - The language of the workspace.
 * @param {CreateIntent[]} [params.intents] - An array of objects defining the intents for the workspace.
 * @param {CreateEntity[]} [params.entities] - An array of objects defining the entities for the workspace.
 * @param {CreateDialogNode[]} [params.dialog_nodes] - An array of objects defining the nodes in the workspace dialog.
 * @param {CreateCounterexample[]} [params.counterexamples] - An array of objects defining input examples that have been marked as irrelevant input.
 * @param {Object} [params.metadata] - Any metadata related to the workspace.
 * @param {boolean} [params.learning_opt_out] - Whether training data from the workspace can be used by IBM for general service improvements. `true` indicates that workspace training data is not to be used.
 * @param {boolean} [params.append] - Whether the new data is to be appended to the existing data in the workspace. If **append**=`false`, elements included in the new data completely replace the corresponding existing elements, including all subelements. For example, if the new data includes **entities** and **append**=`false`, all existing entities in the workspace are discarded and replaced with the new entities.    If **append**=`true`, existing elements are preserved, and the new elements are added. If any elements in the new data collide with existing elements, the update request fails.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    const _params = params || {};
    _params.headers['User-Agent'] = `openwhisk-${pkg.version}`;
    let service;
    try {
      service = new ConversationV1(_params);
    } catch (err) {
      reject(err.message);
      return;
    }
    service.updateWorkspace(_params, (err, response) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(response);
      }
    });
  });
}
global.main = main;
module.exports.test = main;
