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

const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1');
const extend = require('extend');
const vcap = require('vcap_services');

/**
 * Analyze text, HTML, or a public webpage.
 *
 * Analyzes text, HTML, or a public webpage with one or more text analysis features, including categories, concepts,
 * emotion, entities, keywords, metadata, relations, semantic roles, and sentiment.
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
 * @param {Features} params.features - Specific features to analyze the document for.
 * @param {string} [params.text] - The plain text to analyze. One of the `text`, `html`, or `url` parameters is
 * required.
 * @param {string} [params.html] - The HTML file to analyze. One of the `text`, `html`, or `url` parameters is required.
 * @param {string} [params.url] - The web page to analyze. One of the `text`, `html`, or `url` parameters is required.
 * @param {boolean} [params.clean] - Remove website elements, such as links, ads, etc.
 * @param {string} [params.xpath] - An [XPath query](https://www.w3.org/TR/xpath/) to perform on `html` or `url` input.
 * Results of the query will be appended to the cleaned webpage text before it is analyzed. To analyze only the results
 * of the XPath query, set the `clean` parameter to `false`.
 * @param {boolean} [params.fallback_to_raw] - Whether to use raw HTML content if text cleaning fails.
 * @param {boolean} [params.return_analyzed_text] - Whether or not to return the analyzed text.
 * @param {string} [params.language] - ISO 639-1 code that specifies the language of your text. This overrides automatic
 * language detection. Language support differs depending on the features you include in your analysis. See [Language
 * support](https://www.bluemix.net/docs/services/natural-language-understanding/language-support.html) for more
 * information.
 * @param {number} [params.limit_text_characters] - Sets the maximum number of characters that are processed by the
 * service.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    const _params = vcap.getCredentialsFromServiceBind(
      params,
      'natural-language-understanding'
    );
    _params.headers = extend(
      {},
      _params.headers,
      { 'User-Agent': 'openwhisk' }
    );
    let service;
    try {
      service = new NaturalLanguageUnderstandingV1(_params);
      service.analyze(_params, (err, response) => {
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
