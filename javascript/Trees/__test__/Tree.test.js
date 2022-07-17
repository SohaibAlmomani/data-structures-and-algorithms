'use strict';

const Node = require('../Node');
const BinaryTree = require('../BinaryTree');
const BinarySearchTree = require('../BinarySearchTree');
//const breadthFirst = require('../tree-breadth-first');

let tree = null;

describe('TREES TEST', () => {
  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    tree = new BinaryTree(one);
  });

  test('1- Can successfully instantiate an empty tree', () => {
    const newTree = new BinaryTree();
    expect(newTree.root).toBeNull();
  });
  test('2- Can successfully instantiate a tree with a single root node', () => {
    let node = new Node(1);
    let tree = new BinaryTree(node);
    expect(tree.root.value).toEqual(1);
  });
  test('3- For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    let node = new Node(2);
    let tree = new BinarySearchTree(node);
    tree.add(1, node);
    tree.add(3, node);
    expect(tree.root.left.value).toEqual(1);
    expect(tree.root.right.value).toEqual(3);
  });
  test('4- Can successfully return a collection from a preOrder traversal', () => {
    let expectedOutput = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    expect(tree.preOrder()).toEqual(expectedOutput);
  });
  test('5- Can successfully return a collection from an inOrder traversal', () => {
    let expectedOutput = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    expect(tree.inOrder()).toEqual(expectedOutput);
  });
  test('6- Can successfully return a collection from a postOrder traversal', () => {
    let expectedOutput = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    expect(tree.postOrder()).toEqual(expectedOutput);
  });
  test('7- false for the contains method, given an existing or non-existing node value', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);
    const node6 = new Node(7);

    let tree = new BinarySearchTree(node1);

    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node2.right = node5;
    node3.left = node6;

    expect(tree.contains(6)).toBe(false);
  });

  // Test for Code Challenge: Class 16 ==> Find the Maximum Value in a Binary Tree
  test('Can successfully return the Maximum Value in a Binary Tree', () => {
    let output = 9;
    let max = tree.findMaxValue(tree.root);
    expect(max).toEqual(output);
  });
  test('Can successfully find and return Empty Tree in findMaxValue function', () => {
    const tree = new BinaryTree();
    expect(tree.findMaxValue(tree.root)).toEqual('Empty Tree');
  });


  // test('Test Breadth First Function', () => {
  //   let two = new Node(2);
  //   let seven = new Node(7);
  //   let five = new Node(5);
  //   let two2 = new Node(2);
  //   let six = new Node(6);
  //   let five2 = new Node(5);
  //   let eleven = new Node(11);
  //   let nine = new Node(9);
  //   let four = new Node(4);

  //   two.left = seven;
  //   two.right = five;
  //   seven.left = two2;
  //   seven.right = six;
  //   six.left = five2;
  //   six.right = eleven;
  //   five.right = nine;
  //   nine.left = four;

  //   const newTree = new BinaryTree(two);
  //   let expectedOutput = [2, 7, 5, 2, 6, 9, 5, 11, 4];
  //   //let bF = newTree.breadthFirst(newTree);
  //   //expect(expectedOutput).toEqual(bF);
  //   expect(breadthFirst(newTree)).toEqual(expectedOutput);
  // });

});
