const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let deleteTokenizationDictionary = require('../../../packages/discovery-v1/actions/delete-tokenization-dictionary');

let ow;
let credentials;
let payload = {
  environment_id: 'example_environment_id',
  collection_id: 'example_collection_id'
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    deleteTokenizationDictionary = adapt(
      deleteTokenizationDictionary,
      'discovery-v1/delete-tokenization-dictionary',
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
        .delete(`/api/v1/environments/${payload.environment_id}`
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

describe('delete-tokenization-dictionary', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return deleteTokenizationDictionary
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if environment_id is missing', () => {
    const params = omit(payload, ['environment_id']);
    return deleteTokenizationDictionary
      .test(params)
      .then(() => {
        assert.fail('No failure on missing environment_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if collection_id is missing', () => {
    const params = omit(payload, ['collection_id']);
    return deleteTokenizationDictionary
      .test(params)
      .then(() => {
        assert.fail('No failure on missing collection_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    if (!(process.env.TEST_OPENWHISK && auth)) {
      const params = payload;
      return deleteTokenizationDictionary
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
      return deleteTokenizationDictionary
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
