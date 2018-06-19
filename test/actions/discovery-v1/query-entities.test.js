const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let queryEntities = require('../../../packages/discovery-v1/actions/query-entities');

let ow;
let credentials;
let payload = {
  environment_id: 'example_environment_id',
  collection_id: 'example_collection_id',
  feature: 'disambiguate',
  headers: {
    'User-Agent': 'openwhisk'
  }
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    queryEntities = adapt(queryEntities, 'discovery-v1/query-entities', ow);
    credentials = auth.discovery;
  } else {
    credentials = {
      username: 'username',
      password: 'password',
      version: 'version-date'
    };
    beforeEach(() => {
      nock('https://gateway.watsonplatform.net/discovery')
        .post(`/api/v1/environments/${payload.environment_id}
               /collections/${payload.collection_id}/query_entities`)
        .query({
          version: credentials.version
        })
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('query-entities', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return queryEntities
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if environment_id is missing', () => {
    const params = omit(payload, ['environment_id']);
    return queryEntities
      .test(params)
      .then(() => {
        assert.fail('No failure on missing environment_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if collection_id is missing', () => {
    const params = omit(payload, ['collection_id']);
    return queryEntities
      .test(params)
      .then(() => {
        assert.fail('No failure on missing collection_id');
      })
      .catch(() => {
        assert(true);
      });
  });
});
