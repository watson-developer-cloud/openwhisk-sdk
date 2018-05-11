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

const LanguageTranslatorV2 = require('watson-developer-cloud/language-translator/v2');
const pkg = require('../../package.json');

/**
 * Create model.
 *
 * Uploads a TMX glossary file on top of a domain to customize a translation model.  Depending on the size of the file, training can range from minutes for a glossary to several hours for a large parallel corpus. Glossary files must be less than 10 MB. The cumulative file size of all uploaded glossary and corpus files is limited to 250 MB.
 *
 * @param {Object} params - The parameters to send to the service.

 * @param {string} [params.password] - The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
 * @param {Object} [params.headers] - Custom HTTP request headers
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} params.base_model_id - The model ID of the model to use as the base for customization. To see available models, use the `List models` method.
 * @param {string} [params.name] - An optional model name that you can use to identify the model. Valid characters are letters, numbers, dashes, underscores, spaces and apostrophes. The maximum length is 32 characters.
 * @param {string} [params.forced_glossary] - Must be a base64-encoded string. A TMX file with your customizations. The customizations in the file completely overwrite the domain translaton data, including high frequency or high confidence phrase translations. You can upload only one glossary with a file size less than 10 MB per call.
 * @param {string} [params.parallel_corpus] - Must be a base64-encoded string. A TMX file that contains entries that are treated as a parallel corpus instead of a glossary.
 * @param {string} [params.monolingual_corpus] - Must be a base64-encoded string. A UTF-8 encoded plain text file that is used to customize the target language model.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    const _params = params || {};
    _params.headers['User-Agent'] = `openwhisk-${pkg.version}`;
    const fileParams = ['forced_glossary', 'parallel_corpus', 'monolingual_corpus'];
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
      service = new LanguageTranslatorV2(_params);
    } catch (err) {
      reject(err.message);
      return;
    }
    service.createModel(_params, (err, response) => {
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
