"use strict";

function sumOfNode(root) {
    var sum = 0;
    function traverse(node) {
        sum += node.value;
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }
    traverse(root);
    return sum;
}

function sumEven(root) {
    var sum = 0;
    function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        if (node.value % 2 === 0) {
            sum += node.value;
        }
    }
    traverse(root);
    return sum;
}

function sumOdd(root) {
    var sum = 0;
    function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        if (node.value % 2 !== 0) {
            sum += node.value;
        }
    }
    traverse(root);
    return sum;
}

function sumOfLeaf(root) {
    if (!root) return undefined;
    var sum = 0;
    function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        if (!node.left && !node.right) {
            sum += node.value;
        }
    }
traverse(root);
return sum;
}

module.exports = {
    sumOfNode,
    sumEven,
    sumOdd,
    sumOfLeaf
};
