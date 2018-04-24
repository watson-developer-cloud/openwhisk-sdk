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

const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
const pkg = require('../../package.json');

/**
 * Analyze general tone.
 *
 * Use the general purpose endpoint to analyze the tone of your input content. The service analyzes the content for emotional and language tones. The method always analyzes the tone of the full document; by default, it also analyzes the tone of each individual sentence of the content.   You can submit no more than 128 KB of total input content and no more than 1000 individual sentences in JSON, plain text, or HTML format. The service analyzes the first 1000 sentences for document-level analysis and only the first 100 sentences for sentence-level analysis.   Per the JSON specification, the default character encoding for JSON content is effectively always UTF-8; per the HTTP specification, the default encoding for plain text and HTML is ISO-8859-1 (effectively, the ASCII character set). When specifying a content type of plain text or HTML, include the `charset` parameter to indicate the character encoding of the input text; for example: `Content-Type: text/plain;charset=utf-8`. For `text/html`, the service removes HTML tags and analyzes only the textual content.
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.username] - The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
 * @param {string} [params.password] - The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
 * @param {Object} [params.headers] - Custom HTTP request headers
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} params.version - Release date of the API version in YYYY-MM-DD format.
 * @param {ToneInput} params.tone_input - JSON, plain text, or HTML input that contains the content to be analyzed. For JSON input, provide an object of type `ToneInput`.
 * @param {string} params.content_type - The type of the input: application/json, text/plain, or text/html. A character encoding can be specified by including a `charset` parameter. For example, 'text/plain;charset=utf-8'.
 * @param {boolean} [params.sentences] - Indicates whether the service is to return an analysis of each individual sentence in addition to its analysis of the full document. If `true` (the default), the service returns results for each sentence.
 * @param {string[]} [params.tones] - **`2017-09-21`:** Deprecated. The service continues to accept the parameter for backward-compatibility, but the parameter no longer affects the response.   **`2016-05-19`:** A comma-separated list of tones for which the service is to return its analysis of the input; the indicated tones apply both to the full document and to individual sentences of the document. You can specify one or more of the valid values. Omit the parameter to request results for all three tones.
 * @param {string} [params.content_language] - The language of the input text for the request: English or French. Regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`. The input content must match the specified language. Do not submit content that contains both languages. You can use different languages for **Content-Language** and **Accept-Language**. * **`2017-09-21`:** Accepts `en` or `fr`. * **`2016-05-19`:** Accepts only `en`.
 * @param {string} [params.accept_language] - The desired language of the response. For two-character arguments, regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`. You can use different languages for **Content-Language** and **Accept-Language**.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    const _params = params || {};
    _params.headers['User-Agent'] = `openwhisk-${pkg.version}`;
    let service;
    try {
      service = new ToneAnalyzerV3(_params);
    } catch (err) {
      reject(err.message);
      return;
    }
    service.tone(_params, (err, response) => {
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
