const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let getClassifier = require('../../../packages/visual-recognition-v3/actions/get-classifier');

let ow;
let credentials;
let payload = {
  headers: {
    'User-Agent': 'openwhisk'
  },
  classifier_id: 'example_classifier_id'
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    getClassifier = adapt(
      getClassifier,
      'visual-recognition-v3/get-classifier',
      ow
    );
    credentials = auth.visual_recognition.v3;
  } else {
    credentials = {
      api_key: 'api-key',
      version: 'version-date'
    };
    beforeEach(() => {
      nock('https://gateway-a.watsonplatform.net/visual-recognition')
        .get(`/api/v3/classifiers/${payload.classifier_id}`)
        .query({
          api_key: 'api-key',
          version: credentials.version
        })
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('get-classifier', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['api_key']);
    return getClassifier
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if classifier_id is missing', () => {
    const params = omit(payload, ['classifier_id']);
    return getClassifier
      .test(params)
      .then(() => {
        assert.fail('No failure on missing classifier_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if version is missing', () => {
    const params = omit(payload, ['version']);
    return getClassifier
      .test(params)
      .then(() => {
        assert.fail('No failure on missing version');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    if (!(process.env.TEST_OPENWHISK && auth)) {
      const params = payload;
      return getClassifier
        .test(params)
        .then(() => {
          assert.ok(true);
        })
        .catch(() => {
          assert.fail('Failure on valid payload');
        });
    }
  });
});
