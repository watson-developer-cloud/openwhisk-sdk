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

const SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
const extend = require('extend');
const vcap = require('vcap_services');

/**
 * Register a callback.
 *
 * Registers a callback URL with the service for use with subsequent asynchronous recognition requests. The service
 * attempts to register, or white-list, the callback URL if it is not already registered by sending a `GET` request to
 * the callback URL. The service passes a random alphanumeric challenge string via the `challenge_string` parameter of
 * the request. The request includes an `Accept` header that specifies `text/plain` as the required response type.
 *
 * To be registered successfully, the callback URL must respond to the `GET` request from the service. The response must
 * send status code 200 and must include the challenge string in its body. Set the `Content-Type` response header to
 * `text/plain`. Upon receiving this response, the service responds to the original registration request with response
 * code 201.
 *
 * The service sends only a single `GET` request to the callback URL. If the service does not receive a reply with a
 * response code of 200 and a body that echoes the challenge string sent by the service within five seconds, it does not
 * white-list the URL; it instead sends status code 400 in response to the **Register a callback** request. If the
 * requested callback URL is already white-listed, the service responds to the initial registration request with
 * response code 200.
 *
 * If you specify a user secret with the request, the service uses it as a key to calculate an HMAC-SHA1 signature of
 * the challenge string in its response to the `POST` request. It sends this signature in the `X-Callback-Signature`
 * header of its `GET` request to the URL during registration. It also uses the secret to calculate a signature over the
 * payload of every callback notification that uses the URL. The signature provides authentication and data integrity
 * for HTTP communications.
 *
 * After you successfully register a callback URL, you can use it with an indefinite number of recognition requests. You
 * can register a maximum of 20 callback URLS in a one-hour span of time.
 *
 * **See also:** [Registering a callback
 * URL](https://console.bluemix.net/docs/services/speech-to-text/async.html#register).
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
 * @param {string} params.callback_url - An HTTP or HTTPS URL to which callback notifications are to be sent. To be
 * white-listed, the URL must successfully echo the challenge string during URL verification. During verification, the
 * client can also check the signature that the service sends in the `X-Callback-Signature` header to verify the origin
 * of the request.
 * @param {string} [params.user_secret] - A user-specified string that the service uses to generate the HMAC-SHA1
 * signature that it sends via the `X-Callback-Signature` header. The service includes the header during URL
 * verification and with every notification sent to the callback URL. It calculates the signature over the payload of
 * the notification. If you omit the parameter, the service does not send the header.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    const _params = vcap.getCredentialsFromServiceBind(
      params,
      'speech-to-text',
      'speech_to_text'
    );
    _params.headers = extend(
      {},
      _params.headers,
      { 'User-Agent': 'openwhisk' }
    );
    let service;
    try {
      service = new SpeechToTextV1(_params);
      service.registerCallback(_params, (err, response) => {
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
