"use strict";

function invertTree(root) {
  if (!root) return undefined;

  function traverse(node) {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);

    var hold = node.left;
    node.left = node.right;
    node.right = hold;
  }
  traverse(root);
  return root;
}


// function invertTree(tree) {
//   if (tree) {
//     var hold = tree.left;
//     tree.left = tree.right;
//     tree.right = hold;
//     invertTree(tree.left);
//     invertTree(tree.right);
//   }
//   return tree;
// }

module.exports = {
  invertTree,
};
