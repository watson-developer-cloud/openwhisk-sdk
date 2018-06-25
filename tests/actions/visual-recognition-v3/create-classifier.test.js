const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let createClassifier = require('../../../packages/visual-recognition-v3/actions/create-classifier');

let ow;
let credentials;
let payload = {
  name: 'example_name',
  headers: {
    'User-Agent': 'openwhisk'
  }
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    createClassifier = adapt(
      createClassifier,
      'visual-recognition-v3/create-classifier',
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
        .post('/api/v3/create')
        .query({
          api_key: 'api-key',
          version: credentials.version
        })
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('create-classifier', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['api_key']);
    return createClassifier
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if version is missing', () => {
    const params = omit(payload, ['version']);
    return createClassifier
      .test(params)
      .then(() => {
        assert.fail('No failure on missing version');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if name is missing', () => {
    const params = omit(payload, ['name']);
    return createClassifier
      .test(params)
      .then(() => {
        assert.fail('No failure on missing name');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if positive_examples is missing', () => {
    const params = omit(payload, ['positive_examples']);
    params.images_file = {};
    return createClassifier
      .test(params)
      .then(() => {
        assert.fail('No failure on missing positive_examples');
      })
      .catch(err => negativeHandler(err));
  });
});
