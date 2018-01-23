const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let getWord = require('../../../actions/text-to-speech-v1/get-word');

let ow;
let credentials;
let payload = {
  headers: {
    'User-Agent': 'openwhisk'
  },
  word: 'example_word',
  customization_id: 'example_customization_id'
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    getWord = adapt(getWord, 'text-to-speech-v1/get-word', ow);
    credentials = auth.text_to_speech;
  } else {
    credentials = {
      username: 'username',
      password: 'password',
      version_date: 'version-date'
    };
    beforeEach(() => {
      nock('https://stream.watsonplatform.net/text-to-speech')
        .get(`/api/v1/customizations/${payload.customization_id}`
             + `/words/${payload.word}`)
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('get-word', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return getWord
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if customization_id is missing', () => {
    const params = omit(payload, ['customization_id']);
    return getWord
      .test(params)
      .then(() => {
        assert.fail('No failure on missing customization_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if word is missing', () => {
    const params = omit(payload, ['word']);
    return getWord
      .test(params)
      .then(() => {
        assert.fail('No failure on missing word');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    const params = payload;
    return getWord
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
});
