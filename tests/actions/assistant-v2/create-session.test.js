const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const { negativeHandler } = require('../../resources/test-helper');
const createSession = require('../../../packages/assistant-v2/actions/create-session');

let credentials;
let payload = {
  assistant_id: 'example_id',
  headers: {
    'User-Agent': 'openwhisk'
  }
};

before(() => {
  credentials = {
    username: 'user',
    password: 'pass',
    version: 'version-date'
  };
  beforeEach(() => {
    nock('https://gateway.watsonplatform.net/assistant')
      .post('/api/v2/assistants/example_id/sessions')
      .query({
        version: credentials.version
      })
      .reply(200, {});
  });

  payload = extend({}, payload, credentials);
});

describe('create-session', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return createSession
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if version is missing', () => {
    const params = omit(payload, ['version']);
    return createSession
      .test(params)
      .then(() => {
        assert.fail('No failure on missing version');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if assistant_id is missing', () => {
    const params = omit(payload, ['assistant_id']);
    return createSession
      .test(params)
      .then(() => {
        assert.fail('No failure on missing assistant_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    const params = payload;
    return createSession
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch((e) => {
        assert.fail(e);
      });
  });
});
