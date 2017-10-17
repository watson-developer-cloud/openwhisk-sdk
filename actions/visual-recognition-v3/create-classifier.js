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
 * Create a classifier.
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.api_key] - the service api key.
 * @param {Object} [params.headers]
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} params.version_date - Release date of the API version in YYYY-MM-DD format.
 * @param {string} params.name - The name of the new classifier. Cannot contain special characters.
 * @param {File} params.classname_positive_examples - A compressed (.zip) file of images that
 * depict the visual subject for a class within the new classifier. Must contain a minimum of
 * 10 images. The swagger limits you to training only one class.
 * To train more classes, use the API functionality.
 * @param {File} [params.negative_examples] - A compressed (.zip) file of images that do not depict
 * the visual subject of any of the classes of the new classifier.
 * Must contain a minimum of 10 images.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    let service;
    try {
      service = new VisualRecognitionV3(params);
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
