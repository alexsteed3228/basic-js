const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  let count = 1,
      tmp,
      res = '';
  if (str.length<1){
    return res;
  }
  for(let i = 1; i<str.length; i++){
    tmp = str[i];
    
    if (str[i] == str[i-1]){
      count++;
      continue;
    }

    if(count > 1){
      res += count.toString() + str[i-1];
      count = 1;
    } else{
      res += str[i-1];
    }
      
      

    
  }
  if(count > 1) {
    res += count.toString() + tmp;
  }else{
    res += tmp;
  }
  return res;
}

module.exports = {
  encodeLine
};
