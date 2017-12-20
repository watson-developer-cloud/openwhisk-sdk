const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const auth = require('../../resources/auth');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let getValue = require('../../../actions/conversation-v1/get-value');

let ow;
let credentials;
let payload = {
  workspace_id: 'example_workspace',
  entity: 'example_entity',
  value: 'example_value'
};

before(() => {
  if (process.env.TEST_OPENWHISK) {
    ow = openwhisk(auth.ow);
    getValue = adapt(getValue, 'conversation-v1/get-value', ow);
    credentials = auth.conversation;
  } else {
    credentials = {
      username: 'username',
      password: 'password',
      version_date: 'version-date'
    };
    beforeEach(() => {
      nock('https://gateway.watsonplatform.net/conversation')
        .get(`/api/v1/workspaces/${payload.workspace_id}`
             + `/entities/${payload.entity}`
             + `/values/${payload.value}`)
        .query({
          version: credentials.version_date
        })
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('get-value', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return getValue
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if version_date is missing', () => {
    const params = omit(payload, ['version_date']);
    return getValue
      .test(params)
      .then(() => {
        assert.fail('No failure on missing version_date');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if workspace_id is missing', () => {
    const params = omit(payload, ['workspace_id']);
    return getValue
      .test(params)
      .then(() => {
        assert.fail('No failure on missing workspace_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if entity is missing', () => {
    const params = omit(payload, ['entity']);
    return getValue
      .test(params)
      .then(() => {
        assert.fail('No failure on missing entity');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if value is missing', () => {
    const params = omit(payload, ['value']);
    return getValue
      .test(params)
      .then(() => {
        assert.fail('No failure on missing value');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    const params = payload;
    return getValue
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
});
