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
  teamName = teamName.sort().join("").toUpperCase();
  //console.log("name of the team -- " + teamName)
  return teamName;
};
