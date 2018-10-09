const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const { describe } = require('../../resources/auth-helper');
const { negativeHandler } = require('../../resources/test-helper');
const message = require('../../../packages/assistant-v2/actions/message');

let credentials;
let payload = {
  assistant_id: 'example_id',
  session_id: 'example_session',
  headers: {
    'User-Agent': 'openwhisk'
  }
};


before(() => {
  credentials = {
    username: 'username',
    password: 'password',
    version: 'version-date'
  };
  beforeEach(() => {
    nock('https://gateway.watsonplatform.net/assistant')
      .post('/api/v2/assistants/example_id/sessions/example_session/message')
      .query({
        version: credentials.version
      })
      .reply(200, {});
  });
  payload = extend({}, payload, credentials);
});

describe('message', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return message
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if version is missing', () => {
    const params = omit(payload, ['version']);
    return message
      .test(params)
      .then(() => {
        assert.fail('No failure on missing version');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if assistant_id is missing', () => {
    const params = omit(payload, ['assistant_id']);
    return message
      .test(params)
      .then(() => {
        assert.fail('No failure on missing assistant_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    const params = payload;
    return message
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch((e) => {
        assert.fail(e);
      });
  });
});
