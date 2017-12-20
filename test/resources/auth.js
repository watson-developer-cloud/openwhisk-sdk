/**
 * Copyright 2017 IBM Corp. All Rights Reserved.
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

module.exports = {
  ow: {
    apihost: 'openwhisk.ng.bluemix.net',
    api_key:
      '39fa9371-d914-453c-90ce-c55dda3dc467:C4ea3LKMw6X0oP1c04PLzrFwi6AlsGYQfqGnYaywVnMBH56N07fKI18HctTwsbNU'
  },
  speech_to_text: {
    url: 'https://stream.watsonplatform.net/speech-to-text/api',
    username: '7c6c42d6-3193-4782-9c85-ee83c94af83a',
    password: '2KALQ8tv1dlF',
    headers: {
      'X-Watson-Learning-Opt-Out': 1,
      'X-Watson-Test': 1
    },
    version: 'v1'
  },
  natural_language_understanding: {
    username: 'b868b44e-667d-44ff-b1fc-cc18432a8930',
    password: 'ODzkVX2jQjSV',
    version_date: '2017-02-27',
    headers: {
      'X-Watson-Learning-Opt-Out': 1,
      'X-Watson-Test': 1
    },
    version: 'v1'
  },
  text_to_speech: {
    url: 'https://stream.watsonplatform.net/text-to-speech/api',
    username: '5713dd6b-21c5-4ca4-96d6-6b348aaaf86b',
    password: 'Xo2Y9QrMn0vJ',
    headers: {
      'X-Watson-Learning-Opt-Out': 1,
      'X-Watson-Test': 1
    },
    version: 'v1',
    customization_id: '7ea258db-1b4a-44bc-b670-808dd9553062',
    word: 'ow_word',
    voice: 'en-US_AllisonVoice'
  },
  visual_recognition: {
    v3: {
      url: 'https://gateway-a.watsonplatform.net/visual-recognition/api',
      api_key: '6d2ff6fd28d756d57f12140f9cef4e9103893a72',
      headers: {
        'X-Watson-Learning-Opt-Out': 1,
        'X-Watson-Test': 1
      },
      version: 'v3',
      version_date: '2017-12-15',
      classifier_id: 'visual_recognition_test_prepop_773020096'
    }
  },
  personality_insights: {
    v3: {
      url: 'https://gateway.watsonplatform.net/personality-insights/api',
      username: '75aa4902-b7d6-4565-8268-8a782293feab',
      password: '47tkg0d7CRnA',
      headers: {
        'X-Watson-Learning-Opt-Out': 1,
        'X-Watson-Test': 1
      },
      version: 'v3',
      version_date: '2016-10-19'
    }
  },
  language_translator: {
    url: 'https://gateway.watsonplatform.net/language-translator/api',
    username: '23ac52b2-23f7-4ec7-94ed-f00ca65fa6a2',
    password: 's2yWduQEt46x',
    headers: {
      'X-Watson-Learning-Opt-Out': 1,
      'X-Watson-Test': 1
    },
    version: 'v2'
  },
  tone_analyzer: {
    url: 'https://gateway.watsonplatform.net/tone-analyzer/api',
    username: '843e9f60-fca7-4df0-acce-8d9e6b322170',
    password: 'oUQWSVAgDu5C',
    headers: {
      'X-Watson-Learning-Opt-Out': 1,
      'X-Watson-Test': 1
    },
    version: 'v3',
    version_date: '2016-06-19'
  },
  natural_language_classifier: {
    url: 'https://gateway.watsonplatform.net/natural-language-classifier/api',
    username: '4d30ddb6-735b-4d20-b5fd-fae0076dc5c9',
    password: '9m4ac0Uh7Ecy',
    classifier_id: '3363cfx256-nlc-57125',
    headers: {
      'X-Watson-Learning-Opt-Out': 1,
      'X-Watson-Test': 1
    },
    version: 'v1'
  },
  conversation: {
    url: 'https://gateway.watsonplatform.net/conversation/api',
    username: '4f25be3c-32af-4bd6-84d8-663724bfbb45',
    password: '6AWr73dkkj8t',
    headers: {
      'X-Watson-Learning-Opt-Out': 1,
      'X-Watson-Test': 1
    },
    version: 'v1',
    version_date: '2017-12-12',
    workspace_id: '195f0ea5-163f-404d-a6a6-3f06231900fc',
    intent: 'pizza_order',
    example: 'I would like a large pepperoni please',
    entity: 'pizza_entity',
    value: 'pizza_value',
    synonym: 'pizza_synonym',
    text: 'rubbish',
    dialog_node: 'pizza_node'
  },
  discovery: {
    username: '18ffb629-c1c4-43f7-9cac-50c6368dfd06',
    password: 'TKOm6WH2ywpM',
    environment_id: '00eabedb-2052-4025-8e2b-09c2c4a76e58',
    configuration_id: '36ef6ac9-e6ac-4687-a44a-c98738590a5e',
    collection_id: 'c8ebf20b-bc40-41c8-9051-d5d82a6ec76d',
    document_id: 'bcdf92ed-f173-4e06-876c-db4ce17eec3a',
    query_id: '5ff9bcc18afd085254c49ab77e085c581fd52db',
    version_date: '2017-12-15',
    headers: {
      'X-Watson-Learning-Opt-Out': 1,
      'X-Watson-Test': 1
    }
  },
  version: 'v1'
};
