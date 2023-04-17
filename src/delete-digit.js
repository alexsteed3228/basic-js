const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let s = String(n),
      res = [];
  for(let i = 0; i< s.length; i++){
    res.push(+s.replace(s[i], ''))
  }
  return Math.max(...res)
  
}

module.exports = {
  deleteDigit
};
