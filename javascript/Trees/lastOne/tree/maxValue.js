"use strict";

function maxNode(root) {
    if (root === null) return undefined;

    var max = root.value;
    function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        if (node.value > max) max = node.value;
    }
    traverse(root);
    return max;
}

module.exports = { maxNode }
