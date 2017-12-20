const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const auth = require('../../resources/auth');
const { adapt, negativeHandler } = require('../../resources/test-helper');
const deleteSynonym = require('../../../actions/conversation-v1/delete-synonym');

let ow;
let credentials;
let payload = {
  synonym: 'example_synonym',
  workspace_id: 'example_workspace',
  entity: 'example_entity',
  value: 'example_value'
};

before(() => {
  credentials = {
    username: 'username',
    password: 'password',
    version_date: 'version-date'
  };
  beforeEach(() => {
    nock('https://gateway.watsonplatform.net/conversation')
      .delete(`/api/v1/workspaces/${payload.workspace_id}/entities/${payload.entity}/values/${payload.value}/synonyms/${payload.synonym}`)
      .query({
        version: credentials.version_date
      })
      .reply(200, {});
  });
  payload = extend({}, payload, omit(credentials, ['synonym']));
});

describe('delete-synonym', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return deleteSynonym
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if version_date is missing', () => {
    const params = omit(payload, ['version_date']);
    return deleteSynonym
      .test(params)
      .then(() => {
        assert.fail('No failure on missing version_date');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if workspace_id is missing', () => {
    const params = omit(payload, ['workspace_id']);
    return deleteSynonym
      .test(params)
      .then(() => {
        assert.fail('No failure on missing workspace_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if entity is missing', () => {
    const params = omit(payload, ['entity']);
    return deleteSynonym
      .test(params)
      .then(() => {
        assert.fail('No failure on missing entity');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if value is missing', () => {
    const params = omit(payload, ['value']);
    return deleteSynonym
      .test(params)
      .then(() => {
        assert.fail('No failure on missing value');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if synonym is missing', () => {
    const params = omit(payload, ['synonym']);
    return deleteSynonym
      .test(params)
      .then(() => {
        assert.fail('No failure on missing synonym');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    const params = payload;
    return deleteSynonym
      .test(params)
      .then(() => {
        assert.ok(true);
      })
      .catch(() => {
        assert.fail('Failure on valid payload');
      });
  });
});
