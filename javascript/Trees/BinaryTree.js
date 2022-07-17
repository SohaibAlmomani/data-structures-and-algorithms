'use strict';

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  // Pre-order >> root - left - right
  preOrder() {
    let result = [];
    let traverse = (node) => {
      result.push(node.value);
      // if left then go left
      if (node.left) traverse(node.left);
      // if right then go right
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  // In-Order >> left - root - right
  inOrder() {
    let result = [];
    let traverse = (node) => {
      // if left then go left
      if (node.left) traverse(node.left);
      result.push(node.value);
      // if right then go right
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  // Post-Order >> left - right - root
  postOrder() {
    let result = [];
    let traverse = (node) => {
      // if left then go left
      if (node.left) traverse(node.left);
      // if right then go right
      if (node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }

  // Code Challenge: Class 16 ==> Find the Maximum Value in a Binary Tree
  findMaxValue() {
    let max = 0;
    if (!this.root) return 'Empty Tree';
    let traverse = (node) => {
      if (node.value > max) {
        max = node.value;
      }
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return max;
  }
}

module.exports = BinaryTree;
