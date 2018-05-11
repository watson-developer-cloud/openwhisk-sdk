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
const pkg = require('../../package.json');

/**
 * Create dialog node.
 *
 * Create a new dialog node.    This operation is limited to 500 requests per 30 minutes. For more information, see **Rate limiting**.
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {Object} [params.headers] - Custom HTTP request headers
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} params.version - Release date of the API version in YYYY-MM-DD format.
 * @param {string} params.workspace_id - Unique identifier of the workspace.
 * @param {string} params.dialog_node - The dialog node ID. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, space, underscore, hyphen, and dot characters.  - It must be no longer than 1024 characters.
 * @param {string} [params.description] - The description of the dialog node. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 128 characters.
 * @param {string} [params.conditions] - The condition that will trigger the dialog node. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 2048 characters.
 * @param {string} [params.parent] - The ID of the parent dialog node.
 * @param {string} [params.previous_sibling] - The ID of the previous dialog node.
 * @param {Object} [params.output] - The output of the dialog node. For more information about how to specify dialog node output, see the [documentation](https://console.bluemix.net/docs/services/conversation/dialog-overview.html#complex).
 * @param {Object} [params.context] - The context for the dialog node.
 * @param {Object} [params.metadata] - The metadata for the dialog node.
 * @param {DialogNodeNextStep} [params.next_step] - The next step to be executed in dialog processing.
 * @param {DialogNodeAction[]} [params.actions] - An array of objects describing any actions to be invoked by the dialog node.
 * @param {string} [params.title] - The alias used to identify the dialog node. This string must conform to the following restrictions:  - It can contain only Unicode alphanumeric, space, underscore, hyphen, and dot characters.  - It must be no longer than 64 characters.
 * @param {string} [params.node_type] - How the dialog node is processed.
 * @param {string} [params.event_name] - How an `event_handler` node is processed.
 * @param {string} [params.variable] - The location in the dialog context where output is stored.
 * @param {string} [params.digress_in] - Whether this top-level dialog node can be digressed into.
 * @param {string} [params.digress_out] - Whether this dialog node can be returned to after a digression.
 * @param {string} [params.digress_out_slots] - Whether the user can digress to top-level nodes while filling out slots.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    const _params = params || {};
    _params.headers['User-Agent'] = `openwhisk-${pkg.version}`;
    let service;
    try {
      service = new AssistantV1(_params);
    } catch (err) {
      reject(err.message);
      return;
    }
    service.createDialogNode(_params, (err, response) => {
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
