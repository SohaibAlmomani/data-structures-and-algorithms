"use strict";

function minNode(root) {
    if (root === null) return undefined;

    var min = root.value;
    function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        if (node.value < min) min = node.value;
    }
    traverse(root);
    return min;
}

module.exports = { minNode }