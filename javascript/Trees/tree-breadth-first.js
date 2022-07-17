'use strict';

function breadthFirst(tree) {
  let breadth = [tree.root];
  let resultArr = [];
  while (breadth.length) {
    let current = breadth.shift();
    resultArr.push(current.value);
    if (current.left) breadth.push(current.left);
    if (current.right) breadth.push(current.right);
  }
  return resultArr;
}

module.exports = breadthFirst;
