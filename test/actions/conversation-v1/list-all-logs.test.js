const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let listAllLogs = require('../../../actions/conversation-v1/list-all-logs');

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
    listAllLogs = adapt(listAllLogs, 'conversation-v1/list-all-logs', ow);
    credentials = auth.conversation;
  } else {
    credentials = {
      username: 'username',
      password: 'password',
      version_date: 'version-date'
    };
    beforeEach(() => {
      nock('https://gateway.watsonplatform.net/conversation')
        .get('/api/v1/logs')
        .query({
          version: credentials.version_date,
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
  it('should fail if version_date is missing', () => {
    const params = omit(payload, ['version_date']);
    return listAllLogs
      .test(params)
      .then(() => {
        assert.fail('No failure on missing version_date');
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
});
