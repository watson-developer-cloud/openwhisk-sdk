const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let deleteModel = require('../../../packages/natural-language-understanding-v1/actions/delete-model');

let ow;
let credentials;
let payload = {
  model_id: 'fake-model',
  headers: {
    'User-Agent': 'openwhisk'
  }
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    deleteModel = adapt(
      deleteModel,
      'natural-language-understanding-v1/delete-model',
      ow
    );
    credentials = auth.natural_language_understanding;
  } else {
    credentials = {
      username: 'username',
      password: 'password',
      version: 'version-date'
    };
    beforeEach(() => {
      nock('https://gateway.watsonplatform.net/natural-language-understanding')
        .delete(`/api/v1/models/${payload.model_id}`)
        .query({
          version: credentials.version
        })
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('delete-model', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return deleteModel
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if version is missing', () => {
    const params = omit(payload, ['version']);
    return deleteModel
      .test(params)
      .then(() => {
        assert.fail('No failure on missing version');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if model_id is missing', () => {
    if (!(process.env.TEST_OPENWHISK && auth)) {
      const params = omit(payload, ['model_id']);
      return deleteModel
        .test(params)
        .then(() => {
          assert.fail('No failure on missing model_id');
        })
        .catch(err => negativeHandler(err));
    }
  });
});
