const assert = require('assert');
const nock = require('nock');
const action = require('../../../actions/personality-insights-v3/profile');
const serviceName = 'PERSONALITY INSIGHTS V3';

describe('[action] Personality Insights', () => {
  beforeEach(() => {
    nock('https://gateway.watsonplatform.net/personality-insights')
      .post('/api/v3/profile')
      .query({
        version: 'fake version date',
      })
      .reply(200, {
        'fake-key': 'fake-value',
      });
  });

  it('should fail if params is undefined', () => {
    const params = undefined;
    return action
      .main(params)
      .then(() => {
        assert.fail('Undefined parameters error was not found');
      })
      .catch((err) => {
        assert(err ===
            `Argument error: username and password are required for ${serviceName} unless use_unauthenticated is set`);
      });
  });

  it('should fail if params is null', () => {
    const params = null;
    return action
      .main(params)
      .then(() => {
        assert.fail('Null parameters error was not found');
      })
      .catch((err) => {
        assert(err ===
          `Argument error: username and password are required for ${serviceName} unless use_unauthenticated is set`);
      });
  });

  it('should fail if username is not provided', () => {
    const params = {
      password: 'fake password',
      version_date: 'fake version date',
      text: 'fake text',
    };
    return action
      .main(params)
      .then(() => {
        assert.fail('Missing username error was not found');
      })
      .catch((err) => {
        assert(err ===
          `Argument error: username and password are required for ${serviceName} unless use_unauthenticated is set`);
      });
  });

  it('should fail if password is not provided', () => {
    const params = {
      username: 'fake username',
      version_date: 'fake version date',
      text: 'fake text',
    };
    return action
      .main(params)
      .then(() => {
        assert.fail('Missing password error was not found');
      })
      .catch((err) => {
        assert(err ===
          `Argument error: username and password are required for ${serviceName} unless use_unauthenticated is set`);
      });
  });

  it('should fail if version_date is not provided', () => {
    const params = {
      username: 'fake username',
      password: 'fake password',
      text: 'fake text',
    };
    return action
      .main(params)
      .then(() => {
        assert.fail('Missing version_date error was not found');
      })
      .catch((err) => {
        assert(err ===
            'Argument error: version_date was not specified');
      });
  });

  it('should fail if neither text nor content_items is provided', () => {
    const params = {
      username: 'fake username',
      password: 'fake password',
      version_date: 'fake version date',
    };
    return action
      .main(params)
      .then(() => {
        assert.fail('Missing text and content_items error was not found');
      })
      .catch((err) => {
        assert(err === 'Missing required parameters: text or content_items');
      });
  });

  it('should pass if all required parameters are provided', () => {
    const params = {
      username: 'fake username',
      password: 'fake password',
      text: 'fake text',
      version_date: 'fake version date',
    };
    return action
      .main(params)
      .then(() => {
        assert(true);
      })
      .catch(assert.ifError);
  });

  it('should pass if all required parameters are provided', () => {
    const params = {
      username: 'fake username',
      password: 'fake password',
      version_date: 'fake version date',
      content_items: { text: 'fake text' },
    };
    return action
      .main(params)
      .then(() => {
        assert(true);
      })
      .catch(assert.ifError);
  });

  it('it should pass if username and password are omitted but use_unauthenticated is set', () => {
    const params = {
      version_date: 'fake version date',
      text: 'fake text',
      use_unauthenticated: true,
    };
    return action
      .main(params)
      .then(() => {
        assert(true);
      })
      .catch(assert.ifError);
  });
});
