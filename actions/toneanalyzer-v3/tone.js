module.exports.main = main;
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

/**
 * @param {object} params - The parameters object
 * @param {string} params.username - The ToneAnalyzer service username
 * @param {string} params.password - The ToneAnalyzer service password
 * @param {string} [params.version_date = '2016-05-19'] - The ToneAnalyzer service version date
 * @param {string} params.text - The Text To Be Analyzed For Tone
 * @param {string} [params.tone = ['emotion','language','social']] - A list of tones for which the service to return its analysis of the input
 * @param {boolean} [params.sentences = true] - Indicates whether the service is to return an analysis of each individual
 * sentence in addition to its analysis of the full document
 * @param {boolean} [params.isHTML = true] - Indicates whether the text parameter provides HTML input
 */
function main(params) {
  return new Promise(((resolve, reject) => {
    const service = new ToneAnalyzerV3({
      username: params.username,
      password: params.password,
      version_date: params.version_date,
    });

    service.tone(params, (err, tone) => {
      if (err) {
        reject(err);
      } else {
        resolve(tone);
      }
    });
  }));
}
