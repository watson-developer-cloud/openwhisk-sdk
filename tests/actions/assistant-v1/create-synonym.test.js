const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let createSynonym = require('../../../packages/assistant-v1/actions/create-synonym');

let ow;
let credentials;
let payload = {
  synonym: 'example_synonym',
  workspace_id: 'example_workspace',
  entity: 'example_entity',
  value: 'example_value',
  headers: {
    'User-Agent': 'openwhisk'
  }
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    createSynonym = adapt(createSynonym, 'assistant-v1/create-synonym', ow);
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
              + `/entities/${payload.entity}`
              + `/values/${payload.value}/synonyms`)
        .query({
          version: credentials.version
        })
        .reply(200, {});
    });
  }
  payload = extend({}, payload, omit(credentials, ['synonym']));
});

describe('create-synonym', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return createSynonym
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if version is missing', () => {
    const params = omit(payload, ['version']);
    return createSynonym
      .test(params)
      .then(() => {
        assert.fail('No failure on missing version');
      })
      .catch(() => {
        assert(true);
      });
  });
  it('should fail if workspace_id is missing', () => {
    const params = omit(payload, ['workspace_id']);
    return createSynonym
      .test(params)
      .then(() => {
        assert.fail('No failure on missing workspace_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if entity is missing', () => {
    const params = omit(payload, ['entity']);
    return createSynonym
      .test(params)
      .then(() => {
        assert.fail('No failure on missing entity');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if value is missing', () => {
    const params = omit(payload, ['value']);
    return createSynonym
      .test(params)
      .then(() => {
        assert.fail('No failure on missing value');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if synonym is missing', () => {
    const params = omit(payload, ['synonym']);
    return createSynonym
      .test(params)
      .then(() => {
        assert.fail('No failure on missing synonym');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    const params = payload;
    return createSynonym
      .test(params)
      .then(() => {
        // cleanup
        if (process.env.TEST_OPENWHISK && auth) {
          return ow.actions
            .invoke({
              name: 'assistant-v1/delete-synonym',
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
      .catch((err) => {
        // cleanup
        console.log("ERR SYN", err);
        assert.fail('Failure on valid payload');
      });
  });
  it('should succeed with __bx_creds as credential source', () => {
    const params = { "__bx_creds": {"conversation": payload } };
    return createSynonym
      .test(params)
      .then(() => {
        // cleanup
        if (process.env.TEST_OPENWHISK && auth) {
          return ow.actions
            .invoke({
              name: 'assistant-v1/delete-synonym',
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
      .catch((err) => {
        console.log('bx creds', err);
        assert.fail('Failure on valid payload');
      });
  });
});
