const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const fs = require('fs');
const omit = require('object.omit');
const path = require('path');
const openwhisk = require('openwhisk');
const auth = require('../../resources/auth');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let classify = require('../../../actions/natural-language-classifier-v1/classify');

let ow;
let credentials;
let payload = {
  classifier_id: 'example_classifier_id',
  text: 'How is the weather today'
};

before(() => {
  if (process.env.TEST_OPENWHISK) {
    ow = openwhisk(auth.ow);
    classify = adapt(classify, 'natural-language-classifier-v1/classify', ow);
    credentials = auth.natural_language_classifier;
  } else {
    credentials = {
      username: 'username',
      password: 'password'
    };
    beforeEach(() => {
      nock('https://gateway.watsonplatform.net/natural-language-classifier')
        .post(`/api/v1/classifiers/${payload.classifier_id}/classify`)
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('classify', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return classify
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if classifier_id is missing', () => {
    const params = omit(payload, ['classifier_id']);
    return classify
      .test(params)
      .then(() => {
        assert.fail('No failure on missing classifier_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if text is missing', () => {
    const params = omit(payload, ['text']);
    return classify
      .test(params)
      .then(() => {
        assert.fail('No failure on missing text');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    const params = payload;
    return classify
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
});
