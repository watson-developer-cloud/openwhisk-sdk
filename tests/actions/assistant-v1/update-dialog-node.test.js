const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let updateDialogNode = require('../../../packages/assistant-v1/actions/update-dialog-node');

let ow;
let credentials;
let payload = {
  dialog_node: 'example_node',
  new_dialog_node: 'example_node',
  workspace_id: 'example_workspace',
  headers: {
    'User-Agent': 'openwhisk'
  }
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    updateDialogNode = adapt(
      updateDialogNode,
      'assistant-v1/update-dialog-node',
      ow
    );
    credentials = auth.conversation;
  } else {
    credentials = {
      username: 'username',
      password: 'password',
      version: 'version-date'
    };
    beforeEach(() => {
      nock('https://gateway.watsonplatform.net/assistant')
        .post(`/api/v1/workspaces/${payload.workspace_id}`
              + `/dialog_nodes/${payload.dialog_node}`)
        .query({
          version: credentials.version
        })
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('update-dialog-node', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return updateDialogNode
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if version is missing', () => {
    const params = omit(payload, ['version']);
    return updateDialogNode
      .test(params)
      .then(() => {
        assert.fail('No failure on missing version');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if workspace_id is missing', () => {
    const params = omit(payload, ['workspace_id']);
    return updateDialogNode
      .test(params)
      .then(() => {
        assert.fail('No failure on missing workspace_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if dialog_node is missing', () => {
    const params = omit(payload, ['dialog_node']);
    return updateDialogNode
      .test(params)
      .then(() => {
        assert.fail('No failure on missing dialog_node');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    payload.new_dialog_node = payload.dialog_node;
    const params = payload;
    return updateDialogNode
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
  it('should succeed with __bx_creds as credential source', () => {
    payload.new_dialog_node = payload.dialog_node;
    const params = { "__bx_creds": {"conversation": payload } };
    return updateDialogNode
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
});
