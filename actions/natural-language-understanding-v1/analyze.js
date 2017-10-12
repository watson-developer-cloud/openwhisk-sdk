/**
 * Copyright 2017 IBM All Rights Reserved.
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

/**
 * Analyze text, HTML, or a public webpage.
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.username] - required unless use_unauthenticated is set.
 * @param {string} [params.password] - required unless use_unauthenticated is set.
 * @param {Object} [params.headers]
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} params.version_date - Release date of the API version in YYYY-MM-DD format.
 * @param {Features} params.features - Specific features to analyze the document for.
 * @param {string} [params.text] - The plain text to analyze.
 * @param {string} [params.html] - The HTML file to analyze.
 * @param {string} [params.url] - The web page to analyze.
 * @param {boolean} [params.clean] - Remove website elements, such as links, ads, etc.
 * @param {string} [params.xpath] - XPath query for targeting nodes in HTML.
 * @param {boolean} [params.fallback_to_raw] - Whether to use raw HTML content if text cleaning fails.
 * @param {boolean} [params.return_analyzed_text] - Whether or not to return the analyzed text.
 * @param {string} [params.language] - ISO 639-1 code indicating the language to use in the analysis.
 * @param {number} [params.limit_text_characters] - Sets the maximum number of characters that are processed by the service.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve,reject) => {
    let service;
    try {
      service = new NaturalLanguageUnderstandingV1(params);
    } catch(err) {
      reject(err.message);
    }
    service.analyze(params, (err,response) => {
      if(err) {
        reject(err.message);
      } else {
        resolve(response);
      }
    });
  });
}
module.exports.main = main;
