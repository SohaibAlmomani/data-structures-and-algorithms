'use strict';

const Node = require('../../Node');
const BinaryTree = require('../../BinaryTree');
const fizzBuzzTree = require('../tree-fizz-buzz');

describe('Fizz Buzz Tree Test', () => {

  test('Can successfully replace the value with “Fizz” If the value is divisible by 3 ', () => {
    let value = new Node(3);
    let tree = new BinaryTree(value);
    let expectedOutput = fizzBuzzTree(tree);
    expect(expectedOutput.root.value).toEqual('Fizz');
  });
  test('Can successfully replace the value with “Buzz” If the value is divisible by 5 ', () => {
    let value = new Node(5);
    let tree = new BinaryTree(value);
    let expectedOutput = fizzBuzzTree(tree);
    expect(expectedOutput.root.value).toEqual('Buzz');
  });
  test('Can successfully replace the value with “FizzBuzz” If the value is divisible by 3 and 5, ', () => {
    let value = new Node(30);
    let tree = new BinaryTree(value);
    let expectedOutput = fizzBuzzTree(tree);
    expect(expectedOutput.root.value).toEqual('FizzBuzz');
  });
  test('Can successfully turn the number into a String when the value is not divisible by 3 or 5 ', () => {
    let value = new Node(4);
    let tree = new BinaryTree(value);
    let expectedOutput = fizzBuzzTree(tree);
    expect(expectedOutput.root.value).toEqual('4');
  });

});
