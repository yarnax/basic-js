const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sample) {
  console.log("sample age = " + sample + " -- " + typeof sample)
  if (typeof sample !== "string") { return false }
  sample = parseInt(sample);
  if (sample !== "number") { return false }
  console.log("parsed sample = " + sample)
  
  if (sample <= 0 || sample > 16) {
    return false;
  }
  let k = 0.623 / HALF_LIFE_PERIOD;
  let age = Math.ceil( (Math.log(MODERN_ACTIVITY / sample)) / k)
  return age;
};