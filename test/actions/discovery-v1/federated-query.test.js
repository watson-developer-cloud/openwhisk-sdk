const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const auth = require('../../resources/auth');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let federatedQuery = require('../../../actions/discovery-v1/federated-query');

let ow;
let credentials;
let payload = {
  environment_id: 'example_environment_id',
  collection_ids: 'example_collection_id'
};

before(() => {
  if (process.env.TEST_OPENWHISK) {
    ow = openwhisk(auth.ow);
    federatedQuery = adapt(federatedQuery, 'discovery-v1/federated-query', ow);
    credentials = auth.discovery;
  } else {
    credentials = {
      username: 'username',
      password: 'password',
      version_date: 'version-date'
    };
    beforeEach(() => {
      nock('https://gateway.watsonplatform.net/discovery')
        .get(`/api/v1/environments/${payload.environment_id}/query`)
        .query({
          version: credentials.version_date,
          collection_ids: payload.collection_ids
        })
        .reply(200, {});
    });
  }
  credentials.collection_ids = credentials.collection_id;
  payload = extend({}, payload, credentials);
});

describe('federated-query', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return federatedQuery
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if environment_id is missing', () => {
    const params = omit(payload, ['environment_id']);
    return federatedQuery
      .test(params)
      .then(() => {
        assert.fail('No failure on missing environment_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if collection_ids is missing', () => {
    const params = omit(payload, ['collection_ids']);
    return federatedQuery
      .test(params)
      .then(() => {
        assert.fail('No failure on missing collection_ids');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    const params = payload;
    return federatedQuery
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
});
