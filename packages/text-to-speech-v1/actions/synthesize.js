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
 * Synthesize audio.
 *
 * Synthesizes text to spoken audio, returning the synthesized audio stream as an array of bytes. You can pass a maximum
 * of 5 KB of text.  Use the `Accept` header or the `accept` query parameter to specify the requested format (MIME type)
 * of the response audio. By default, the service uses `audio/ogg;codecs=opus`.
 *
 * If a request includes invalid query parameters, the service returns a `Warnings` response header that provides
 * messages about the invalid parameters. The warning includes a descriptive message and a list of invalid argument
 * strings. For example, a message such as `\"Unknown arguments:\"` or `\"Unknown url query arguments:\"` followed by a
 * list of the form `\"invalid_arg_1, invalid_arg_2.\"` The request succeeds despite the warnings.
 *
 * **See also:** [Synthesizing text to
 * audio](https://console.bluemix.net/docs/services/text-to-speech/http.html#synthesize).
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
 * @param {string} params.text - The text to synthesize.
 * @param {string} [params.accept] - The requested audio format (MIME type) of the audio. You can use the `Accept`
 * header or the `accept` query parameter to specify the audio format. (For the `audio/l16` format, you can optionally
 * specify `endianness=big-endian` or `endianness=little-endian`; the default is little endian.) For detailed
 * information about the supported audio formats and sampling rates, see [Specifying an audio
 * format](https://console.bluemix.net/docs/services/text-to-speech/http.html#format).
 * @param {string} [params.voice] - The voice to use for synthesis.
 * @param {string} [params.customization_id] - The customization ID (GUID) of a custom voice model to use for the
 * synthesis. If a custom voice model is specified, it is guaranteed to work only if it matches the language of the
 * indicated voice. You must make the request with service credentials created for the instance of the service that owns
 * the custom model. Omit the parameter to use the specified voice with no customization.
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
      service.synthesize(_params, (err, response) => {
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
