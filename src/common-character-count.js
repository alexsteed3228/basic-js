const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  let obj1 = {},
      obj2 = {};
  for(let i = 0; i<s1.length; i++){
    if (!(s1[i] in obj1)){
      obj1[s1[i]] = 1;
    } else{
      obj1[s1[i]] += 1;
    }
  }
  for(let i = 0; i<s2.length; i++){
    if (!(s2[i] in obj2)){
      obj2[s2[i]] = 1;
    } else{
      obj2[s2[i]] += 1;
    }
  }
  let res = 0;
  for(let key in obj1){
    if(key in obj2){
      res += Math.min(obj1[key], obj2[key])
    }
  }
  return res
}

module.exports = {
  getCommonCharacterCount
};
