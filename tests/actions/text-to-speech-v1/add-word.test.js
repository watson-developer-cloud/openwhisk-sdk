const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let addWord = require('../../../packages/text-to-speech-v1/actions/add-word');

let ow;
let credentials;
let payload = {
  headers: {
    'User-Agent': 'openwhisk'
  },
  customization_id: 'example_customization_id',
  word: 'example_word',
  translation: 'example_translation'
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    addWord = adapt(addWord, 'text-to-speech-v1/add-word', ow);
    credentials = auth.text_to_speech;
  } else {
    credentials = {
      username: 'username',
      password: 'password',
      version: 'version-date'
    };
    beforeEach(() => {
      nock('https://stream.watsonplatform.net/text-to-speech')
        .put(`/api/v1/customizations/${payload.customization_id}`
             + `/words/${payload.word}`)
        .reply(200, {});
    });
  }
  payload = extend({}, payload, omit(credentials, ['word']));
});

describe('add-word', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return addWord
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if customization_id is missing', () => {
    const params = omit(payload, ['customization_id']);
    return addWord
      .test(params)
      .then(() => {
        assert.fail('No failure on missing customization_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if word is missing', () => {
    const params = omit(payload, ['word']);
    return addWord
      .test(params)
      .then(() => {
        assert.fail('No failure on missing word');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if translation is missing', () => {
    const params = omit(payload, ['translation']);
    return addWord
      .test(params)
      .then(() => {
        assert.fail('No failure on missing translation');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    if (!(process.env.TEST_OPENWHISK && auth)) {
      const params = payload;
      return addWord
        .test(params)
        .then(() => {
          // cleanup
          if (process.env.TEST_OPENWHISK && auth) {
            return ow.actions
              .invoke({
                name: 'text-to-speech-v1/add-word',
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
