const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let listIdentifiableLanguages = require('../../../actions/language-translator-v2/list-identifiable-languages');

let ow;
let credentials;
let payload = {};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    listIdentifiableLanguages = adapt(
      listIdentifiableLanguages,
      'language-translator-v2/list-identifiable-languages',
      ow
    );
    credentials = auth.language_translator;
  } else {
    credentials = {
      username: 'username',
      password: 'password'
    };
    beforeEach(() => {
      nock('https://gateway.watsonplatform.net/language-translator')
        .get('/api/v2/identifiable_languages')
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('list-identifiable-languages', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return listIdentifiableLanguages
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    const params = payload;
    return listIdentifiableLanguages
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
});
