"use strict";

const Node = require("./node");

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        var newNode = new Node(value);
        if (value === null) return undefined;
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while (current) {
            if (value === current.value) return "Value Is Exist";
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }
            if (value > current.value) {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(value) {
        if (this.root === null) return undefined;
        let current = this.root;
        while (current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return current;
            }
        }
        if (!current) return "Not Exist";
    }

    contains(value) {
        if (this.root === null) return undefined;
        let current = this.root;

        while (current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        if (!current) return false;
    }

    maxNode() {
        if (this.root === null) return undefined;
        let current = this.root;
        while (current.right) {
            current = current.right;
        }
        return current;
    }

    minNode() {
        if (this.root === null) return undefined;
        let current = this.root;
        while (current.left) {
            current = current.left;
        }
        return current;
    }

    // Breadth First Search : Is visit every node on the same level.
    BFS() {
        if (!this.root) return undefined;
        // if (!this.root.left && !this.root.right) return this.root.value;
        var node = this.root;
        var queue = [];
        var data = [];
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }

    levelOrderBottom() {
        if (!this.root) return undefined;
        // if (!this.root.left && !this.root.right) return this.root.value;
        var node = this.root;
        var queue = [];
        var data = [];
        queue.push(node);
        while (queue.length) {
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            node = queue.shift();
            data.push(node.value);
        }
        return data;
    }



    // Depth First Search : Is visit every node in three ways Order :
    //                         1- Pre-Order ==> Root => Left => Right
    //                         2- Post-Order ==> Left => Right => Root
    //                         3- In-Order ==> Left => Root => Right

    // 1- Pre-Order ==> Root => Left => Right
    DFS_PreOrder() {
        var data = [];
        var current = this.root;
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

}

module.exports = BinarySearchTree;
