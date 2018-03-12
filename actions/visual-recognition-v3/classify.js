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
 * Classify images.
 *
 * Classify images with built-in or custom classifiers.
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.username] - required unless use_unauthenticated is set.
 * @param {string} [params.password] - required unless use_unauthenticated is set.
 * @param {string} [params.api_key] - The API key used to authenticate with the service. The API key credential is only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
 * @param {Object} [params.headers]
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} params.version_date - Release date of the API version in YYYY-MM-DD format.
 * @param {string} [params.images_file] - Must be a base64-encoded string. An image file (.jpg, .png) or .zip file with images. Maximum image size is 10 MB. Include no more than 20 images and limit the .zip file to 100 MB. Encode the image and .zip file names in UTF-8 if they contain non-ASCII characters. The service assumes UTF-8 encoding if it encounters non-ASCII characters. You can also include images with the `url` property in the **parameters** object.
 * @param {string} [params.accept_language] - Specifies the language of the output class names.  Can be `en` (English), `ar` (Arabic), `de` (German), `es` (Spanish), `it` (Italian), `ja` (Japanese), or `ko` (Korean).  Classes for which no translation is available are omitted.  The response might not be in the specified language under these conditions: - English is returned when the requested language is not supported. - Classes are not returned when there is no translation for them. - Custom classifiers returned with this method return tags in the language of the custom classifier.
 * @param {string} [params.url] - A string with the image URL to analyze. Must be in .jpg, or .png format. The minimum recommended pixel density is 32X32 pixels per inch, and the maximum image size is 10 MB. You can also include images in the **images_file** parameter.
 * @param {number} [params.threshold] - A floating point value that specifies the minimum score a class must have to be displayed in the response. The default threshold for returning scores from a classifier is `0.5`. Set the threshold to `0.0` to ignore the classification score and return all values.
 * @param {string[]} [params.owners] - An array of the categories of classifiers to apply. Use `IBM` to classify against the `default` general classifier, and use `me` to classify against your custom classifiers. To analyze the image against both classifier categories, set the value to both `IBM` and `me`.   The built-in `default` classifier is used if both **classifier_ids** and **owners** parameters are empty.  The **classifier_ids** parameter overrides **owners**, so make sure that **classifier_ids** is empty.
 * @param {string[]} [params.classifier_ids] - The **classifier_ids** parameter overrides **owners**, so make sure that **classifier_ids** is empty. - **classifier_ids**: Specifies which classifiers to apply and overrides the **owners** parameter. You can specify both custom and built-in classifiers. The built-in `default` classifier is used if both **classifier_ids** and **owners** parameters are empty.  The following built-in classifier IDs require no training: - `default`: Returns classes from thousands of general tags. - `food`: (Beta) Enhances specificity and accuracy for images of food items. - `explicit`: (Beta) Evaluates whether the image might be pornographic.  Example: `"classifier_ids="CarsvsTrucks_1479118188","explicit"`.
 * @param {string} [params.images_file_content_type] - The content type of images_file.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    const _params = params || {};
    _params.headers['User-Agent'] = `openwhisk-${pkg.version}`;
    const fileParams = ['images_file'];
    fileParams.filter(fileParam => _params[fileParam]).forEach((fileParam) => {
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
    service.classify(_params, (err, response) => {
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
