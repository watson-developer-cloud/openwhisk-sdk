const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let addWords = require('../../../actions/text-to-speech-v1/add-words');

let ow;
let credentials;
let payload = {
  headers: {
    'User-Agent': 'openwhisk'
  },
  customization_id: 'example_customization_id',
  words: [
    {
      word: 'example_word',
      translation: 'example_translation'
    }
  ]
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    addWords = adapt(addWords, 'text-to-speech-v1/add-words', ow);
    credentials = auth.text_to_speech;
  } else {
    credentials = {
      username: 'username',
      password: 'password',
      version_date: 'version-date'
    };
    beforeEach(() => {
      nock('https://stream.watsonplatform.net/text-to-speech')
        .post(`/api/v1/customizations/${payload.customization_id}/words`)
        .reply(200, {});
    });
  }
  payload = extend({}, payload, omit(credentials, ['word']));
});

describe('add-words', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return addWords
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if customization_id is missing', () => {
    const params = omit(payload, ['customization_id']);
    return addWords
      .test(params)
      .then(() => {
        assert.fail('No failure on missing customization_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if words is missing', () => {
    const params = omit(payload, ['words']);
    return addWords
      .test(params)
      .then(() => {
        assert.fail('No failure on missing words');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    if (!(process.env.TEST_OPENWHISK && auth)) {
      const params = payload;
      params.word = params.words[0].word;
      return addWords
        .test(params)
        .then(() => {
          // cleanup
          if (process.env.TEST_OPENWHISK && auth) {
            return ow.actions
              .invoke({
                name: 'text-to-speech-v1/delete-word',
                blocking: true,
                result: true,
                params
              })
              .then(() => {
                assert(true);
              })
              .catch(() => {
                assert(false);
              });
          }
          assert.ok(true);
        })
        .catch(() => {
          assert.fail('Failure on valid payload');
        });       
    }
  });
});
