const PersonalityInsightsV2 = require('watson-developer-cloud/personality-insights/v2');

/**
 * @param {Object} params The parameters to call the service
 * @param {String} [params.username] - required unless use_unauthenticated is set
 * @param {String} [params.password] - required unless use_unauthenticated is set
 * @param {Boolean} [params.use_unauthenticated] - skip credential requirement
 * @param {Object} [params.headers] - The header parameters
 * @param {Boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {String} [params.url] - override default service base url
 * @param {String} [params.text] - The text to analyze
 * @param {Object[]} [params.contentItems] -  A JSON input (if 'text' not provided)
 * @param {Boolean} [params.include_raw=false] -  include raw results
 * @param {String} [params.accept_language=en] - The language expected for the output
 * @param {String} [params.language=en] - the language of the input
 * @return {Promise}
 */
function main(params) {
  return new Promise((resolve, reject) => {
    let service;
    try {
      service = new PersonalityInsightsV2(params);
    } catch (err) {
      reject(err);
    }

    service.profile(params, (err, tone) => {
      if (err) {
        reject(err);
      } else {
        resolve(tone);
      }
    });
  });
}

module.exports.main = main;
