const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let createCounterExample = require('../../../packages/conversation-v1/actions/create-counterexample');

let ow;
let credentials;
let payload = {
  text: 'counterexample',
  workspace_id: 'example_workspace_id',
  headers: {
    'User-Agent': 'openwhisk'
  }
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    createCounterExample = adapt(
      createCounterExample,
      'conversation-v1/create-counterexample',
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
      nock('https://gateway.watsonplatform.net/conversation')
        .post(`/api/v1/workspaces/${payload.workspace_id}/counterexamples`)
        .query({
          version: credentials.version
        })
        .reply(200, {});
    });
  }
  payload = extend({}, payload, omit(credentials, 'text'));
});

describe('create-counterexample', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return createCounterExample
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if version is missing', () => {
    const params = omit(payload, ['version']);
    return createCounterExample
      .test(params)
      .then(() => {
        assert.fail('No failure on missing version');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if text is missing', () => {
    const params = omit(payload, ['text']);
    return createCounterExample
      .test(params)
      .then(() => {
        assert.fail('No failure on missing text');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if workspace_id is missing', () => {
    const params = omit(payload, ['workspace_id']);
    return createCounterExample
      .test(params)
      .then(() => {
        assert.fail('No failure on missing workspace_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    const params = payload;
    return createCounterExample
      .test(params)
      .then(() => {
        // cleanup
        if (process.env.TEST_OPENWHISK && auth) {
          return ow.actions
            .invoke({
              name: 'conversation-v1/delete-counterexample',
              blocking: true,
              result: true,
              params
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
  it('should succeed with __bx_creds as credential source', () => {
    const params = { __bx_creds: { conversation: payload } };
    return createCounterExample
      .test(params)
      .then(() => {
        // cleanup
        if (process.env.TEST_OPENWHISK && auth) {
          return ow.actions
            .invoke({
              name: 'conversation-v1/delete-counterexample',
              blocking: true,
              result: true,
              params
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
