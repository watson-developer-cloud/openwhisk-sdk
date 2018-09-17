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

/**
 * Update a classifier.
 *
 * Update a custom classifier by adding new positive or negative classes (examples) or by adding new images to existing
 * classes. You must supply at least one set of positive or negative examples. For details, see [Updating custom
 * classifiers](https://console.bluemix.net/docs/services/visual-recognition/customizing.html#updating-custom-classifiers).
 *
 * Encode all names in UTF-8 if they contain non-ASCII characters (.zip and image file names, and classifier and class
 * names). The service assumes UTF-8 encoding if it encounters non-ASCII characters.
 *
 * **Tip:** Don't make retraining calls on a classifier until the status is ready. When you submit retraining requests
 * in parallel, the last request overwrites the previous requests. The retrained property shows the last time the
 * classifier retraining finished.
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.api_key] - The API key used to authenticate with the service. The API key credential is only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
 * @param {string} [params.iam_access_token] - An IAM access token fully managed by the application. Responsibility falls on the application to refresh the token, either before it expires or reactively upon receiving a 401 from the service, as any requests made with an expired token will fail.
 * @param {string} [params.iam_apikey] - An API key that can be used to request IAM tokens. If this API key is provided, the SDK will manage the token and handle the refreshing.
 * @param {string} [params.iam_url] - An optional URL for the IAM service API. Defaults to 'https://iam.bluemix.net/identity/token'.
 * @param {Object} [params.headers] - Custom HTTP request headers
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} params.version - Release date of the API version in YYYY-MM-DD format.
 * @param {string} params.classifier_id - The ID of the classifier.
 * @param {string} [params.classname_positive_examples] - Must be a base64-encoded string. A .zip file of images that
 * depict the visual subject of a class in the classifier. The positive examples create or update classes in the
 * classifier. You can include more than one positive example file in a call.
 *
 * Specify the parameter name by appending `_positive_examples` to the class name. For example,
 * `goldenretriever_positive_examples` creates the class `goldenretriever`.
 *
 * Include at least 10 images in .jpg or .png format. The minimum recommended image resolution is 32X32 pixels. The
 * maximum number of images is 10,000 images or 100 MB per .zip file.
 *
 * Encode special characters in the file name in UTF-8.
 * @param {string} [params.negative_examples] - Must be a base64-encoded string. A .zip file of images that do not
 * depict the visual subject of any of the classes of the new classifier. Must contain a minimum of 10 images.
 *
 * Encode special characters in the file name in UTF-8.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    const _params = getParams(
      params,
      'watson-vision-combined',
      'watson_vision_combined',
    );
    _params.headers = extend(
      {},
      _params.headers,
      { 'User-Agent': 'openwhisk' }
    );
    const fileParams = [ 'classname_positive_examples' , 'negative_examples' ];
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
      service.updateClassifier(_params, (err, response) => {
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

/**
* Helper function used to authenticate credentials bound to package using wsk service bind
*
* @param {Object} theParams - parameters sent to service
* @param {string} service - name of service in bluemix used to retrieve credentials, used for IAM instances
* @param {string} serviceAltName - alternate name of service used for cloud foundry instances
*/
function getParams(theParams, service, serviceAltName) {
  if (Object.keys(theParams).length === 0) {
    return theParams;
  }
  let bxCreds;
  // Code that checks parameters bound using service bind
  if (theParams.__bx_creds) {
    // If user has IAM instance of service
    if (theParams.__bx_creds[service]) {
      bxCreds = theParams.__bx_creds[service];
    } else if (theParams.__bx_creds[serviceAltName]) {
      // If user has no IAM instance of service, check for CF instances
      bxCreds = theParams.__bx_creds[serviceAltName];
    } else {
      // User has no instances of service
      bxCreds = {};
    }
  } else {
    bxCreds = {};
  }
  const _params = Object.assign({}, bxCreds, theParams);
  if (_params.apikey) {
    _params.iam_apikey = _params.apikey;
    delete _params.apikey;
  }
  delete _params.__bx_creds;
  return _params;
}

global.main = main;
module.exports.test = main;
