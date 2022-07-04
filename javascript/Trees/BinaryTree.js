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
}

module.exports = BinaryTree;
