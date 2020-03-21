module.exports = function check(str, bracketsConfig) {

  if(str.length % 2 !== 0) {
    return false;
  };
  const string = str.split('');
  const arr = [];
  const openBrackets = new Set(bracketsConfig.map(elConfig => elConfig[0]));
  const closeBrackets = new Map(bracketsConfig.map(elConfig => [elConfig[1],elConfig[0]]));

    for (let i =0; i<string.length; i++){

    if (openBrackets.has(string[i])) {

      if (string[i] === arr[arr.length-1] && openBrackets.has(string[i]) && closeBrackets.get(string[i])) {
        arr.pop()
      } else { 
        arr.push(string[i])
      }
    } else {
      let lastArrItem = arr.pop();
      if (lastArrItem !== closeBrackets.get(string[i])){ 
        return false; 
      }
    }
  }
 
  const result = arr.length === 0;
  return result;
}