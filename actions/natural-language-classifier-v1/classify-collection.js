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

const NaturalLanguageClassifierV1 = require('watson-developer-cloud/natural-language-classifier/v1');
const pkg = require('../../package.json');

/**
 * Classify multiple phrases.
 *
 * Returns label information for multiple phrases. The status must be `Available` before you can use the classifier to classify text.  Note that classifying Japanese texts is a beta feature.
 *
 * @param {Object} params - The parameters to send to the service.


 * @param {Object} [params.headers] - Custom HTTP request headers
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} params.classifier_id - Classifier ID to use.
 * @param {ClassifyInput[]} params.collection - The submitted phrases.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    const _params = params || {};
    _params.headers['User-Agent'] = `openwhisk-${pkg.version}`;
    let service;
    try {
      service = new NaturalLanguageClassifierV1(_params);
    } catch (err) {
      reject(err.message);
      return;
    }
    service.classifyCollection(_params, (err, response) => {
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