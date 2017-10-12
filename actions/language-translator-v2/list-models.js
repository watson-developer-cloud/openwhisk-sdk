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
 * Lists available standard and custom models by source or target language.
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.username] - required unless use_unauthenticated is set.
 * @param {string} [params.password] - required unless use_unauthenticated is set.
 * @param {Object} [params.headers]
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} [params.source] - Filter models by source language.
 * @param {string} [params.target] - Filter models by target language.
 * @param {boolean} [params.default_models] - Valid values are leaving it unset,
 * `true`, and `false`. When `true`, it filters models to return the default_models
 * model or models. When `false`, it returns the non-default_models model or models.
 * If not set, it returns all models, default_models and non-default_models.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    let service;
    try {
      service = new LanguageTranslatorV2(params);
    } catch (err) {
      reject(err.message);
    }
    service.listModels(params, (err, response) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(response);
      }
    });
  });
}
module.exports.main = main;
