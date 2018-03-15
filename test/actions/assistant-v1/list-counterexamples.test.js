const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let listCounterExamples = require('../../../actions/assistant-v1/list-counterexamples');

let ow;
let credentials;
let payload = {
  workspace_id: 'example_workspace_id',
  headers: {
    'User-Agent': 'openwhisk'
  }
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    listCounterExamples = adapt(
      listCounterExamples,
      'assistant-v1/list-counterexamples',
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
        .get(`/api/v1/workspaces/${payload.workspace_id}/counterexamples`)
        .query({
          version: credentials.version_date
        })
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('list-counterexamples', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return listCounterExamples
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if version_date is missing', () => {
    const params = omit(payload, ['version_date']);
    return listCounterExamples
      .test(params)
      .then(() => {
        assert.fail('No failure on missing version_date');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if workspace_id is missing', () => {
    const params = omit(payload, ['workspace_id']);
    return listCounterExamples
      .test(params)
      .then(() => {
        assert.fail('No failure on missing workspace_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    const params = payload;
    return listCounterExamples
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
});
