const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let translate = require('../../../packages/language-translator-v2/actions/translate');

let ow;
let credentials;
let payload = {
  text: 'I love my son.',
  source: 'en',
  target: 'fr',
  headers: {
    'User-Agent': 'openwhisk'
  }
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    translate = adapt(translate, 'language-translator-v2/translate', ow);
    credentials = auth.language_translator;
  } else {
    credentials = {
      username: 'username',
      password: 'password'
    };
    beforeEach(() => {
      nock('https://gateway.watsonplatform.net/language-translator')
        .post('/api/v2/translate')
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('translate', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return translate
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if text is missing', () => {
    const params = omit(payload, ['text']);
    return translate
      .test(params)
      .then(() => {
        assert.fail('No failure on missing text');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if target is missing', () => {
    const params = omit(payload, ['target']);
    return translate
      .test(params)
      .then(() => {
        assert.fail('No failure on missing target');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if source is missing', () => {
    const params = omit(payload, ['source']);
    return translate
      .test(params)
      .then(() => {
        assert.fail('No failure on missing source');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    const params = payload;
    return translate
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
});
