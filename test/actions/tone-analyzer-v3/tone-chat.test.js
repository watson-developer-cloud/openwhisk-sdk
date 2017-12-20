const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const auth = require('../../resources/auth');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let toneChat = require('../../../actions/tone-analyzer-v3/tone-chat');

let ow;
let credentials;
let payload = {
  utterances: [
    {
      text: 'I am having a problem with my account.',
      user: 'user'
    },
    {
      text: 'I am sorry about that sir. I am here to help you.',
      user: 'agent'
    }
  ]
};

before(() => {
  if (process.env.TEST_OPENWHISK) {
    ow = openwhisk(auth.ow);
    toneChat = adapt(toneChat, 'tone-analyzer-v3/tone-chat', ow);
    credentials = auth.tone_analyzer;
  } else {
    credentials = {
      username: 'username',
      password: 'password',
      version_date: 'version-date'
    };
    beforeEach(() => {
      nock('https://gateway.watsonplatform.net/tone-analyzer')
        .post('/api/v3/tone_chat')
        .query({
          version: credentials.version_date
        })
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('tone-chat', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return toneChat
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if version_date is missing', () => {
    const params = omit(payload, ['version_date']);
    return toneChat
      .test(params)
      .then(() => {
        assert.fail('No failure on missing version_date');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if utterances is missing', () => {
    const params = omit(payload, ['utterances']);
    return toneChat
      .test(params)
      .then(() => {
        assert.fail('No failure on missing utterances');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    const params = payload;
    return toneChat
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
});
