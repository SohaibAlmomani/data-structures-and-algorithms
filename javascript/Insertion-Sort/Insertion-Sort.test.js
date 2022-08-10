'use strict';

const sortInsertion = require('./Insertion-Sort');
describe('Test Insertion Sort', () => {

  test('Can successfully sort the array', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    let result = sortInsertion.insertionSort(arr);
    expect(result).toEqual([4, 8, 15, 16, 23, 42]);
  });

});
