'use strict';

function fizzBuzzTree(tree) {

  function fizzBuzzForNewTree(value) {
    if (value % 5 === 0 && value % 3 === 0) {
      return 'FizzBuzz';
    } else if (value % 3 === 0) {
      return 'Fizz';
    } else if (value % 5 === 0) {
      return 'Buzz';
    } else {
      return value.toString();
    }
  }

  function recursive(tree) {
    let finalResult = {};
    for (const key in tree) {
      const value = tree[key];
      if (value && typeof value === 'object') {
        finalResult[key] = recursive(value);
      } else {
        finalResult[key] = fizzBuzzForNewTree(value);
      }
    }
    return finalResult;
  }

  return recursive(tree);
}

module.exports = fizzBuzzTree;
