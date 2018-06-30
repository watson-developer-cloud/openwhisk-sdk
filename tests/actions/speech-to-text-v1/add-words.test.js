const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let addWords = require('../../../packages/speech-to-text-v1/actions/add-words');

let ow;
let credentials;
let payload = {
  headers: {
    'User-Agent': 'openwhisk'
  },

  customization_id: 'sample',
  content_type: 'application/json',
  words: [
    {
      word: 'hhonors',
      sounds_like: ['hilton honors', 'h honors'],
      display_as: 'HHonors'
    },
    {
      word: 'ieee',
      sounds_like: ['i triple e'],
      display_as: 'IEEE'
    }
  ]
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    addWords = adapt(addWords, 'speech-to-text-v1/add-words', ow);
    credentials = auth.text_to_speech;
  } else {
    credentials = {
      username: 'username',
      password: 'password',
      version: 'version-date'
    };
    beforeEach(() => {
      nock('https://stream.watsonplatform.net/speech-to-text')
        .post(`/api/v1/customizations/${payload.customization_id}/words`)
        .reply(200, {});
    });
  }
  payload = extend({}, payload, omit(credentials, ['word']));
});

describe('add-words', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return addWords
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if customization_id is missing', () => {
    const params = omit(payload, ['customization_id']);
    return addWords
      .test(params)
      .then(() => {
        assert.fail('No failure on missing customization_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if words is missing', () => {
    const params = omit(payload, ['words']);
    return addWords
      .test(params)
      .then(() => {
        assert.fail('No failure on missing words');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    if (!(process.env.TEST_OPENWHISK && auth)) {
      const params = payload;
      params.word = params.words[0].word;
      return addWords
        .test(params)
        .then(() => {
          assert.ok(true);
        })
        .catch(() => {
          assert.fail('Failure on valid payload');
        });
    }
  });
  it('should succeed with __bx_creds as credential source', () => {
    if (!(process.env.TEST_OPENWHISK && auth)) {
      const params = { __bx_creds: { speech_to_text: payload } };
      console.log("PARAMS", params);
      params.word = params.__bx_creds.speech_to_text.words[0].word;
      return addWords
        .test(params)
        .then(() => {
          assert.ok(true);
        })
        .catch(() => {
          assert.fail('Failure on valid payload');
        });
    }
  });
});
