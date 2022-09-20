'use strict';

function preOrder(tree) {
        var data = [];
        var current = tree.root;
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }


function postOrder(tree) {
    var data = [];
    var current = tree.root;
    function traverse (node){
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        data.push(node.value);
    }
    traverse(current);
    return data;
}

function inOrder(tree) {
    var data = [];
    var current = tree.root;
    function traverse(node) {
        if (node.left) traverse(node.left);
        data.push(node.value);
        if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
}

module.exports = {preOrder,postOrder,inOrder}