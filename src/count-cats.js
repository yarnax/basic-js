const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let catCount=0;
  matrix.forEach(subarray => {
    subarray.forEach(element => {
      if (element === "^^") {
        catCount ++;
      }
    });
  });
  return catCount;
};
