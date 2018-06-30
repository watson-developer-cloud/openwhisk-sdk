const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let getTrainingExample = require('../../../packages/discovery-v1/actions/get-training-example');

let ow;
let credentials;
let payload = {
  environment_id: 'example_environment_id',
  collection_id: 'example_collection_id',
  query_id: 'example_query_id',
  example_id: 'example_example_id',
  headers: {
    'User-Agent': 'openwhisk'
  }
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    getTrainingExample = adapt(
      getTrainingExample,
      'discovery-v1/get-training-example',
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
        .get(`/api/v1/environments/${payload.environment_id}
              /collections/${payload.collection_id}
              /training_data/${payload.query_id}
              /examples/${payload.example_id}`)
        .query({
          version: credentials.version
        })
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('get-training-example', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return getTrainingExample
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if environment_id is missing', () => {
    const params = omit(payload, ['environment_id']);
    return getTrainingExample
      .test(params)
      .then(() => {
        assert.fail('No failure on missing environment_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if collection_id is missing', () => {
    const params = omit(payload, ['collection_id']);
    return getTrainingExample
      .test(params)
      .then(() => {
        assert.fail('No failure on missing collection_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if query_id is missing', () => {
    const params = omit(payload, ['query_id']);
    return getTrainingExample
      .test(params)
      .then(() => {
        assert.fail('No failure on missing query_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if example_id is missing', () => {
    const params = omit(payload, ['example_id']);
    return getTrainingExample
      .test(params)
      .then(() => {
        assert.fail('No failure on missing example_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should succeed with __bx_creds as credential source', () => {
    if (process.env.TEST_OPENWHISK && auth) {
      const params = { __bx_creds: { discovery: payload } };
      return getTrainingExample
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
