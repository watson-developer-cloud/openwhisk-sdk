const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let getPronunciation = require('../../../packages/text-to-speech-v1/actions/get-pronunciation');

let ow;
let credentials;
let payload = {
  headers: {
    'User-Agent': 'openwhisk'
  },
  text: 'example_text'
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    getPronunciation = adapt(
      getPronunciation,
      'text-to-speech-v1/get-pronunciation',
      ow
    );
    credentials = auth.text_to_speech;
  } else {
    credentials = {
      username: 'username',
      password: 'password',
      version: 'version-date'
    };
    beforeEach(() => {
      nock('https://stream.watsonplatform.net/text-to-speech')
        .get('/api/v1/pronunciation')
        .query({
          text: payload.text
        })
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('get-pronunciation', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return getPronunciation
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if text is missing', () => {
    const params = omit(payload, ['text']);
    return getPronunciation
      .test(params)
      .then(() => {
        assert.fail('No failure on missing text');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    const params = payload;
    return getPronunciation
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
  it('should succeed with __bx_creds as credential source', () => {
    const params = { __bx_creds: { text_to_speech: payload } };
    return getPronunciation
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
});
