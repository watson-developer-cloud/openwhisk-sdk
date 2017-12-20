const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const auth = require('../../resources/auth');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let synthesize = require('../../../actions/text-to-speech-v1/synthesize');

let ow;
let credentials;
let payload = {
  text: 'example_text'
};

before(() => {
  if (process.env.TEST_OPENWHISK) {
    ow = openwhisk(auth.ow);
    synthesize = adapt(synthesize, 'text-to-speech-v1/synthesize', ow);
    credentials = auth.text_to_speech;
  } else {
    credentials = {
      username: 'username',
      password: 'password',
      version_date: 'version-date'
    };
    beforeEach(() => {
      nock('https://stream.watsonplatform.net/text-to-speech')
        .post('/api/v1/synthesize')
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('synthesize', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return synthesize
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if text is missing', () => {
    const params = omit(payload, ['text']);
    return synthesize
      .test(params)
      .then(() => {
        assert.fail('No failure on missing text');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    const params = payload;
    return synthesize
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
});
