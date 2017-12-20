const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const auth = require('../../resources/auth');
const { adapt, negativeHandler } = require('../../resources/test-helper');
const deleteDialogNode = require('../../../actions/conversation-v1/delete-dialog-node');

let ow;
let credentials;
let payload = {
  dialog_node: 'example_node',
  workspace_id: 'example_workspace'
};

before(() => {
  credentials = {
    username: 'username',
    password: 'password',
    version_date: 'version-date'
  };
  beforeEach(() => {
    nock('https://gateway.watsonplatform.net/conversation')
      .delete(`/api/v1/workspaces/${payload.workspace_id}/dialog_nodes/${payload.dialog_node}`)
      .query({
        version: credentials.version_date
      })
      .reply(200, {});
  });
  payload = extend({}, payload, credentials);
});

describe('delete-dialog-node', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return deleteDialogNode
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if version_date is missing', () => {
    const params = omit(payload, ['version_date']);
    return deleteDialogNode
      .test(params)
      .then(() => {
        assert.fail('No failure on missing version_date');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if workspace_id is missing', () => {
    const params = omit(payload, ['workspace_id']);
    return deleteDialogNode
      .test(params)
      .then(() => {
        assert.fail('No failure on missing workspace_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if dialog_node is missing', () => {
    const params = omit(payload, ['dialog_node']);
    return deleteDialogNode
      .test(params)
      .then(() => {
        assert.fail('No failure on missing dialog_node');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    const params = payload;
    return deleteDialogNode
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
});
