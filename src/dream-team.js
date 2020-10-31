const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //console.log(members);
  if (!(Array.isArray(members))) {return false}
  let teamName = [];
  members.forEach(element => {
    
    //console.log(element)
    if (typeof element === "string") {
      element = element.trim();
      teamName.push(element[0]);
    }
    //console.log("array -- " + teamName)
    
  });
  let upperName = []
  teamName.forEach(element => {
    upperName.push(element.toUpperCase());
    //console.log(element)
  });

  upperName = upperName.sort()
  //console.log("sorted ---------- " + upperName);
  upperName = upperName.join("");
  //console.log("name of the team -- " + upperName)
  return upperName;
};
