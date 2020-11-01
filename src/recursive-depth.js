const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //console.log("start array:")
    //console.log(arr)
    for (let depth = 1; depth < 5; depth++) {
      //console.log("flatten array ")
      //console.log(arr.flat(depth))
      //console.log("flatten array INFINITY")
      //console.log(arr.flat(Infinity))
      //console.log(arr)
      
      if (arr.flat(depth) == arr.flat(Infinity)) {
        //console.log("depth = " + depth)
        return depth;
      }
      
    }
  }
};