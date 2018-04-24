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

const VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
const pkg = require('../../package.json');

/**
 * Detect faces in images.
 *
 * **Important:** On April 2, 2018, the identity information in the response to calls to the Face model was removed. The identity information refers to the `name` of the person, `score`, and `type_hierarchy` knowledge graph. For details about the enhanced Face model, see the [Release notes](https://console.bluemix.net/docs/services/visual-recognition/release-notes.html#2april2018).  Analyze and get data about faces in images. Responses can include estimated age and gender. This feature uses a built-in model, so no training is necessary. The Detect faces method does not support general biometric facial recognition.  Supported image formats include .gif, .jpg, .png, and .tif. The maximum image size is 10 MB. The minimum recommended pixel density is 32X32 pixels per inch.
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.api_key] - The API key used to authenticate with the service. The API key credential is only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
 * @param {Object} [params.headers] - Custom HTTP request headers
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} params.version - Release date of the API version in YYYY-MM-DD format.
 * @param {string} [params.images_file] - Must be a base64-encoded string. An image file (gif, .jpg, .png, .tif.) or .zip file with images. Limit the .zip file to 100 MB. You can include a maximum of 15 images in a request.  Encode the image and .zip file names in UTF-8 if they contain non-ASCII characters. The service assumes UTF-8 encoding if it encounters non-ASCII characters.  You can also include an image with the **url** parameter.
 * @param {string} [params.url] - The URL of an image to analyze. Must be in .gif, .jpg, .png, or .tif format. The minimum recommended pixel density is 32X32 pixels per inch, and the maximum image size is 10 MB. Redirects are followed, so you can use a shortened URL.  You can also include images with the **images_file** parameter.
 * @param {string} [params.images_file_content_type] - The content type of images_file.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    const _params = params || {};
    _params.headers['User-Agent'] = `openwhisk-${pkg.version}`;
    const fileParams = [ 'images_file' ,];
    fileParams.filter(fileParam => _params[fileParam]).forEach(fileParam => {
      try {
        _params[fileParam] = Buffer.from(_params[fileParam], 'base64');
      } catch (err) {
        reject(err.message);
        return;
      }
    });
    let service;
    try {
      service = new VisualRecognitionV3(_params);
    } catch (err) {
      reject(err.message);
      return;
    }
    service.detectFaces(_params, (err, response) => {
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
