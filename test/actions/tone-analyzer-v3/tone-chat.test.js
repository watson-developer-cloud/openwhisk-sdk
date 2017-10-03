const assert = require('assert');
const nock = require('nock');
const action = require('../../../actions/tone-analyzer-v3/tone-chat');

describe('[action] ToneAnalyzer', () => {
  beforeEach(() => {
    nock('https://gateway.watsonplatform.net/tone-analyzer')
      .post('/api/v3/tone_chat')
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
        assert(err.message ===
            'Argument error: username and password are required unless use_unauthenticated is set');
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
        assert(err.message ===
            'Argument error: username and password are required unless use_unauthenticated is set');
      });
  });

  it('should fail if username is not provided', () => {
    const params = {
      password: 'fake password',
      utterances: [{ text: 'fake text', user: 'fake user' }],
      version_date: 'fake version date',
    };
    return action
      .main(params)
      .then(() => {
        assert.fail('Missing username error was not found');
      })
      .catch((err) => {
        assert(err.message ===
            'Argument error: username and password are required unless use_unauthenticated is set');
      });
  });

  it('should fail if password is not provided', () => {
    const params = {
      username: 'fake username',
      utterances: [{ text: 'fake text', user: 'fake user' }],
      version_date: 'fake version date',
    };
    return action
      .main(params)
      .then(() => {
        assert.fail('Missing password error was not found');
      })
      .catch((err) => {
        assert(err.message ===
            'Argument error: username and password are required unless use_unauthenticated is set');
      });
  });

  it('should fail if version_date is not provided', () => {
    const params = {
      username: 'fake username',
      password: 'fake password',
      utterances: [{ text: 'fake text', user: 'fake user' }],
    };
    return action
      .main(params)
      .then(() => {
        assert.fail('Missing version_date error was not found');
      })
      .catch((err) => {
        assert(err.message ===
            'Argument error: version_date was not specified, use 2016-05-19');
      });
  });

  it('should fail if utterances is not provided', () => {
    const params = {
      username: 'fake username',
      password: 'fake password',
      version_date: 'fake version date',
    };

    return action
      .main(params)
      .then(() => {
        assert.fail('Missing utterances error was not found');
      })
      .catch((err) => {
        assert(err.message === 'Missing required parameters: utterances');
      });
  });

  it('it should pass if all required parameters are provided', () => {
    const params = {
      username: 'fake username',
      password: 'fake password',
      version_date: 'fake version date',
      utterances: [{ text: 'fake text', user: 'fake user' }],
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
      utterances: [{ text: 'fake text', user: 'fake user' }],
      version_date: 'fake version date',
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
