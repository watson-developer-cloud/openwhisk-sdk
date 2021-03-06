const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const { auth, describe } = require('../../resources/auth-helper');
const { negativeHandler } = require('../../resources/test-helper');
const getMetricsEventRate = require('../../../packages/discovery-v1/actions/get-metrics-event-rate');

let payload = {
};
const credentials = {
  username: 'username',
  password: 'password',
  version: 'version-date'
};

before(() => {
  nock('https://gateway.watsonplatform.net/discovery')
    .get('/api/v1/metrics/event_rate')
    .query({
      version: credentials.version
    })
    .reply(200, {});
  payload = extend({}, payload, credentials);
});

describe('get-metrics-event-rate', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return getMetricsEventRate
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });

  it('should succeed with __bx_creds as credential source', () => {
    if (!(process.env.TEST_OPENWHISK && auth)) {
      const params = { __bx_creds: { discovery: payload } };
      return getMetricsEventRate
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
