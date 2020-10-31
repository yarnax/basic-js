const CustomError = require("../extensions/custom-error");

module.exports = function transform(arrayStart) {
  
  let copiedArray = [];
  copiedArray = arrayStart.slice(0);

  //console.log("start array = " + arrayStart)
  if (!(Array.isArray(arrayStart))) {
    throw Error;
  };
  
  if (arrayStart.length === 0) {
    return arrayStart;
  }

  for (let index = 0; index < copiedArray.length; index++) {
    //console.log("for statement starts")
    switch (copiedArray[index]) {
      case "--discard-next":

        if (index + 1 < copiedArray.length) {
          delete copiedArray[index + 1];
        }
        delete copiedArray[index];
        //copiedArray.splice(index, 1);
        //index--;
        break;

      case "--discard-prev":
        delete copiedArray[index]
        //copiedArray.splice(index, 1);
        if (index - 1 >= 0) {
          delete copiedArray[index - 1]
          //copiedArray.splice(index -1, 1);
        }
        //index--;
        break;

      case "--double-next":
        if ((index + 1 < copiedArray.length) && (copiedArray[index+1] !== undefined)) {
          copiedArray[index] = copiedArray[index + 1]
        } else {
          delete copiedArray[index]
          //copiedArray.splice(index, 1);
        }
        //index--;
        break;

      case "--double-prev":
        
        if ((index - 1 >= 0) && (copiedArray[index-1] !== undefined)) {
          copiedArray[index] = copiedArray[index - 1];
        } else {
          delete copiedArray[index]
          //copiedArray.splice(index, 1);
        }
        //index--;
        break;

      default:
        break;
    }

  }

  //console.log("after operations -----  " + copiedArray)

  for (let index = 0; index < copiedArray.length; index++) {
    if (copiedArray[index] === undefined || copiedArray[index] === "") {
      copiedArray.splice(index, 1)
      index--;
    }
    
  }

  
  //console.log("result array = " + copiedArray)
  //console.log("START array = " + arrayStart)
  return copiedArray;
};
