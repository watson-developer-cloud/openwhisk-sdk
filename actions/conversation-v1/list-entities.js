
/**
 * Copyright 2017 IBM All Rights Reserved.
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

/**
 * List entities.
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.username] - required unless use_unauthenticated is set.
 * @param {string} [params.password] - required unless use_unauthenticated is set.
 * @param {Object} [params.headers]
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} params.version_date - Release date of the API version in YYYY-MM-DD format.
 * @param {string} params.workspace_id - The workspace ID.
 * @param {boolean} [params.export] - Whether to include all element content in the returned data. If export=`false`, the returned data includes only information about the element itself. If export=`true`, all content, including subelements, is included. The default value is `false`.
 * @param {number} [params.page_limit] - The number of records to return in each page of results. The default page limit is 100.
 * @param {boolean} [params.include_count] - Whether to include information about the number of records returned.
 * @param {string} [params.sort] - Sorts the response according to the value of the specified property, in ascending or descending order.
 * @param {string} [params.cursor] - A token identifying the last value from the previous page of results.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve,reject) => {
    let service;
    try {
      service = new ConversationV1(params);
    } catch(err) {
      reject(err.message);
    }
    service.listEntities(params, (err,response) => {
      if(err) {
        reject(err.message);
      } else {
        resolve(response);
      }
    });
  });
}
module.exports.main = main;
