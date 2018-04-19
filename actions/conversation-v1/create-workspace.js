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
 * Create workspace.
 *
 * Create a workspace based on component objects. You must provide workspace components defining the content of the new workspace.    This operation is limited to 30 requests per 30 minutes. For more information, see **Rate limiting**.
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.username] - required unless use_unauthenticated is set.
 * @param {string} [params.password] - required unless use_unauthenticated is set.
 * @param {Object} [params.headers]
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} params.version_date - Release date of the API version in YYYY-MM-DD format.
 * @param {string} [params.name] - The name of the workspace. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 64 characters.
 * @param {string} [params.description] - The description of the workspace. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 128 characters.
 * @param {string} [params.language] - The language of the workspace.
 * @param {CreateIntent[]} [params.intents] - An array of objects defining the intents for the workspace.
 * @param {CreateEntity[]} [params.entities] - An array of objects defining the entities for the workspace.
 * @param {CreateDialogNode[]} [params.dialog_nodes] - An array of objects defining the nodes in the workspace dialog.
 * @param {CreateCounterexample[]} [params.counterexamples] - An array of objects defining input examples that have been marked as irrelevant input.
 * @param {Object} [params.metadata] - Any metadata related to the workspace.
 * @param {boolean} [params.learning_opt_out] - Whether training data from the workspace can be used by IBM for general service improvements. `true` indicates that workspace training data is not to be used.
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
    service.createWorkspace(_params, (err, response) => {
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
