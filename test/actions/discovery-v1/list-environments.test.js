const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const auth = require('../../resources/auth');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let listEnvironments = require('../../../actions/discovery-v1/list-environments');

let ow;
let credentials;
let payload = {};

before(() => {
  if (process.env.TEST_OPENWHISK) {
    ow = openwhisk(auth.ow);
    listEnvironments = adapt(
      listEnvironments,
      'discovery-v1/list-environments',
      ow
    );
    credentials = auth.discovery;
  } else {
    credentials = {
      username: 'username',
      password: 'password',
      version_date: 'version-date'
    };
    beforeEach(() => {
      nock('https://gateway.watsonplatform.net/discovery')
        .get('/api/v1/environments')
        .query({
          version: credentials.version_date
        })
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('list-environments', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return listEnvironments
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    const params = payload;
    return listEnvironments
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
});
