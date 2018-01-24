const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let getClassifier = require('../../../actions/natural-language-classifier-v1/get-classifier');

let ow;
let credentials;
let payload = {
  classifier_id: 'example_classifier_id',
  headers: {
    'User-Agent': 'openwhisk'
  }
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    getClassifier = adapt(
      getClassifier,
      'natural-language-classifier-v1/get-classifier',
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
        .get(`/api/v1/classifiers/${payload.classifier_id}`)
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('get-classifier', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
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
