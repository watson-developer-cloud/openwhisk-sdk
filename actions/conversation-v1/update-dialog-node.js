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
 * Update dialog node.
 *
 * Update information for a dialog node.
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.username] - required unless use_unauthenticated is set.
 * @param {string} [params.password] - required unless use_unauthenticated is set.
 * @param {Object} [params.headers]
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} params.version_date - Release date of the API version in YYYY-MM-DD format.
 * @param {string} params.workspace_id - The workspace ID.
 * @param {string} params.dialog_node - The dialog node ID (for example, `get_order`).
 * @param {string} params.new_dialog_node - The dialog node ID.
 * @param {string} [params.new_description] - The description of the dialog node.
 * @param {string} [params.new_conditions] - The condition that will trigger the dialog node.
 * @param {string} [params.new_parent] - The ID of the parent dialog node (if any).
 * @param {string} [params.new_previous_sibling] - The previous dialog node.
 * @param {Object} [params.new_output] - The output of the dialog node.
 * @param {Object} [params.new_context] - The context for the dialog node.
 * @param {Object} [params.new_metadata] - The metadata for the dialog node.
 * @param {DialogNodeNextStep} [params.new_next_step] - The next step to execute following this dialog node.
 * @param {string} [params.new_title] - The alias used to identify the dialog node.
 * @param {string} [params.new_type] - How the dialog node is processed.
 * @param {string} [params.new_event_name] - How an `event_handler` node is processed.
 * @param {string} [params.new_variable] - The location in the dialog context where output is stored.
 * @param {DialogNodeAction[]} [params.new_actions] - The actions for the dialog node.
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
    service.updateDialogNode(_params, (err, response) => {
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
