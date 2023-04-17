const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  
  let obj = {},
      tmp = '';
  
  for(let i =0;i<domains.length;i++){
    tmp = '';
    domains[i] = domains[i].split('.').reverse();
    for(let j=0;j<domains[i].length;j++){
      tmp += '.' + domains[i][j];
      if(!(tmp in obj)){
        obj[tmp] = 1;
      }else{
        obj[tmp]++;
      }
    }
  }
  return obj
  
}

module.exports = {
  getDNSStats
};
