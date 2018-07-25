const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const path = require('path');
const fs = require('fs');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let listClassifiers = require('../../../packages/visual-recognition-v3/actions/list-classifiers');

let ow;
let credentials;
let payload = {
  headers: {
    'User-Agent': 'openwhisk'
  }
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    listClassifiers = adapt(
      listClassifiers,
      'visual-recognition-v3/list-classifiers',
      ow
    );
    credentials = auth.visual_recognition.v3;
  } else {
    credentials = {
      api_key: 'api-key',
      version: 'version-date'
    };
    beforeEach(() => {
      nock('https://gateway.watsonplatform.net/visual-recognition')
        .get('/api/v3/classifiers')
        .query({
          version: '2018-03-19'
        })
        .reply(200, {});
    });
  }
  payload = extend({}, payload, omit(credentials, ['url']));
});

describe.skip('service bind', () => {
  it('should succeed with __bx_creds as credential source with IAM', () => {
    const __bx_creds = {
      'watson-vision-combined': {
        iam_role_crn: 'crn:v1:bluemix:public:iam::::serviceRole:Manager',
        url: 'https://gateway.watsonplatform.net/visual-recognition/api',
        iam_apikey_description: 'Auto generated apikey during resource-key operation for Instance',
        apikey: 'IAMkey',
        instance: 'visual-recognition-sdks-lite-do-not-delete',
        iam_apikey_name: 'auto-generated-apikey',
        iam_serviceid_crn: 'crn',
        credentials: 'Credentials-1'
      },
      watson_vision_combined: {
        url: 'https://gateway-a.watsonplatform.net/visual-recognition/api',
        instance: 'vis-rec-cf',
        api_key: 'CFkey',
        note: 'It may take up to 5 minutes for this key to become active',
        credentials: 'credentials'
      }
    };
    const params = { version: '2018-03-19', __bx_creds };
    return listClassifiers
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
});
