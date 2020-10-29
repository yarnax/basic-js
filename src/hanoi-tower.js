const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //console.log("discs = "+ disksNumber + "     Speed turn/hour = " + turnsSpeed);
  let switchCount = Math.pow(2, disksNumber) - 1;
  let secondsToSolve = Math.floor(switchCount/(turnsSpeed/60/60));
  return { "turns": switchCount, "seconds": secondsToSolve };
};
