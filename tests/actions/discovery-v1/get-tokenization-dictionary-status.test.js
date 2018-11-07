const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let getTokenizationDictionaryStatus = require('../../../packages/discovery-v1/actions/get-tokenization-dictionary-status');

let ow;
let credentials;
let payload = {
  environment_id: 'example_environment_id',
  collection_id: 'example_collection_id'
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    getTokenizationDictionaryStatus = adapt(
      getTokenizationDictionaryStatus,
      'discovery-v1/get-tokenization-dictionary-status',
      ow
    );
    credentials = auth.discovery;
  } else {
    credentials = {
      username: 'username',
      password: 'password',
      version: 'version-date'
    };
    beforeEach(() => {
      nock('https://gateway.watsonplatform.net/discovery')
        .get(`/api/v1/environments/${payload.environment_id}`
              + `/collections/${payload.collection_id}`
              + '/word_lists/tokenization_dictionary')
        .query({
          version: credentials.version
        })
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('get-tokenization-dictionary-status', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return getTokenizationDictionaryStatus
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if environment_id is missing', () => {
    const params = omit(payload, ['environment_id']);
    return getTokenizationDictionaryStatus
      .test(params)
      .then(() => {
        assert.fail('No failure on missing environment_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if collection_id is missing', () => {
    const params = omit(payload, ['collection_id']);
    return getTokenizationDictionaryStatus
      .test(params)
      .then(() => {
        assert.fail('No failure on missing collection_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    if (!(process.env.TEST_OPENWHISK && auth)) {
      const params = payload;
      return getTokenizationDictionaryStatus
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
      const params = { __bx_creds: { discovery: payload } };
      return getTokenizationDictionaryStatus
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
