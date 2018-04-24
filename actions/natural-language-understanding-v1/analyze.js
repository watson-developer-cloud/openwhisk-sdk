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
const pkg = require('../../package.json');

/**
 * Analyze text, HTML, or a public webpage.
 *
 * Analyzes text, HTML, or a public webpage with one or more text analysis features.  ### Concepts Identify general concepts that are referenced or alluded to in your content. Concepts that are detected typically have an associated link to a DBpedia resource.  ### Emotion Detect anger, disgust, fear, joy, or sadness that is conveyed by your content. Emotion information can be returned for detected entities, keywords, or user-specified target phrases found in the text.  ### Entities Detect important people, places, geopolitical entities and other types of entities in your content. Entity detection recognizes consecutive coreferences of each entity. For example, analysis of the following text would count \"Barack Obama\" and \"He\" as the same entity:  \"Barack Obama was the 44th President of the United States. He took office in January 2009.\"  ### Keywords Determine the most important keywords in your content. Keyword phrases are organized by relevance in the results.  ### Metadata Get author information, publication date, and the title of your text/HTML content.  ### Relations Recognize when two entities are related, and identify the type of relation.  For example, you can identify an \"awardedTo\" relation between an award and its recipient.  ### Semantic Roles Parse sentences into subject-action-object form, and identify entities and keywords that are subjects or objects of an action.  ### Sentiment Determine whether your content conveys postive or negative sentiment. Sentiment information can be returned for detected entities, keywords, or user-specified target phrases found in the text.   ### Categories Categorize your content into a hierarchical 5-level taxonomy. For example, \"Leonardo DiCaprio won an Oscar\" returns \"/art and entertainment/movies and tv/movies\" as the most confident classification.
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.username] - The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
 * @param {string} [params.password] - The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
 * @param {Object} [params.headers] - Custom HTTP request headers
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} params.version - Release date of the API version in YYYY-MM-DD format.
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
  return new Promise((resolve, reject) => {
    const _params = params || {};
    _params.headers['User-Agent'] = `openwhisk-${pkg.version}`;
    let service;
    try {
      service = new NaturalLanguageUnderstandingV1(_params);
    } catch (err) {
      reject(err.message);
      return;
    }
    service.analyze(_params, (err, response) => {
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
