const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const path = require('path');
const fs = require('fs');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let classify = require('../../../packages/visual-recognition-v3/actions/classify');

let ow;
let credentials;
let payload = {
  headers: {
    'User-Agent': 'openwhisk'
  },
  images_file: fs
    .readFileSync(path.join(__dirname, '/../../resources/vr_images_file.txt'))
    .toString(),
  parameters: {
    url:
      'https://i.pinimg.com/736x/40/78/a2/4078a2c375a5f7ff1eb4f40f14aaaeeb--bullmastiff-magazines.jpg'
  }
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    classify = adapt(classify, 'visual-recognition-v3/classify', ow);
    credentials = auth.visual_recognition.v3;
  } else {
    credentials = {
      api_key: 'api-key',
      version: 'version-date'
    };
    beforeEach(() => {
      nock('https://gateway-a.watsonplatform.net/visual-recognition')
        .post('/api/v3/classify')
        .query({
          api_key: 'api-key',
          version: credentials.version
        })
        .reply(200, {});
    });
  }
  payload = extend({}, payload, omit(credentials, ['url']));
});

describe('classify', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['api_key']);
    return classify
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if version is missing', () => {
    const params = omit(payload, ['version']);
    return classify
      .test(params)
      .then(() => {
        assert.fail('No failure on missing version');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if images_file is not base64', () => {
    const params = omit(payload, ['parameters']);
    params.images_file = {};
    return classify
      .test(params)
      .then(() => {
        assert.fail('No failure on wrong image input type');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload with images_file', () => {
    const params = omit(payload, ['parameters']);
    return classify
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
  it('should generate a valid payload with url', () => {
    if (!(process.env.TEST_OPENWHISK && auth)) {
      const params = omit(payload, ['images_file']);
      return classify
        .test(params)
        .then(() => {
          assert.ok(true);
        })
        .catch(() => {
          assert.fail('Failure on valid payload');
        });
    }
  });
  it('should generate a valid payload with both url and images_file', () => {
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
  it('should succeed with __bx_creds as credential source', () => {
    const params = { __bx_creds: { watson_vision_combined: payload } };
    return classify
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
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
