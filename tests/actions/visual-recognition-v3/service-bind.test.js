const assert = require('assert');
const nock = require('nock');
const { describe } = require('../../resources/auth-helper');
const listClassifiers = require('../../../packages/visual-recognition-v3/actions/list-classifiers');

const IAM_HOST = 'https://iam.bluemix.net:443';
let ow;
let credentials;
let payload = {
  headers: {
    'User-Agent': 'openwhisk'
  }
};

describe('service bind', () => {
  before(() => {
    nock.disableNetConnect();
    nock(IAM_HOST)
      .persist()
      .post('/identity/token', 'grant_type=urn%3Aibm%3Aparams%3Aoauth%3Agrant-type%3Aapikey&apikey=IAMkey&response_type=cloud_iam')
      .reply(200, { access_token: 'faa' });

    nock('https://gateway.watsonplatform.net/visual-recognition')
      .get('/api/v3/classifiers')
      .query({
        version: '2018-03-19'
      })
      .reply(200, { foo: 'bar' });
  });

  after(() => {
    nock.cleanAll();
  });

  it('should succeed with __bx_creds as credential source with IAM preferring IAM', () => {
    // eslint-disable-next-line
    const __bx_creds = {
      'watson-vision-combined': {
        iam_role_crn: 'crn:v1:bluemix:public:iam::::serviceRole:Manager',
        url: 'https://gateway.watsonplatform.net/visual-recognition/api',
        iam_apikey_description: 'some key',
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

    const params = { version: '2018-03-19', __bx_creds, payload };
    return listClassifiers
      .test(params)
      .then((result) => {
        assert.equal(result.toString(), { foo: 'bar' }.toString());
        assert.ok(true);
      })
      .catch((err) => {
        assert.fail('Failure on valid payload', err);
      });
  });
});
