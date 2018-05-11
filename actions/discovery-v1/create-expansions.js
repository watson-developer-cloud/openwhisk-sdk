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

const DiscoveryV1 = require('watson-developer-cloud/discovery/v1');
const pkg = require('../../package.json');

/**
 * Set the expansion list.
 *
 * Create or replace the Expansion list for this collection. The maximum number of expanded terms per collection is `500`. The current expansion list is replaced with the uploaded content.
 *
 * @param {Object} params - The parameters to send to the service.


 * @param {Object} [params.headers] - Custom HTTP request headers
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} params.version - Release date of the API version in YYYY-MM-DD format.
 * @param {string} params.environment_id - The ID of the environment.
 * @param {string} params.collection_id - The ID of the collection.
 * @param {Expansion[]} params.expansions - An array of query expansion definitions.    Each object in the `expansions` array represents a term or set of terms that will be expanded into other terms. Each expansion object can be configured so that all terms are expanded to all other terms in the object - bi-directional, or a set list of terms can be expanded into a second list of terms - uni-directional.   To create a bi-directional expansion specify an `expanded_terms` array. When found in a query, all items in the `expanded_terms` array are then expanded to the other items in the same array.   To create a uni-directional expansion, specify both an array of `input_terms` and an array of `expanded_terms`. When items in the `input_terms` array are present in a query, they are expanded using the items listed in the `expanded_terms` array.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    const _params = params || {};
    _params.headers['User-Agent'] = `openwhisk-${pkg.version}`;
    let service;
    try {
      service = new DiscoveryV1(_params);
    } catch (err) {
      reject(err.message);
      return;
    }
    service.createExpansions(_params, (err, response) => {
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
