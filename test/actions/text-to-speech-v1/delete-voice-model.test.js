const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { negativeHandler } = require('../../resources/test-helper');
const deleteVoiceModel = require('../../../actions/text-to-speech-v1/delete-voice-model');

let ow;
let credentials;
let payload = {
  customization_id: 'example_customization_id'
};

before(() => {
  credentials = {
    username: 'username',
    password: 'password',
    version_date: 'version-date'
  };
  beforeEach(() => {
    nock('https://stream.watsonplatform.net/text-to-speech')
      .delete(`/api/v1/customizations/${payload.customization_id}`)
      .reply(200, {});
  });
  payload = extend({}, payload, credentials);
});

describe('delete-voice-model', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return deleteVoiceModel
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if customization_id is missing', () => {
    const params = omit(payload, ['customization_id']);
    return deleteVoiceModel
      .test(params)
      .then(() => {
        assert.fail('No failure on missing customization_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    const params = payload;
    return deleteVoiceModel
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
});
