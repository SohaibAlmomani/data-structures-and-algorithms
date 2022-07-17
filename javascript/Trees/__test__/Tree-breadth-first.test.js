'use strict';

const Node = require('../Node');
const BinaryTree = require('../BinaryTree');
const breadthFirst = require('../tree-breadth-first');

describe('breath first binary tree', () => {
  test(' Can successfully return a list of all values in the tree using breadthFirst function ', () => {
    const a = new Node(2);
    const b = new Node(7);
    const c = new Node(5);
    const d = new Node(2);
    const e = new Node(6);
    const f = new Node(5);
    const g = new Node(11);
    const h = new Node(9);
    const i = new Node(4);

    let tree = new BinaryTree(a);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    e.left = f;
    e.right = g;
    c.right = h;
    h.left = i;

    let expectedOutput = [2, 7, 5, 2, 6, 9, 5, 11, 4];
    expect(breadthFirst(tree)).toEqual(expectedOutput);
  });
});
