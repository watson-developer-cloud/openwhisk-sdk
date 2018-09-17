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

const DiscoveryV1 = require('watson-developer-cloud/discovery/v1');
const extend = require('extend');

/**
 * Test configuration.
 *
 * Runs a sample document through the default or your configuration and returns diagnostic information designed to help
 * you understand how the document was processed. The document is not added to the index.
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.username] - The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
 * @param {string} [params.password] - The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
 * @param {string} [params.iam_access_token] - An IAM access token fully managed by the application. Responsibility falls on the application to refresh the token, either before it expires or reactively upon receiving a 401 from the service, as any requests made with an expired token will fail.
 * @param {string} [params.iam_apikey] - An API key that can be used to request IAM tokens. If this API key is provided, the SDK will manage the token and handle the refreshing.
 * @param {string} [params.iam_url] - An optional URL for the IAM service API. Defaults to 'https://iam.bluemix.net/identity/token'.
 * @param {Object} [params.headers] - Custom HTTP request headers
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} params.version - Release date of the API version in YYYY-MM-DD format.
 * @param {string} params.environment_id - The ID of the environment.
 * @param {string} [params.configuration] - The configuration to use to process the document. If this part is provided,
 * then the provided configuration is used to process the document. If the **configuration_id** is also provided (both
 * are present at the same time), then request is rejected. The maximum supported configuration size is 1 MB.
 * Configuration parts larger than 1 MB are rejected.
 * See the `GET /configurations/{configuration_id}` operation for an example configuration.
 * @param {string} [params.step] - Specify to only run the input document through the given step instead of running the
 * input document through the entire ingestion workflow. Valid values are `convert`, `enrich`, and `normalize`.
 * @param {string} [params.configuration_id] - The ID of the configuration to use to process the document. If the
 * **configuration** form part is also provided (both are present at the same time), then the request will be rejected.
 * @param {string} [params.file] - Must be a base64-encoded string. The content of the document to ingest. The maximum
 * supported file size is 50 megabytes. Files larger than 50 megabytes is rejected.
 * @param {string} [params.metadata] - If you're using the Data Crawler to upload your documents, you can test a
 * document against the type of metadata that the Data Crawler might send. The maximum supported metadata file size is 1
 * MB. Metadata parts larger than 1 MB are rejected.
 * Example:  ``` {
 *   "Creator": "Johnny Appleseed",
 *   "Subject": "Apples"
 * } ```.
 * @param {string} [params.file_content_type] - The content type of file.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    const _params = getParams(params, 'discovery');
    _params.headers = extend(
      {},
      _params.headers,
      { 'User-Agent': 'openwhisk' }
    );
    const fileParams = ['file'];
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
      service = new DiscoveryV1(_params);
      service.testConfigurationInEnvironment(_params, (err, response) => {
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
*/
function getParams(theParams, service) {
  if (Object.keys(theParams).length === 0) {
    return theParams;
  }
  let bxCreds;
  // Code that checks parameters bound using service bind
  if (theParams.__bx_creds) {
    // If user has instance of service
    if (theParams.__bx_creds[service]) {
      bxCreds = theParams.__bx_creds[service];
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
