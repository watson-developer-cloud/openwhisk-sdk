const assert = require('assert');
const nock = require('nock');
const action = require('../../../actions/toneanalyzer-v3/tone');

describe('[action] ToneAnalyzer', () => {
  beforeEach(() => {
    nock('https://gateway.watsonplatform.net/tone-analyzer')
      .post('/api/v3/tone')
      .query({
        version: 'fake version date'
      })
      .reply(200, {
        'fake-key': 'fake-value'
      });
  });

  it('should fail if params is undefined', () => {
    const params = undefined;
    return action
      .main(params)
      .then(() => {
        assert.fail('Undefined parameters error was not found');
      })
      .catch(err => {
        assert(
          err.message ===
            'Argument error: username and password are required unless use_unauthenticated is set'
        );
      });
  });

  it('should fail if params is null', () => {
    const params = null;
    return action
      .main(params)
      .then(() => {
        assert.fail('Null parameters error was not found');
      })
      .catch(err => {
        assert(
          err.message ===
            'Argument error: username and password are required unless use_unauthenticated is set'
        );
      });
  });

  it('should fail if username is not provided', () => {
    const params = {
      password: 'fake password',
      text: 'fake text',
      version_date: 'fake version date'
    };
    return action
      .main(params)
      .then(() => {
        assert.fail('Missing username error was not found');
      })
      .catch(err => {
        assert(
          err.message ===
            'Argument error: username and password are required unless use_unauthenticated is set'
        );
      });
  });

  it('should fail if password is not provided', () => {
    const params = {
      username: 'fake username',
      text: 'fake text',
      version_date: 'fake version date'
    };
    return action
      .main(params)
      .then(() => {
        assert.fail('Missing password error was not found');
      })
      .catch(err => {
        assert(
          err.message ===
            'Argument error: username and password are required unless use_unauthenticated is set'
        );
      });
  });

  it('should fail if version_date is not provided', () => {
    const params = {
      username: 'fake username',
      password: 'fake password',
      text: 'fake text'
    };
    return action
      .main(params)
      .then(() => {
        assert.fail('Missing version_date error was not found');
      })
      .catch(err => {
        assert(
          err.message ===
            'Argument error: version_date was not specified, use 2016-05-19'
        );
      });
  });

  it('should fail if text is not provided', () => {
    const params = {
      username: 'fake username',
      password: 'fake password',
      version_date: 'fake version date'
    };

    return action
      .main(params)
      .then(() => {
        assert.fail('Missing text error was not found');
      })
      .catch(err => {
        assert(err.message === 'Missing required parameters: text');
      });
  });

  it('it should pass if all required parameters are provided', () => {
    const params = {
      username: 'fake username',
      password: 'fake password',
      version_date: 'fake version date',
      text: 'fake text'
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
      text: 'fake text',
      version_date: 'fake version date',
      use_unauthenticated: true
    };

    return action
      .main(params)
      .then(() => {
        assert(true);
      })
      .catch(assert.ifError);
  });
});
