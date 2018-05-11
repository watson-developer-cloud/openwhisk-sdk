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
 * List log events in a workspace.
 *
 * List the events from the log of a specific workspace.    If **cursor** is not specified, this operation is limited to 40 requests per 30 minutes. If **cursor** is specified, the limit is 120 requests per minute. For more information, see **Rate limiting**.
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {Object} [params.headers] - Custom HTTP request headers
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} params.version - Release date of the API version in YYYY-MM-DD format.
 * @param {string} params.workspace_id - Unique identifier of the workspace.
 * @param {string} [params.sort] - The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`.
 * @param {string} [params.filter] - A cacheable parameter that limits the results to those matching the specified filter. For more information, see the [documentation](https://console.bluemix.net/docs/services/conversation/filter-reference.html#filter-query-syntax).
 * @param {number} [params.page_limit] - The number of records to return in each page of results.
 * @param {string} [params.cursor] - A token identifying the page of results to retrieve.
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
    service.listLogs(_params, (err, response) => {
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
