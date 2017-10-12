
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

const VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');

/**
 * Retrieve a list of custom classifiers.
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.username] - required unless use_unauthenticated is set.
 * @param {string} [params.password] - required unless use_unauthenticated is set.
 * @param {Object} [params.headers]
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} params.version_date - Release date of the API version in YYYY-MM-DD format.
 * @param {boolean} [params.verbose] - Specify true to return classifier details. Omit this parameter to return a brief list of classifiers.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve,reject) => {
    let service;
    try {
      service = new VisualRecognitionV3(params);
    } catch(err) {
      reject(err.message);
    }
    service.listClassifiers(params, (err,response) => {
      if(err) {
        reject(err.message);
      } else {
        resolve(response);
      }
    });
  });
}
module.exports.main = main;
