// function maxDepth (root) {
//     if (!root) return 0;
//     return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
//   }
//   module.exports = {maxDepth};

// function maxDepth(root) {
//   // Root being null means tree doesn't exist.
//   if (root.value == null) return 0;
//   if (!root.left && !root.right) return 1;

//   // Get the depth of the left and right subtree
//   // using recursion.
//   var leftDepth = maxDepth(root.left);
//   var rightDepth = maxDepth(root.right);

//   // Choose the larger one and add the root to it.
//   if (leftDepth > rightDepth) return leftDepth + 1;
//   else return rightDepth + 1;
// }

"use strict";

function maxDepth(root) {
  if (root === null) return undefined;

  var max = 0;
  function traverse(node, count) {
    if (node.left) traverse(node.left, count + 1);
    if (node.right) traverse(node.right, count + 1);
    if (count > max) max = count;
  }
  traverse(root, 1);
  return max;
}

module.exports = { maxDepth };
