const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const auth = require('../../resources/auth');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let updateWorkspace = require('../../../actions/conversation-v1/update-workspace');

let ow;
let credentials;
let payload = {
  workspace_id: 'example_workspace_id',
  name: 'example_name'
};

before(() => {
  if (process.env.TEST_OPENWHISK) {
    ow = openwhisk(auth.ow);
    updateWorkspace = adapt(
      updateWorkspace,
      'conversation-v1/update-workspace',
      ow
    );
    credentials = auth.conversation;
  } else {
    credentials = {
      username: 'username',
      password: 'password',
      version_date: 'version-date'
    };
    beforeEach(() => {
      nock('https://gateway.watsonplatform.net/conversation')
        .post(`/api/v1/workspaces/${payload.workspace_id}`)
        .query({
          version: credentials.version_date
        })
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('update-workspace', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return updateWorkspace
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if version_date is missing', () => {
    const params = omit(payload, ['version_date']);
    return updateWorkspace
      .test(params)
      .then(() => {
        assert.fail('No failure on missing version_date');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if workspace_id is missing', () => {
    const params = omit(payload, ['workspace_id']);
    return updateWorkspace
      .test(params)
      .then(() => {
        assert.fail('No failure on missing workspace_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    const params = payload;
    return updateWorkspace
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
});
