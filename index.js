/**
 * Random pass/fail per rate [0-1]
 * @param  {Number} rate Decimal fraction
 * @return {Boolean}
 */
const sampleRate = rate => Math.random() < rate
export default sampleRate
