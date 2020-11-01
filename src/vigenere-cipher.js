const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(message, key) {
    //console.log("start data for encrypt")
    //console.log(message)
    //console.log(key)
    message = message.toUpperCase()
    key = key.toUpperCase();
    if (message === undefined || key === undefined) {
      throw Error;
    }
    let alphabetCodes = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    alphabetCodes = alphabetCodes.split("")
    //console.log(alphabetCodes)
    let cryptoCode = "";
    let keyIndex = 0
    for (let index = 0; index < message.length; index++) {
      if (alphabetCodes.includes(message[index])) {
        let messageChar = message[index]
        let keyChar = keyIndex > key.length -1 ? key[keyIndex % key.length] : key[keyIndex]
        keyIndex++;
        let cryptoChar = alphabetCodes.indexOf(messageChar) + alphabetCodes.indexOf(keyChar)
        cryptoChar = cryptoChar > alphabetCodes.length -1 ? alphabetCodes[cryptoChar % alphabetCodes.length] 
                                                          : alphabetCodes[cryptoChar];

        //console.log(messageChar + " --- " + keyChar + "--->" + cryptoChar)
        cryptoCode += cryptoChar;
      } else {
        cryptoCode += message[index];
      }
    }
    //console.log(cryptoCode)
    return cryptoCode;
  }    
  decrypt(encMessage, key) {
    //console.log("start data for DEcrypt")
    //console.log(encMessage)
    //console.log(key)
    encMessage = encMessage.toUpperCase()
    key = key.toUpperCase();
    let alphabetCodes = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    alphabetCodes = alphabetCodes.split("")
    
    let encCode = "";
    let keyIndex = 0
    for (let index = 0; index < encMessage.length; index++) {
      if (alphabetCodes.includes(encMessage[index])) {
        let messageChar = encMessage[index]
        let keyChar = keyIndex > key.length -1 ? key[keyIndex % key.length] : key[keyIndex]
        keyIndex++;
        let encCharCode = alphabetCodes.indexOf(encMessage[index])
        let encKeyCode = alphabetCodes.indexOf(keyChar)
        let encChar = (encCharCode - encKeyCode) < 0 ? alphabetCodes[encCharCode - encKeyCode + alphabetCodes.length] 
                                                     : alphabetCodes[encCharCode - encKeyCode]
        //console.log(encCharCode - encKeyCode)

        //console.log("ENCRYPTED --- " + encMessage[index] + " ---> " + encChar)
        encCode += encChar;
      } else {
        encCode += encMessage[index];
      }
      
    }


    //console.log(encCode);
    return encCode;

  }
}

module.exports = VigenereCipheringMachine;
