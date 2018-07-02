const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let addWord = require('../../../packages/speech-to-text-v1/actions/add-word');

let ow;
let credentials;

let payload = {
  customization_id: 'example_customization',
  word_name: 'tomato',
  sounds_like: ['tomatoh', 'tomayto'],
  headers: {
    'User-Agent': 'openwhisk'
  }
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    addWord = adapt(addWord, 'speech-to-text-v1/add-word', ow);
    credentials = auth.speech_to_text;
  } else {
    credentials = {
      username: 'username',
      password: 'password',
      version: 'version-date'
    };
    beforeEach(() => {
      nock('https://stream.watsonplatform.net/speech-to-text')
        .put(`/api/v1/customizations/${payload.customization_id}`
            + `/words/${payload.word_name}`)
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
        assert.fail();
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if word_name is missing', () => {
    const params = omit(payload, ['word_name']);
    return addWord
      .test(params)
      .then(() => {
        assert.fail();
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    it('should generate a valid payload', () => {
      const params = payload;
      return addWord
        .test(params)
        .then(() => {
          assert.ok(true);
        })
        .catch(() => {
          assert.fail('Failure on valid payload');
        });
    });
  });
  it('should succeed with __bx_creds as credential source', () => {
    const params = { __bx_creds: { speech_to_text: payload } };
    return addWord
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
});
