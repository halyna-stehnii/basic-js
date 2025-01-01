const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity != 'string') {
    return false;
  }
  let sampleActivityNum = parseFloat(sampleActivity);
  if (
    isNaN(sampleActivityNum) ||
    sampleActivityNum <= 0 ||
    sampleActivityNum >= 15
  ) {
    return false;
  }
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.ceil(
    Math.log(MODERN_ACTIVITY / sampleActivityNum).toFixed(20) / k
  );
  return t;
}

module.exports = {
  dateSample,
};
