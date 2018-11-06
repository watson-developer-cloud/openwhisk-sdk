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
const vcap = require('vcap_services');

/**
 * Add a document.
 *
 * Add a document to a collection with optional metadata.
 *
 *   * The **version** query parameter is still required.
 *
 *   * Returns immediately after the system has accepted the document for processing.
 *
 *   * The user must provide document content, metadata, or both. If the request is missing both document content and
 * metadata, it is rejected.
 *
 *   * The user can set the **Content-Type** parameter on the **file** part to indicate the media type of the document.
 * If the **Content-Type** parameter is missing or is one of the generic media types (for example,
 * `application/octet-stream`), then the service attempts to automatically detect the document's media type.
 *
 *   * The following field names are reserved and will be filtered out if present after normalization: `id`, `score`,
 * `highlight`, and any field with the prefix of: `_`, `+`, or `-`
 *
 *   * Fields with empty name values after normalization are filtered out before indexing.
 *
 *   * Fields containing the following characters after normalization are filtered out before indexing: `#` and `,`.
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
 * @param {string} params.collection_id - The ID of the collection.
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
     const _params = vcap.getCredentialsFromServiceBind(params, 'discovery');
    _params.headers = extend(
      {},
      _params.headers,
      { 'User-Agent': 'openwhisk' }
    );
    const fileParams = [ 'file' ,];
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
      service = new DiscoveryV1(_params);
      service.addDocument(_params, (err, response) => {
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
