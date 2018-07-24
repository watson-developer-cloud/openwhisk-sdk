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
 * Update a configuration.
 *
 * Replaces an existing configuration.
 *   * Completely replaces the original configuration.
 *   * The **configuration_id**, **updated**, and **created** fields are accepted in the request, but they are ignored,
 * and an error is not generated. It is also acceptable for users to submit an updated configuration with none of the
 * three properties.
 *   * Documents are processed with a snapshot of the configuration as it was at the time the document was submitted to
 * be ingested. This means that already submitted documents will not see any updates made to the configuration.
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
 * @param {string} params.configuration_id - The ID of the configuration.
 * @param {string} params.name - The name of the configuration.
 * @param {string} [params.description] - The description of the configuration, if available.
 * @param {Conversions} [params.conversions] - The document conversion settings for the configuration.
 * @param {Enrichment[]} [params.enrichments] - An array of document enrichment settings for the configuration.
 * @param {NormalizationOperation[]} [params.normalizations] - Defines operations that can be used to transform the
 * final output JSON into a normalized form. Operations are executed in the order that they appear in the array.
 * @param {Source} [params.source] - Object containing source parameters for the configuration.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    const _params = getParams(params, 'discovery', 'discovery');
    _params.headers = extend({}, _params.headers, { 'User-Agent': 'openwhisk' });
    let service;
    try {
      service = new DiscoveryV1(_params);
      service.updateConfiguration(_params, (err, response) => {
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
  if (theParams.__bx_creds) {
    if (theParams.__bx_creds[service]) {
      bxCreds = theParams.__bx_creds[service];
    } else if (theParams.__bx_creds[serviceAltName]) {
      bxCreds = theParams.__bx_creds[serviceAltName];
    } else {
      bxCreds = {};
    }
  } else {
    bxCreds = {};
  }
  const _params = Object.assign({}, bxCreds, theParams);
  if (_params.apikey) {
    _params.iam_apikey = _params.apikey;
  }
  delete _params.__bx_creds;
  return _params;
}
global.main = main;
module.exports.test = main;
