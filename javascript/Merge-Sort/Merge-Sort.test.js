'use strict';
const { mergeSort } = require('./Merge-Sort');

describe('Test Merge Sort', () => {

  test('Can successfully Test if array has one element.', () => {
    let arr = [8];
    let result = mergeSort(arr);
    expect(result).toEqual([8]);
  });

  test('Can successfully doing Merge Sort', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    let result = mergeSort(arr);
    expect(result).toEqual([4, 8, 15, 16, 23, 42]);
  });

  test('Can successfully doing Merge Sort for Reverse-sorted input', () => {
    let arr = [20, 18, 12, 8, 5, -2];
    let result = mergeSort(arr);
    expect(result).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  test('Can successfully doing Merge Sort for Few uniques input', () => {
    let arr = [5, 12, 7, 5, 5, 7];
    let result = mergeSort(arr);
    expect(result).toEqual([5, 5, 5, 7, 7, 12]);
  });

  test('Can successfully doing Merge Sort for Nearly-sorted input', () => {
    let arr = [2, 3, 5, 7, 13, 11];
    let result = mergeSort(arr);
    expect(result).toEqual([2, 3, 5, 7, 11, 13]);
  });


});
