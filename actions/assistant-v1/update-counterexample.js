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
 * Update counterexample.
 *
 * Update the text of a counterexample. Counterexamples are examples that have been marked as irrelevant input.    This operation is limited to 1000 requests per 30 minutes. For more information, see **Rate limiting**.
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.username] - required unless use_unauthenticated is set.
 * @param {string} [params.password] - required unless use_unauthenticated is set.
 * @param {Object} [params.headers]
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} params.version_date - Release date of the API version in YYYY-MM-DD format.
 * @param {string} params.workspace_id - Unique identifier of the workspace.
 * @param {string} params.text - The text of a user input counterexample (for example, `What are you wearing?`).
 * @param {string} [params.new_text] - The text of a user input counterexample.
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
    service.updateCounterexample(_params, (err, response) => {
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
