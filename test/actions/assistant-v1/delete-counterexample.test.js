const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const { negativeHandler } = require('../../resources/test-helper');
const deleteCounterExample = require('../../../packages/assistant-v1/actions/delete-counterexample');

let credentials;
let payload = {
  text: 'example_counterexample',
  headers: {
    'User-Agent': 'openwhisk'
  }
};

before(() => {
  credentials = {
    username: 'username',
    password: 'password',
    version: 'version-date',
    workspace_id: 'example_workspace'
  };
  beforeEach(() => {
    nock('https://gateway.watsonplatform.net/assistant')
      .delete(`/api/v1/workspaces/${payload.workspace_id}`
              + `/counterexamples/${payload.text}`)
      .query({
        version: credentials.version
      })
      .reply(200, {});
  });
  payload = extend({}, payload, credentials);
});

describe('delete-counterexample', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return deleteCounterExample
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if version is missing', () => {
    const params = omit(payload, ['version']);
    return deleteCounterExample
      .test(params)
      .then(() => {
        assert.fail('No failure on missing version');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if text is missing', () => {
    const params = omit(payload, ['text']);
    return deleteCounterExample
      .test(params)
      .then(() => {
        assert.fail('No failure on missing text');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if workspace_id is missing', () => {
    const params = omit(payload, ['workspace_id']);
    return deleteCounterExample
      .test(params)
      .then(() => {
        assert.fail('No failure on missing workspace_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    const params = payload;
    return deleteCounterExample
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
});
