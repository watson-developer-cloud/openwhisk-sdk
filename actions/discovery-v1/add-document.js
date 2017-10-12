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

const DiscoveryV1 = require('watson-developer-cloud/discovery/v1');

/**
 * Add a document.
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
 * @param {File} [params.file] - The content of the document to ingest.
 * The maximum supported file size is 50 megabytes. Files larger than 50 megabytes is rejected.
 * @param {string} [params.metadata] - If you're using the Data Crawler to upload your documents,
 * you can test a document against the type of metadata that the Data Crawler might send.
 * The maximum supported metadata file size is 1 MB. Metadata parts larger than 1 MB are rejected.
 * Example:  ``` {   "Creator": "Johnny Appleseed",   "Subject": "Apples" } ```.
 * @param {string} [params.file_content_type] - The content type of file.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    let service;
    try {
      service = new DiscoveryV1(params);
    } catch (err) {
      reject(err.message);
    }
    service.addDocument(params, (err, response) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(response);
      }
    });
  });
}
module.exports.main = main;
