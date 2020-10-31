const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainStr: [],
  getLength() {
    //console.log("returning length")
    return this.chainStr.length
  },
  addLink(value) {
    if (value === null) {
      //console.log("adding link - EMPTY")
      this.chainStr.push("null");
    } else {
      //console.log("adding link " + value)
      this.chainStr.push(value);
      
    }
    //console.log(this.chainStr)
    return this
  },
  removeLink(position) {
    //console.log("removing link " + position);
    if (isNaN(position)) {
      this.chainStr = [];
      throw Error;
    }
    this.chainStr.splice(position-1, 1)
    //console.log(this.chainStr)
    return this;
  },
  reverseChain() {
    //console.log("reversing chain");
    this.chainStr.reverse();
    //console.log(this.chainStr)
    return this;
  },
  finishChain() {
    
    let answerChain = this.chainStr.slice(0);
    this.chainStr = [];
    //console.log("finish chain : ( "+ answerChain.join(" )~~( ") + " )")
    answerChain = "( "+ answerChain.join(" )~~( ") + " )"
    return answerChain;
  }
};

module.exports = chainMaker;
