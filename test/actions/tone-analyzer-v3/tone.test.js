const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let tone = require('../../../packages/tone-analyzer-v3/actions/tone');

let ow;
let credentials;
let payload = {
  tone_input: 'I love my son.',
  content_type: 'text/plain',
  headers: {
    'User-Agent': 'openwhisk'
  }
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    tone = adapt(tone, 'tone-analyzer-v3/tone', ow);
    credentials = auth.tone_analyzer;
  } else {
    credentials = {
      username: 'username',
      password: 'password',
      version: 'version-date'
    };
    beforeEach(() => {
      nock('https://gateway.watsonplatform.net/tone-analyzer')
        .post('/api/v3/tone')
        .query({
          version: credentials.version
        })
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('tone', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return tone
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if version is missing', () => {
    const params = omit(payload, ['version']);
    return tone
      .test(params)
      .then(() => {
        assert.fail('No failure on missing version');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if tone_input is missing', () => {
    const params = omit(payload, ['tone_input']);
    return tone
      .test(params)
      .then(() => {
        assert.fail('No failure on missing tone_input');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if content_type is missing', () => {
    const params = omit(payload, ['content_type']);
    return tone
      .test(params)
      .then(() => {
        assert.fail('No failure on missing content_type');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    const params = payload;
    return tone
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
});
