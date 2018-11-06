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
const vcap = require('vcap_services');

/**
 * Update entity value.
 *
 * Update an existing entity value with new or modified data. You must provide component objects defining the content of
 * the updated entity value.
 *
 * This operation is limited to 1000 requests per 30 minutes. For more information, see **Rate limiting**.
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
 * @param {string} params.entity - The name of the entity.
 * @param {string} params.value - The text of the entity value.
 * @param {string} [params.new_value] - The text of the entity value. This string must conform to the following
 * restrictions:
 * - It cannot contain carriage return, newline, or tab characters.
 * - It cannot consist of only whitespace characters.
 * - It must be no longer than 64 characters.
 * @param {Object} [params.new_metadata] - Any metadata related to the entity value.
 * @param {string} [params.new_type] - Specifies the type of value.
 * @param {string[]} [params.new_synonyms] - An array of synonyms for the entity value. You can provide either synonyms
 * or patterns (as indicated by **type**), but not both. A synonym must conform to the following resrictions:
 * - It cannot contain carriage return, newline, or tab characters.
 * - It cannot consist of only whitespace characters.
 * - It must be no longer than 64 characters.
 * @param {string[]} [params.new_patterns] - An array of patterns for the entity value. You can provide either synonyms
 * or patterns (as indicated by **type**), but not both. A pattern is a regular expression no longer than 512
 * characters. For more information about how to specify a pattern, see the
 * [documentation](https://console.bluemix.net/docs/services/conversation/entities.html#creating-entities).
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    const _params = vcap.getCredentialsFromServiceBind(params, 'conversation');
    _params.headers = extend(
      {},
      _params.headers,
      { 'User-Agent': 'openwhisk' }
    );
    let service;
    try {
      service = new AssistantV1(_params);
      service.updateValue(_params, (err, response) => {
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

global.main = main;
module.exports.test = main;
