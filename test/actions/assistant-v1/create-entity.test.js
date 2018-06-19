const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let createEntity = require('../../../packages/assistant-v1/actions/create-entity');

let ow;
let credentials;
let payload = {
  entity: 'example_entity',
  workspace_id: 'example_workspace_id',
  headers: {
    'User-Agent': 'openwhisk'
  }
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    createEntity = adapt(createEntity, 'assistant-v1/create-entity', ow);
    credentials = auth.conversation;
  } else {
    credentials = {
      username: 'username',
      password: 'password',
      version: 'version-date'
    };
    beforeEach(() => {
      nock('https://gateway.watsonplatform.net/assistant')
        .post(`/api/v1/workspaces/${payload.workspace_id}/entities`)
        .query({
          version: credentials.version
        })
        .reply(200, {});
    });
  }
  payload = extend({}, payload, omit(credentials, ['entity']));
});

describe('create-entity', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return createEntity
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if version is missing', () => {
    const params = omit(payload, ['version']);
    return createEntity
      .test(params)
      .then(() => {
        assert.fail('No failure on missing version');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if workspace_id is missing', () => {
    const params = omit(payload, ['workspace_id']);
    return createEntity
      .test(params)
      .then(() => {
        assert.fail('No failure on missing workspace_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if entity is missing', () => {
    const params = omit(payload, ['entity']);
    return createEntity
      .test(params)
      .then(() => {
        assert.fail('No failure on missing entity');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    const params = payload;
    return createEntity
      .test(params)
      .then(() => {
        // cleanup
        if (process.env.TEST_OPENWHISK && auth) {
          return ow.actions
            .invoke({
              name: 'assistant-v1/delete-entity',
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
