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
 * Train a custom acoustic model.
 *
 * Initiates the training of a custom acoustic model with new or changed audio resources. After adding or deleting audio
 * resources for a custom acoustic model, use this method to begin the actual training of the model on the latest audio
 * data. The custom acoustic model does not reflect its changed data until you train it. You must use credentials for
 * the instance of the service that owns a model to train it.
 *
 * The training method is asynchronous. It can take on the order of minutes or hours to complete depending on the total
 * amount of audio data on which the custom acoustic model is being trained and the current load on the service.
 * Typically, training a custom acoustic model takes approximately two to four times the length of its audio data. The
 * range of time depends on the model being trained and the nature of the audio, such as whether the audio is clean or
 * noisy. The method returns an HTTP 200 response code to indicate that the training process has begun.
 *
 * You can monitor the status of the training by using the **Get a custom acoustic model** method to poll the model's
 * status. Use a loop to check the status once a minute. The method returns an `AcousticModel` object that includes
 * `status` and `progress` fields. A status of `available` indicates that the custom model is trained and ready to use.
 * The service cannot accept subsequent training requests, or requests to add new audio resources, until the existing
 * request completes.
 *
 * You can use the optional `custom_language_model_id` parameter to specify the GUID of a separately created custom
 * language model that is to be used during training. Specify a custom language model if you have verbatim
 * transcriptions of the audio files that you have added to the custom model or you have either corpora (text files) or
 * a list of words that are relevant to the contents of the audio files. For more information, see the **Create a custom
 * language model** method.
 *
 * Training can fail to start for the following reasons:
 * * The service is currently handling another request for the custom model, such as another training request or a
 * request to add audio resources to the model.
 * * The custom model contains less than 10 minutes or more than 50 hours of audio data.
 * * One or more of the custom model's audio resources is invalid.
 *
 * **See also:** [Train the custom acoustic
 * model](https://console.bluemix.net/docs/services/speech-to-text/acoustic-create.html#trainModel).
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
 * @param {string} params.customization_id - The customization ID (GUID) of the custom acoustic model that is to be used
 * for the request. You must make the request with service credentials created for the instance of the service that owns
 * the custom model.
 * @param {string} [params.custom_language_model_id] - The customization ID (GUID) of a custom language model that is to
 * be used during training of the custom acoustic model. Specify a custom language model that has been trained with
 * verbatim transcriptions of the audio resources or that contains words that are relevant to the contents of the audio
 * resources.
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
      service.trainAcousticModel(_params, (err, response) => {
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
