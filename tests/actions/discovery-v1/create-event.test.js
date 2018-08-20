const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let createEvent = require('../../../packages/discovery-v1/actions/create-event');

let ow;
let credentials;
let payload = {
  type: 'type',
  data: {
    environment_id: 'some',
    session_token: 'some',
    collection_id: 'some',
    document_id: 'some'
  },
  headers: {
    'User-Agent': 'openwhisk'
  }
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    createEvent = adapt(
      createEvent,
      'discovery-v1/create-event',
      ow
    );
    credentials = auth.discovery;
  } else {
    credentials = {
      username: 'username',
      password: 'password',
      version: 'version-date'
    };
    beforeEach(() => {
      nock('https://gateway.watsonplatform.net/discovery')
        .post('/api/v1/events')
        .query({
          version: credentials.version
        })
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('create-event', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return createEvent
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if type is missing', () => {
    const params = omit(payload, ['type']);
    return createEvent
      .test(params)
      .then(() => {
        assert.fail('No failure on missing name');
      })
      .catch(err => negativeHandler(err));
  });
  it('should succeed with __bx_creds as credential source', () => {
    if (!(process.env.TEST_OPENWHISK && auth)) {
      const params = { __bx_creds: { discovery: payload } };
      return createEvent
        .test(params)
        .then(() => {
          assert.ok(true);
        })
        .catch((e) => {
        console.log(e);
          assert.fail('Failure on valid payload');
        });
    }
  });
});
