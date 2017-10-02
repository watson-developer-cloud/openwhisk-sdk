const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');

/**
 * @param {Object} params The parameters to call the service
 * @param {String} [params.username] - required unless use_unauthenticated is set
 * @param {String} [params.password] - required unless use_unauthenticated is set
 * @param {String} params.version_date - service version date
 * @param {Boolean} [params.use_unauthenticated] - skip credential requirement
 * @param {String} [params.url] - override default service base url
 * @param {Object} [params.headers] - The header parameters
 * @param {Boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {String} [params.headers.accept-language=en] - The desired language of the response
 * @param {String} [params.headers.content-type=text/plain] - The content type of the request:
 * text/plain (the default), text/html, or application/json
 * @param {String} [params.headers.content-language=en] - The language of the input text for the
 * request: ar (Arabic), en (English), es (Spanish), or ja (Japanese)
 * @param {String} [params.headers.accept=application/json] - The desired content type of the
 * response: application/json (the default) or text/csv
 * @param {String} [params.text] - The text to analyze
 * @param {Object} [params.content_items] - A JSON input (if 'text' not provided)
 * @param {Boolean} [params.raw_scores=false] - include raw results
 * @param {Boolean} [params.csv_headers=false] - If true, column labels are returned with a CSV
 * response; if false (the default), they are not. Applies only when the Accept header is set to
 * text/csv
 * @param {Boolean} [params.consumption_preferences=false] - If true, information about consumption
 * preferences is returned with the results
 * @return {Promise}
 */
function main(params) {
  return new Promise((resolve, reject) => {
    let service;
    try {
      service = new PersonalityInsightsV3(params);
    } catch (err) {
      reject(err);
    }

    service.profile(params, (err, profile) => {
      if (err) {
        reject(err);
      } else {
        resolve(profile);
      }
    });
  });
}

module.exports.main = main;
