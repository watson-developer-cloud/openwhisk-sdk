const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let createDialogNode = require('../../../actions/assistant-v1/create-dialog-node');

let ow;
let credentials;
let payload = {
  dialog_node: 'example_node',
  workspace_id: 'example_workspace',
  headers: {
    'User-Agent': 'openwhisk'
  }
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    createDialogNode = adapt(
      createDialogNode,
      'assistant-v1/create-dialog-node',
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
      nock('https://gateway.watsonplatform.net/assistant')
        .post(`/api/v1/workspaces/${payload.workspace_id}/dialog_nodes`)
        .query({
          version: credentials.version_date
        })
        .reply(200, {});
    });
  }
  payload = extend({}, payload, omit(credentials, ['dialog_node']));
});

describe('create-dialog-node', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return createDialogNode
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if version_date is missing', () => {
    const params = omit(payload, ['version_date']);
    return createDialogNode
      .test(params)
      .then(() => {
        assert.fail('No failure on missing version_date');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if workspace_id is missing', () => {
    const params = omit(payload, ['workspace_id']);
    return createDialogNode
      .test(params)
      .then(() => {
        assert.fail('No failure on missing workspace_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if dialog_node is missing', () => {
    const params = omit(payload, ['dialog_node']);
    return createDialogNode
      .test(params)
      .then(() => {
        assert.fail('No failure on missing dialog_node');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    const params = payload;
    return createDialogNode
      .test(params)
      .then(() => {
        // cleanup
        if (process.env.TEST_OPENWHISK && auth) {
          return ow.actions
            .invoke({
              name: 'assistant-v1/delete-dialog-node',
              blocking: true,
              result: true,
              params: payload
            })
            .then(() => {
              assert(true);
            })
            .catch(() => {
              assert(false);
            });
        }
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
});
