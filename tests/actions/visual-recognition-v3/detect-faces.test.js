const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const path = require('path');
const fs = require('fs');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let detectFaces = require('../../../packages/visual-recognition-v3/actions/detect-faces');

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
    detectFaces = adapt(detectFaces, 'visual-recognition-v3/detect-faces', ow);
    credentials = auth.visual_recognition.v3;
  } else {
    credentials = {
      api_key: 'api-key',
      version: 'version-date'
    };
    beforeEach(() => {
      nock('https://gateway-a.watsonplatform.net/visual-recognition')
        .post('/api/v3/detect_faces')
        .query({
          api_key: 'api-key',
          version: credentials.version
        })
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('detect-faces', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['api_key']);
    return detectFaces
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if version is missing', () => {
    const params = omit(payload, ['version']);
    return detectFaces
      .test(params)
      .then(() => {
        assert.fail('No failure on missing version');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if images_file is not base64', () => {
    const params = omit(payload, ['parameters']);
    params.images_file = {};
    return detectFaces
      .test(params)
      .then(() => {
        assert.fail('No failure on wrong input type');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload with images_file', () => {
    const params = omit(payload, ['parameters']);
    return detectFaces
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
  it('should generate a valid payload with url', () => {
    const params = omit(payload, ['images_file']);
    return detectFaces
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
  it('should generate a valid payload with both url and images_file', () => {
    const params = payload;
    return detectFaces
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
    return detectFaces
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
});
