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

const NaturalLanguageClassifierV1 = require('watson-developer-cloud/natural-language-classifier/v1');

/**
 * Create classifier.
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.username] - required unless use_unauthenticated is set.
 * @param {string} [params.password] - required unless use_unauthenticated is set.
 * @param {Object} [params.headers]
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {File} params.metadata - Metadata in JSON format. The metadata identifies the language of the data, and an optional name to identify the classifier. For details, see the [API reference](https://www.ibm.com/watson/developercloud/natural-language-classifier/api/v1/#create_classifier).
 * @param {File} params.training_data - Training data in CSV format. Each text value must have at least one class. The data can include up to 15,000 records. For details, see [Using your own data](https://www.ibm.com/watson/developercloud/doc/natural-language-classifier/using-your-data.html).
 * @param {string} [params.training_metadata_content_type] - The content type of training_metadata.
 * @param {string} [params.training_data_content_type] - The content type of training_data.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    let service;
    try {
      service = new NaturalLanguageClassifierV1(params);
    } catch (err) {
      reject(err.message);
    }
    service.createClassifier(params, (err, response) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(response);
      }
    });
  });
}
module.exports.main = main;
