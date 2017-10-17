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
 * Detect faces in an image.
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.api_key] - the service api key.
 * @param {Object} [params.headers]
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} params.version_date - Release date of the API version in YYYY-MM-DD format.
 * @param {string} [params.images_file] - Base-64 encoded image file (.jpg, .png) data or .zip file 
 * data. Include no more than 15 images and limit the .zip file to 5 MB. You can also include images
 * with the `url` property in the **parameters** object. All faces are detected, but if there are
 * more than 10 faces in an image, age and gender confidence scores might return scores of 0.
 * @param {string} [params.parameters] - A JSON string containing the image URL to analyze.
 * For example: {"url": "..."}.
 * @param {string} [params.images_file_content_type] - The content type of images_file.
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
    if (params.images_file) {
      const imagesDataBuffer = Buffer.from(params.images_file, 'base64');
      params.images_file = imagesDataBuffer;
    }
    service.detectFaces(params, (err, response) => {
      if (err) {
        reject(err.message);
      } else {
        console.log(response);
        resolve(response);
      }
    });
  });
}
module.exports.main = main;
