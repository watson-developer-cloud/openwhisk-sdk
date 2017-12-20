const assert = require('assert');
const nock = require('nock');
const path = require('path');
const fs = require('fs');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const auth = require('../../resources/auth');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let addDocument = require('../../../actions/discovery-v1/add-document');

let ow;
let credentials;
let payload = {
  environment_id: 'example_environment_id',
  collection_id: 'example_collection_id',
  metadata: {
    creator: 'example_creator',
    subject: 'example_subject'
  },
  file: fs
    .readFileSync(path.join(__dirname, '/../../resources/discovery_document.txt'))
    .toString()
};

before(() => {
  if (process.env.TEST_OPENWHISK) {
    ow = openwhisk(auth.ow);
    addDocument = adapt(addDocument, 'discovery-v1/add-document', ow);
    credentials = auth.discovery;
  } else {
    credentials = {
      username: 'username',
      password: 'password',
      version_date: 'version-date'
    };
    beforeEach(() => {
      nock('https://gateway.watsonplatform.net/discovery')
        .post(`/api/v1/environments/${payload.environment_id}`
              + `/collections/${payload.collection_id}/documents`)
        .query({
          version: credentials.version_date
        })
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('add-document', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return addDocument
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if environment_id is missing', () => {
    const params = omit(payload, ['environment_id']);
    return addDocument
      .test(params)
      .then(() => {
        assert.fail('No failure on missing environment_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if collection_id is missing', () => {
    const params = omit(payload, ['collection_id']);
    return addDocument
      .test(params)
      .then(() => {
        assert.fail('No failure on missing collection_id');
      })
      .catch(err => negativeHandler(err));
  });

  it('should generate a valid payload', () => {
    const params = payload;
    return addDocument
      .test(params)
      .then((res) => {
        // cleanup
        params.document_id = res.document_id;
        if (process.env.TEST_OPENWHISK) {
          return ow.actions
            .invoke({
              name: 'discovery-v1/delete-document',
              blocking: true,
              result: true,
              params
            })
            .then(() => {
              assert.ok(true);
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
  });
});
