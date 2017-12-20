const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const auth = require('../../resources/auth');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let analyze = require('../../../actions/natural-language-understanding-v1/analyze');

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
  }
};

before(() => {
  if (process.env.TEST_OPENWHISK) {
    ow = openwhisk(auth.ow);
    analyze = adapt(analyze, 'natural-language-understanding-v1/analyze', ow);
    credentials = auth.natural_language_understanding;
  } else {
    credentials = {
      username: 'username',
      password: 'password',
      version_date: 'version-date'
    };
    beforeEach(() => {
      nock('https://gateway.watsonplatform.net/natural-language-understanding')
        .post('/api/v1/analyze')
        .query({
          version: credentials.version_date
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
  it('should fail if version_date is missing', () => {
    const params = omit(payload, ['version_date']);
    return analyze
      .test(params)
      .then(() => {
        assert.fail('No failure on missing version_date');
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
    const params = payload;
    return analyze
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
});
