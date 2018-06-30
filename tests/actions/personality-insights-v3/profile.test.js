const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const path = require('path');
const fs = require('fs');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let profile = require('../../../packages/personality-insights-v3/actions/profile');

let ow;
let credentials;
let payload = {
  headers: {
    'User-Agent': 'openwhisk'
  },
  content: fs
    .readFileSync(path.join(__dirname, '/../../resources/personality_insights_content.txt'))
    .toString(),
  content_type: 'text/plain'
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    profile = adapt(profile, 'personality-insights-v3/profile', ow);
    credentials = auth.personality_insights.v3;
  } else {
    credentials = {
      username: 'username',
      password: 'password',
      version: 'version-date'
    };
    beforeEach(() => {
      nock('https://gateway.watsonplatform.net/personality-insights')
        .post('/api/v3/profile')
        .query({
          version: credentials.version
        })
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('profile', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return profile
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if version is missing', () => {
    const params = omit(payload, ['version']);
    return profile
      .test(params)
      .then(() => {
        assert.fail('No failure on missing version');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if content is missing', () => {
    const params = omit(payload, ['content']);
    return profile
      .test(params)
      .then(() => {
        assert.fail('No failure on missing content');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if content_type is missing', () => {
    const params = omit(payload, ['content_type']);
    return profile
      .test(params)
      .then(() => {
        assert.fail('No failure on missing content_type');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    const params = payload;
    return profile
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
  it('should succeed with __bx_creds as credential source', () => {
    const params = { __bx_creds: { personality_insights: payload } };
    return profile
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
});
