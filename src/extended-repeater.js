const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let answerRepeat = "";
  let repeatTimes = options.repeatTimes;
  let additionRepeatTimes = options.additionRepeatTimes;
  let addition = options.addition;
  let separator = options.separator;
  let additionSeparator = options.additionSeparator;

  //str = str.toString();
  //addition = addition.toString();
  if ((additionRepeatTimes === undefined || additionRepeatTimes === null) && (repeatTimes === undefined || repeatTimes === null)) {return str + addition}
  if (separator === undefined || separator === null) { separator = "+" }
  if (additionSeparator === undefined || additionSeparator === null) { additionSeparator = "|" }
  if (repeatTimes === undefined || repeatTimes === null) {repeatTimes = 0}
  if (additionRepeatTimes === undefined || additionRepeatTimes === null) {additionRepeatTimes = 0}
  

  console.log("start data");
  console.log(str);
  console.log(options);

  for (let repT = 0; repT < repeatTimes; repT++) {
    answerRepeat += str;
    for (let adrepT = 0; adrepT < additionRepeatTimes; adrepT++) {
      answerRepeat += addition;
      if (adrepT < additionRepeatTimes - 1) {
        answerRepeat += additionSeparator;
      }  
    }

    if (repT < repeatTimes - 1) {
      answerRepeat += separator;
    } 
    
    
  }
  console.log(answerRepeat);
  return answerRepeat;

};
  