const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth( arr ) {
    let k=0,
    stack = [],
    res = [];
    for(let i=0; i<arr.length; i++){
      if(Array.isArray(arr[i])){
        
        k += this.calculateDepth(arr[i]);
        
      }
      
    }
    k++;
    return k
  }
}

module.exports = {
  DepthCalculator
};

const s = new DepthCalculator;
console.log(s.calculateDepth([1,2,[3,4]]));
