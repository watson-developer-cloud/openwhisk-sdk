const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let analyze = require('../../../packages/natural-language-understanding-v1/actions/analyze');

let ow;
let credentials;
let payload = {
  text: `IBM is an American multinational technology company headquartered in Armonk,
    New York, United States, with operations in over 170 countries.`,
  features: {
    entities: {
      emotion: true,
      sentiment: true,
      limit: 2
    }
  },
  headers: {
    'User-Agent': 'openwhisk'
  }
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    analyze = adapt(analyze, 'natural-language-understanding-v1/analyze', ow);
    credentials = auth.natural_language_understanding;
  } else {
    credentials = {
      username: 'username',
      password: 'password',
      version: 'version-date'
    };
    beforeEach(() => {
      nock('https://gateway.watsonplatform.net/natural-language-understanding')
        .post('/api/v1/analyze')
        .query({
          version: credentials.version
        })
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('analyze', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return analyze
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if version is missing', () => {
    const params = omit(payload, ['version']);
    return analyze
      .test(params)
      .then(() => {
        assert.fail('No failure on missing version');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if features is missing', () => {
    const params = omit(payload, ['features']);
    return analyze
      .test(params)
      .then(() => {
        assert.fail('No failure on missing features');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    if (!(process.env.TEST_OPENWHISK && auth)) {
      const params = payload;
      return analyze
        .test(params)
        .then(() => {
          assert.ok(true);
        })
        .catch(() => {
          assert.fail('Failure on valid payload');
        });
    }
  });
  it('should succeed with __bx_creds as credential source', () => {
    if (!(process.env.TEST_OPENWHISK && auth)) {
      const params = { __bx_creds: { 'natural-language-understanding': payload } };
      console.log("PARAMS");
      return analyze
        .test(params)
        .then(() => {
          assert.ok(true);
        })
        .catch((err) => {
          console.log("ERR", err)
          assert.fail('Failure on valid payload');
        });
    }
  });
});
