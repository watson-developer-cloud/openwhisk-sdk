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

/**
 * Add a custom word.
 *
 * Adds a single word and its translation to the specified custom voice model. Adding a new translation for a word that already exists in a custom model overwrites the word's existing translation. A custom model can contain no more than 20,000 entries. You must use credentials for the instance of the service that owns a model to add a word to it.   **Note:** This method is currently a beta release.
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
 * @param {string} params.customization_id - The customization ID (GUID) of the custom voice model. You must make the request with service credentials created for the instance of the service that owns the custom model.
 * @param {string} params.word - The word that is to be added or updated for the custom voice model.
 * @param {string} params.translation - The phonetic or sounds-like translation for the word. A phonetic translation is based on the SSML format for representing the phonetic string of a word either as an IPA translation or as an IBM SPR translation. A sounds-like is one or more words that, when combined, sound like the word.
 * @param {string} [params.part_of_speech] - **Japanese only.** The part of speech for the word. The service uses the value to produce the correct intonation for the word. You can create only a single entry, with or without a single part of speech, for any word; you cannot create multiple entries with different parts of speech for the same word. For more information, see [Working with Japanese entries](https://console.bluemix.net/docs/services/text-to-speech/custom-rules.html#jaNotes).
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    const _params = getParams(params, 'text_to_speech');
    _params.headers = extend({}, _params.headers, { 'User-Agent': 'openwhisk' });
    let service;
    try {
      service = new TextToSpeechV1(_params);
      service.addWord(_params, (err, response) => {
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
* @param {string} service - name of service in bluemix used to retrieve credentials
*/
function getParams(theParams, service) {
  if (Object.keys(theParams).length === 0) {
    return theParams;
  }
  const bxCreds = theParams.__bx_creds ? theParams.__bx_creds[service] : {};
  const _params = Object.assign({}, bxCreds, theParams);
  delete _params.__bx_creds;
  return _params;
}

global.main = main;
module.exports.test = main;
