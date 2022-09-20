"use strict";

function isBST(root) {
  if (!root) return undefined;

  var result = false;

  function traverse(node) {
    if (root.left.value < node.value && root.right.value > node.value) {
      result = true;
    }
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }
  traverse(root);
  return result;
}

module.exports = { isBST };
