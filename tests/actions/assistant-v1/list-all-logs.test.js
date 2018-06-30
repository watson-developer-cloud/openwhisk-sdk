const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let listAllLogs = require('../../../packages/assistant-v1/actions/list-all-logs');

let ow;
let credentials;
let payload = {
  filter: 'language::en,request.context.metadata.deployment::deployment_1',
  headers: {
    'User-Agent': 'openwhisk'
  }
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    listAllLogs = adapt(listAllLogs, 'assistant-v1/list-all-logs', ow);
    credentials = auth.conversation;
  } else {
    credentials = {
      username: 'username',
      password: 'password',
      version: 'version-date'
    };
    beforeEach(() => {
      nock('https://gateway.watsonplatform.net/assistant')
        .get('/api/v1/logs')
        .query({
          version: credentials.version,
          filter: payload.filter
        })
        .reply(200, {});
    });
  }
  payload = extend({}, credentials, payload);
});

describe('list-all-logs', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return listAllLogs
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if version is missing', () => {
    const params = omit(payload, ['version']);
    return listAllLogs
      .test(params)
      .then(() => {
        assert.fail('No failure on missing version');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if filter is missing', () => {
    const params = omit(payload, ['filter']);
    return listAllLogs
      .test(params)
      .then(() => {
        assert.fail('No failure on missing filter');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    const params = payload;
    return listAllLogs
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(err => negativeHandler(err));
  });
  it('should succeed with __bx_creds as credential source', () => {
    const params = { __bx_creds: { conversation: payload } };
    return listAllLogs
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(err => negativeHandler(err));
  });
});
