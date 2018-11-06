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
const extend = require('extend');
const vcap = require('vcap_services');

/**
 * Detect faces in images.
 *
 * **Important:** On April 2, 2018, the identity information in the response to calls to the Face model was removed. The
 * identity information refers to the `name` of the person, `score`, and `type_hierarchy` knowledge graph. For details
 * about the enhanced Face model, see the [Release
 * notes](https://console.bluemix.net/docs/services/visual-recognition/release-notes.html#2april2018).
 *
 * Analyze and get data about faces in images. Responses can include estimated age and gender. This feature uses a
 * built-in model, so no training is necessary. The Detect faces method does not support general biometric facial
 * recognition.
 *
 * Supported image formats include .gif, .jpg, .png, and .tif. The maximum image size is 10 MB. The minimum recommended
 * pixel density is 32X32 pixels per inch.
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.iam_access_token] - An IAM access token fully managed by the application. Responsibility falls on the application to refresh the token, either before it expires or reactively upon receiving a 401 from the service, as any requests made with an expired token will fail.
 * @param {string} [params.iam_apikey] - An API key that can be used to request IAM tokens. If this API key is provided, the SDK will manage the token and handle the refreshing.
 * @param {string} [params.iam_url] - An optional URL for the IAM service API. Defaults to 'https://iam.bluemix.net/identity/token'.
 * @param {Object} [params.headers] - Custom HTTP request headers
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} params.version - Release date of the API version in YYYY-MM-DD format.
 * @param {string} [params.images_file] - Must be a base64-encoded string. An image file (gif, .jpg, .png, .tif.) or
 * .zip file with images. Limit the .zip file to 100 MB. You can include a maximum of 15 images in a request.
 *
 * Encode the image and .zip file names in UTF-8 if they contain non-ASCII characters. The service assumes UTF-8
 * encoding if it encounters non-ASCII characters.
 *
 * You can also include an image with the **url** parameter.
 * @param {string} [params.url] - The URL of an image to analyze. Must be in .gif, .jpg, .png, or .tif format. The
 * minimum recommended pixel density is 32X32 pixels per inch, and the maximum image size is 10 MB. Redirects are
 * followed, so you can use a shortened URL.
 *
 * You can also include images with the **images_file** parameter.
 * @param {string} [params.images_file_content_type] - The content type of images_file.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
     const _params = vcap.getCredentialsFromServiceBind(params, 'watson-vision-combined', 'watson_vision_combined');
    _params.headers = extend(
      {},
      _params.headers,
      { 'User-Agent': 'openwhisk' }
    );
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
      service.detectFaces(_params, (err, response) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(response);
        }
      });
    } catch (err) {
      reject(err.message);
      return;
    }
  });
}

global.main = main;
module.exports.test = main;
