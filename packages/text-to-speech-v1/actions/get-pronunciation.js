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

const TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
const extend = require('extend');
const vcap = require('vcap_services');

/**
 * Get pronunciation.
 *
 * Gets the phonetic pronunciation for the specified word. You can request the pronunciation for a specific format. You
 * can also request the pronunciation for a specific voice to see the default translation for the language of that voice
 * or for a specific custom voice model to see the translation for that voice model.
 *
 * **Note:** This method is currently a beta release.
 *
 * **See also:** [Querying a word from a
 * language](https://console.bluemix.net/docs/services/text-to-speech/custom-entries.html#cuWordsQueryLanguage).
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
 * @param {string} params.text - The word for which the pronunciation is requested.
 * @param {string} [params.voice] - A voice that specifies the language in which the pronunciation is to be returned.
 * All voices for the same language (for example, `en-US`) return the same translation.
 * @param {string} [params.format] - The phoneme format in which to return the pronunciation. Omit the parameter to
 * obtain the pronunciation in the default format.
 * @param {string} [params.customization_id] - The customization ID (GUID) of a custom voice model for which the
 * pronunciation is to be returned. The language of a specified custom model must match the language of the specified
 * voice. If the word is not defined in the specified custom model, the service returns the default translation for the
 * custom model's language. You must make the request with service credentials created for the instance of the service
 * that owns the custom model. Omit the parameter to see the translation for the specified voice with no customization.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    const _params = vcap.getCredentialsFromServiceBind(
      params,
      'text-to-speech',
      'text_to_speech'
    );
    _params.headers = extend(
      {},
      _params.headers,
      { 'User-Agent': 'openwhisk' }
    );
    let service;
    try {
      service = new TextToSpeechV1(_params);
      service.getPronunciation(_params, (err, response) => {
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
