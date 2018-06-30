const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let updateConfiguration = require('../../../packages/discovery-v1/actions/update-configuration');

let ow;
let credentials;
let payload = {
  environment_id: 'example_environment_id',
  configuration_id: 'example_collection_id',
  name: 'example_name',
  headers: {
    'User-Agent': 'openwhisk'
  }
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    updateConfiguration = adapt(
      updateConfiguration,
      'discovery-v1/update-configuration',
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
        .post(`/api/v1/environments/${payload.environment_id}
               /configurations/${payload.collection_id}`)
        .query({
          version: credentials.version
        })
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('update-configuration', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return updateConfiguration
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if environment_id is missing', () => {
    const params = omit(payload, ['environment_id']);
    return updateConfiguration
      .test(params)
      .then(() => {
        assert.fail('No failure on missing environment_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if configuration_id is missing', () => {
    const params = omit(payload, ['configuration_id']);
    return updateConfiguration
      .test(params)
      .then(() => {
        assert.fail('No failure on missing configuration_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should succeed with __bx_creds as credential source', () => {
    if (process.env.TEST_OPENWHISK && auth) {
      const params = { __bx_creds: { discovery: payload } };
      return updateConfiguration
        .test(params)
        .then(() => {
          assert.ok(true);
        })
        .catch((err) => {
          console.log("ERROR:", err)
          assert.fail('Failure on valid payload');
        });
    }
  });
});
