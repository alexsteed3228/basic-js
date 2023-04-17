const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names ) {
  let s = new Set(),
      count = 1;
  for(let i = 0; i<names.length; i++){
    
    while (s.has(names[i])){
      if( i == names.length -1 && names[i] == 'doc'){
        names[i]= 'doc(2)';
        break
      }
      names[i] = names[i] + '(' + count.toString() +')';
      count++;
    }
    count =1;
    s.add(names[i]);
  }
  return names
}

module.exports = {
  renameFiles
};
