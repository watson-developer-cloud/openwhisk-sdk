const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const path = require('path');
const fs = require('fs');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let createClassifier = require('../../../packages/natural-language-classifier-v1/actions/create-classifier');

let ow;
let credentials;
let payload = {
  headers: {
    'User-Agent': 'openwhisk'
  },
  training_data: fs
    .readFileSync(path.join(__dirname, '/../../resources/nlc_training_data.txt'))
    .toString(),
  metadata: fs
    .readFileSync(path.join(__dirname, '/../../resources/nlc_metadata.txt'))
    .toString()

};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    createClassifier = adapt(
      createClassifier,
      'natural-language-classifier-v1/create-classifier',
      ow
    );
    credentials = auth.natural_language_classifier;
  } else {
    credentials = {
      username: 'username',
      password: 'password'
    };
    beforeEach(() => {
      nock('https://gateway.watsonplatform.net/natural-language-classifier')
        .post('/api/v1/classifiers')
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('create-classifier', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return createClassifier
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if training_data is missing', () => {
    const params = omit(payload, ['training_data']);
    return createClassifier
      .test(params)
      .then(() => {
        assert.fail('No failure on missing training_data');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if metadata is missing', () => {
    const params = omit(payload, ['metadata']);
    return createClassifier
      .test(params)
      .then(() => {
        assert.fail('No failure on missing metadata');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    if (!(process.env.TEST_OPENWHISK && auth)) {
      const params = payload;
      return createClassifier
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
      const params = { __bx_creds: { natural_language_classifier: payload } };
      return createClassifier
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
