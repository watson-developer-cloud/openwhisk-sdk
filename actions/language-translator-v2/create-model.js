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

const LanguageTranslatorV2 = require('watson-developer-cloud/language-translator/v2');

/**
 * Uploads a TMX glossary file on top of a domain to customize a translation model.
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.username] - required unless use_unauthenticated is set.
 * @param {string} [params.password] - required unless use_unauthenticated is set.
 * @param {Object} [params.headers]
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} params.base_model_id - Specifies the domain model that is used as the base for the training. To see current supported domain models, use the GET /v2/models parameter.
 * @param {string} [params.name] - The model name. Valid characters are letters, numbers, -, and _. No spaces.
 * @param {string} [params.forced_glossary] - Must be a base64-encoded string. A TMX file with your customizations. The customizations in the file completely overwrite the domain data translation, including high frequency or high confidence phrase translations. You can upload only one glossary with a file size less than 10 MB per call.
 * @param {string} [params.parallel_corpus] - Must be a base64-encoded string. A TMX file that contains entries that are treated as a parallel corpus instead of a glossary.
 * @param {string} [params.monolingual_corpus] - Must be a base64-encoded string. A UTF-8 encoded plain text file that is used to customize the target language model.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    const fileParams = [
      'forced_glossary',
      'parallel_corpus',
      'monolingual_corpus'
    ];
    fileParams.forEach((fileParam) => {
      try {
        params[fileParam] = Buffer.from(params[fileParam], 'base64');
      } catch (err) {
        reject(err.message);
        return;
      }
    });
    let service;
    try {
      service = new LanguageTranslatorV2(params);
    } catch (err) {
      reject(err.message);
      return;
    }
    service.createModel(params, (err, response) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(response);
      }
    });
  });
}
module.exports.main = main;
