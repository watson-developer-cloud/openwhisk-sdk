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

/**
 * Knowledge Graph relationship query.
 *
 * See the [Knowledge Graph documentation](https://console.bluemix.net/docs/services/discovery/building-kg.html) for more details.
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.username] - required unless use_unauthenticated is set.
 * @param {string} [params.password] - required unless use_unauthenticated is set.
 * @param {Object} [params.headers]
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} params.version_date - Release date of the API version in YYYY-MM-DD format.
 * @param {string} params.environment_id - The ID of the environment.
 * @param {string} params.collection_id - The ID of the collection.
 * @param {QueryRelationsEntity[]} [params.entities] - An array of entities to find relationships for.
 * @param {QueryEntitiesContext} [params.context] - Entity text to provide context for the queried entity and rank based on that association. For example, if you wanted to query the city of London in England your query would look for `London` with the context of `England`.
 * @param {string} [params.sort] - The sorting method for the relationships, can be `score` or `frequency`. `frequency` is the number of unique times each entity is identified. The default is `score`.
 * @param {QueryRelationsFilter} [params.filter] - Filters to apply to the relationship query.
 * @param {number} [params.count] - The number of results to return. The default is `10`. The maximum is `1000`.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    const _params = params || {};
    _params.headers['User-Agent'] = 'openwhisk';
    let service;
    try {
      service = new DiscoveryV1(_params);
    } catch (err) {
      reject(err.message);
      return;
    }
    service.queryRelations(_params, (err, response) => {
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
