const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const { negativeHandler } = require('../../resources/test-helper');
const deleteWord = require('../../../packages/text-to-speech-v1/actions/delete-word');

let credentials;
let payload = {
  headers: {
    'User-Agent': 'openwhisk'
  },
  customization_id: 'example_customization_id',
  word: 'example_word'
};

before(() => {
  credentials = {
    username: 'username',
    password: 'password',
    version: 'version-date'
  };
  beforeEach(() => {
    nock('https://stream.watsonplatform.net/text-to-speech')
      .delete(`/api/v1/customizations/${payload.customization_id}`
              + `/words/${payload.word}`)
      .reply(200, {});
  });
  payload = extend({}, payload, credentials);
});

describe('delete-word', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return deleteWord
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if customization_id is missing', () => {
    const params = omit(payload, ['customization_id']);
    return deleteWord
      .test(params)
      .then(() => {
        assert.fail('No failure on missing customization_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if word is missing', () => {
    const params = omit(payload, ['word']);
    return deleteWord
      .test(params)
      .then(() => {
        assert.fail('No failure on missing word');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    const params = payload;
    return deleteWord
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
  it('should succeed with __bx_creds as credential source', () => {
    const params = { __bx_creds: { text_to_speech: payload } };
    return deleteWord
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
});
