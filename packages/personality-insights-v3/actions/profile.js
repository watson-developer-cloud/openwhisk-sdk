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

const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
const extend = require('extend');

/**
 * Get profile.
 *
 * Generates a personality profile for the author of the input text. The service accepts a maximum of 20 MB of input
 * content, but it requires much less text to produce an accurate profile; for more information, see [Providing
 * sufficient input](https://console.bluemix.net/docs/services/personality-insights/input.html#sufficient). The service
 * analyzes text in Arabic, English, Japanese, Korean, or Spanish and returns its results in a variety of languages. You
 * can provide plain text, HTML, or JSON input by specifying the **Content-Type** parameter; the default is
 * `text/plain`. Request a JSON or comma-separated values (CSV) response by specifying the **Accept** parameter; CSV
 * output includes a fixed number of columns and optional headers.
 *
 * Per the JSON specification, the default character encoding for JSON content is effectively always UTF-8; per the HTTP
 * specification, the default encoding for plain text and HTML is ISO-8859-1 (effectively, the ASCII character set).
 * When specifying a content type of plain text or HTML, include the `charset` parameter to indicate the character
 * encoding of the input text; for example: `Content-Type: text/plain;charset=utf-8`.
 *
 * For detailed information about calling the service and the responses it can generate, see [Requesting a
 * profile](https://console.bluemix.net/docs/services/personality-insights/input.html), [Understanding a JSON
 * profile](https://console.bluemix.net/docs/services/personality-insights/output.html), and [Understanding a CSV
 * profile](https://console.bluemix.net/docs/services/personality-insights/output-csv.html).
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
 * @param {Content} params.content - A maximum of 20 MB of content to analyze, though the service requires much less
 * text; for more information, see [Providing sufficient
 * input](https://console.bluemix.net/docs/services/personality-insights/input.html#sufficient). For JSON input, provide
 * an object of type `Content`.
 * @param {string} params.content_type - The type of the input. A character encoding can be specified by including a
 * `charset` parameter. For example, 'text/html;charset=utf-8'.
 * @param {string} [params.content_language] - The language of the input text for the request: Arabic, English,
 * Japanese, Korean, or Spanish. Regional variants are treated as their parent language; for example, `en-US` is
 * interpreted as `en`.
 *
 * The effect of the **Content-Language** parameter depends on the **Content-Type** parameter. When **Content-Type** is
 * `text/plain` or `text/html`, **Content-Language** is the only way to specify the language. When **Content-Type** is
 * `application/json`, **Content-Language** overrides a language specified with the `language` parameter of a
 * `ContentItem` object, and content items that specify a different language are ignored; omit this parameter to base
 * the language on the specification of the content items. You can specify any combination of languages for
 * **Content-Language** and **Accept-Language**.
 * @param {string} [params.accept_language] - The desired language of the response. For two-character arguments,
 * regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`. You can specify
 * any combination of languages for the input and response content.
 * @param {boolean} [params.raw_scores] - Indicates whether a raw score in addition to a normalized percentile is
 * returned for each characteristic; raw scores are not compared with a sample population. By default, only normalized
 * percentiles are returned.
 * @param {boolean} [params.csv_headers] - Indicates whether column labels are returned with a CSV response. By default,
 * no column labels are returned. Applies only when the **Accept** parameter is set to `text/csv`.
 * @param {boolean} [params.consumption_preferences] - Indicates whether consumption preferences are returned with the
 * results. By default, no consumption preferences are returned.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    const _params = getParams(
      params,
      'personality-insights',
      'personality_insights',
    );
    _params.headers = extend({}, _params.headers, { 'User-Agent': 'openwhisk' });
    let service;
    try {
      service = new PersonalityInsightsV3(_params);
      service.profile(_params, (err, response) => {
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
