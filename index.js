/**
 * Random pass/fail per rate [0-1]
 * @param  {Number} rate Decimal fraction
 * @return {Boolean}
 */
function sampleRate (rate) {
  return Math.random() < rate
}
export default sampleRate
