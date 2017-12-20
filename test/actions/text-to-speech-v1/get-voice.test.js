const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const auth = require('../../resources/auth');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let getVoice = require('../../../actions/text-to-speech-v1/get-voice');

let ow;
let credentials;
let payload = {
  voice: 'example_voice'
};

before(() => {
  if (process.env.TEST_OPENWHISK) {
    ow = openwhisk(auth.ow);
    getVoice = adapt(getVoice, 'text-to-speech-v1/get-voice', ow);
    credentials = auth.text_to_speech;
  } else {
    credentials = {
      username: 'username',
      password: 'password',
      version_date: 'version-date'
    };
    beforeEach(() => {
      nock('https://stream.watsonplatform.net/text-to-speech')
        .get(`/api/v1/voices/${payload.voice}`)
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('get-voice', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return getVoice
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if voice is missing', () => {
    const params = omit(payload, ['voice']);
    return getVoice
      .test(params)
      .then(() => {
        assert.fail('No failure on missing voice');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    const params = payload;
    return getVoice
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
});
