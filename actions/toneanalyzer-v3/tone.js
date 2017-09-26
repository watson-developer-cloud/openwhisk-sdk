const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

/**
 * @param {Object} params - The parameters object
 * @param {String} [params.username] - The ToneAnalyzer service username
 * @param {String} [params.password] - The ToneAnalyzer service password
 * @param {Boolean} [params.use_unauthenticated] - Skip credential requirement
 * @param {Object} [params.headers]
 * @param {Boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - Opt-out of data collection
 * @param {String} params.version_date - The ToneAnalyzer service version date
 * @param {String} params.text - The Text To Be Analyzed For Tone
 * @param {String} [params.tone = ['emotion','language','social']] - A list of tones for which the
 * service to return its analysis of the input
 * @param {Boolean} [params.sentences = true] - Indicates whether the service is to
 * return an analysis of each individual sentence in addition to its analysis of the full document
 * @param {Boolean} [params.isHTML = true] - Indicates whether the text parameter provides HTML input
 * 
 * @return {Promise}
 */
function main(params) {
  return new Promise((resolve, reject) => {
    const service = new ToneAnalyzerV3(params);

    service.tone(params, (err, tone) => {
      if (err) {
        reject(err);
      } else {
        resolve(tone);
      }
    });
  });
}

module.exports.main = main;
