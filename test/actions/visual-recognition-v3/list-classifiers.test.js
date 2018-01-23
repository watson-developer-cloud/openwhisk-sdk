const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let listClassifiers = require('../../../actions/visual-recognition-v3/list-classifiers');

let ow;
let credentials;
let payload = {
  headers: {
    'User-Agent': 'openwhisk'
  }
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    listClassifiers = adapt(
      listClassifiers,
      'visual-recognition-v3/list-classifiers',
      ow
    );
    credentials = auth.visual_recognition.v3;
  } else {
    credentials = {
      api_key: 'api-key',
      version_date: 'version-date'
    };
    beforeEach(() => {
      nock('https://gateway-a.watsonplatform.net/visual-recognition')
        .get('/api/v3/classifiers')
        .query({
          api_key: 'api-key',
          version: credentials.version_date
        })
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('list-classifiers', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['api_key']);
    return listClassifiers
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if version_date is missing', () => {
    const params = omit(payload, ['version_date']);
    return listClassifiers
      .test(params)
      .then(() => {
        assert.fail('No failure on missing version_date');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    const params = payload;
    return listClassifiers
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
});
