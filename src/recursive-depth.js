const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(value) {
    console.log(value)
    return Array.isArray(value) ? 1 + Math.max(...value.map(this.calculateDepth)) : 0;
  }
};