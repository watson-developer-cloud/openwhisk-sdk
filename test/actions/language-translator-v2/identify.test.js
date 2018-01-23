const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let identify = require('../../../actions/language-translator-v2/identify');

let ow;
let credentials;
let payload = {
  text: 'I love my son.',
  headers: {
    'User-Agent': 'openwhisk'
  }
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    identify = adapt(identify, 'language-translator-v2/identify', ow);
    credentials = auth.language_translator;
  } else {
    credentials = {
      username: 'username',
      password: 'password'
    };
    beforeEach(() => {
      nock('https://gateway.watsonplatform.net/language-translator')
        .post('/api/v2/identify')
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('identify', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return identify
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if text is missing', () => {
    const params = omit(payload, ['text']);
    return identify
      .test(params)
      .then(() => {
        assert.fail('No failure on missing text');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    const params = payload;
    return identify
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
});
