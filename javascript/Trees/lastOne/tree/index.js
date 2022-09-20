"use strict";

const Node = require("./node");

const BinarySearchTree = require("./BinarySearchTree");
const DFS_functionOfOrders = require("./DFS_functionOfOrders");
const SumOfNodes = require("./SumOfNodes");
const invertTree = require("./InvertTree");
const MaxNode = require("./maxValue");
const MinNode = require("./minValue");
const IsBST = require("./isBST");
const IsSameTree = require("./isSameTree");
const LevelOrderBottom = require("./levelOrderBottom");
const MaxDepth = require("./maxDepth");

// var tree = new BinarySearchTree();

// tree.insert(10);
// tree.insert(6);
// tree.insert(15);
// tree.insert(3);
// tree.insert(8);
// tree.insert(20);

//       10
//     6    15
//   3   8     20

// let one = new Node(10);
// let two = new Node(6);
// let three = new Node(15);
// let four = new Node(3);
// let five = new Node(8);
// let six = new Node(20);

// one.left = two;
// one.right = three;
// two.left = four;
// two.right = five;
// three.right = six;

// let one1 = new Node(10);
// let two2 = new Node(6);
// let three3 = new Node(15);
// let four4 = new Node(3);
// let five5 = new Node(8);
// let six6 = new Node(20);

// one1.left = two2;
// one1.right = three3;
// two2.left = four4;
// two2.right = five5;
// three3.right = six6;

let one = new Node(1);
let two2 = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five5 = new Node(5);
let six = new Node(6);
let seven7 = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two2;
one.right = three;
two2.left = six;
six.right = seven7;
seven7.left = eight;
seven7.right = nine;
three.left = four;
three.right = five5;

//              1
//          2       3
//       6       4    5
//          7
//        8   9

// console.log(tree.maxNode());
// console.log(tree.minNode());
// console.log(tree.BFS());
// console.log(tree.levelOrderBottom());///////////////////////////////////////////
// console.log(tree.DFS_PreOrder());
// console.log("preOrder ==> ",DFS_functionOfOrders.preOrder(tree));
// console.log("postOrder ==> ",DFS_functionOfOrders.postOrder(tree));
// console.log("inOrder ==> ",DFS_functionOfOrders.inOrder(tree));
// console.log("sum ==> ",SumOfNodes.sumOfNode(one));
// console.log("sum Even ==> ",SumOfNodes.sumEven(one));
// console.log("sum Odd ==> ",SumOfNodes.sumOdd(one));
// console.log("sum Of Leaf ==> ", SumOfNodes.sumOfLeaf(one));
// console.log("invert Tree ==> ",invertTree.invertTree(one));
// console.log("max value in Binary Tree ==> ", MaxNode.maxNode(one));
// console.log("Min value in Binary Tree ==> ", MinNode.minNode(one));
// console.log("Is this Tree BST ==> ", IsBST.isBST(one));
// console.log("Is this Tree is Same Tree ==> ", IsSameTree.isSameTree(one,one1));
// console.log("levelOrderBottom ==> ", LevelOrderBottom.levelOrderBottom(one));///////////////
console.log("Max Depth ==> ", MaxDepth.maxDepth(one));
