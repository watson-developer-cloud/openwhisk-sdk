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
 * List entities.
 *
 * List the entities for a workspace.    With **export**=`false`, this operation is limited to 1000 requests per 30 minutes. With **export**=`true`, the limit is 200 requests per 30 minutes. For more information, see **Rate limiting**.
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.username] - The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
 * @param {string} [params.password] - The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
 * @param {string} [params.iam_access_token] - An IAM access token fully managed by the application. Responsibility falls on the application to refresh the token, either before it expires or reactively upon receiving a 401 from the service, as any requests made with an expired token will fail.
 * @param {string} [params.iam_apikey] - An API key that can be used to request IAM tokens. If this API key is provided, the SDK will manage the token and handle the refreshing.
 * @param {string} [params.iam_url] - An optional URL for the IAM service API. Defaults to 'https://iam.ng.bluemix.net/identity/token'.
 * @param {Object} [params.headers] - Custom HTTP request headers
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} params.version - Release date of the API version in YYYY-MM-DD format.
 * @param {string} params.workspace_id - Unique identifier of the workspace.
 * @param {boolean} [params.export] - Whether to include all element content in the returned data. If **export**=`false`, the returned data includes only information about the element itself. If **export**=`true`, all content, including subelements, is included.
 * @param {number} [params.page_limit] - The number of records to return in each page of results.
 * @param {boolean} [params.include_count] - Whether to include information about the number of records returned.
 * @param {string} [params.sort] - The attribute by which returned results will be sorted. To reverse the sort order, prefix the value with a minus sign (`-`). Supported values are `name`, `updated`, and `workspace_id`.
 * @param {string} [params.cursor] - A token identifying the page of results to retrieve.
 * @param {boolean} [params.include_audit] - Whether to include the audit properties (`created` and `updated` timestamps) in the response.
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
    service.listEntities(_params, (err, response) => {
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