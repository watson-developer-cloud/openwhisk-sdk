const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const auth = require('../../resources/auth');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let createTrainingExample = require('../../../actions/discovery-v1/create-training-example');

let ow;
let credentials;
let payload = {
  environment_id: 'example_environment_id',
  collection_id: 'example_collection_id',
  query_id: 'example_query_id',
  relevance: 15,
  cross_reference: 'example_cross_reference',
  document_id: 'example_document_id'
};

before(() => {
  if (process.env.TEST_OPENWHISK) {
    ow = openwhisk(auth.ow);
    createTrainingExample = adapt(
      createTrainingExample,
      'discovery-v1/create-training-example',
      ow
    );
    credentials = auth.discovery;
  } else {
    credentials = {
      username: 'username',
      password: 'password',
      version_date: 'version-date'
    };
    beforeEach(() => {
      nock('https://gateway.watsonplatform.net/discovery')
        .post(`/api/v1/environments/${payload.environment_id}/collections/${payload.collection_id}/training_data/${payload.query_id}/examples`)
        .query({
          version: credentials.version_date
        })
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('create-training-example', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return createTrainingExample
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if environment_id is missing', () => {
    const params = omit(payload, ['environment_id']);
    return createTrainingExample
      .test(params)
      .then(() => {
        assert.fail('No failure on missing environment_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if collection_id is missing', () => {
    const params = omit(payload, ['collection_id']);
    return createTrainingExample
      .test(params)
      .then(() => {
        assert.fail('No failure on missing collection_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if query_id is missing', () => {
    const params = omit(payload, ['query_id']);
    return createTrainingExample
      .test(params)
      .then(() => {
        assert.fail('No failure on missing query_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if document_id is missing', () => {
    const params = omit(payload, ['document_id']);
    return createTrainingExample
      .test(params)
      .then(() => {
        assert.fail('No failure on missing document_id');
      })
      .catch(err => negativeHandler(err));
  });
});
