'use strict';
const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insert(data) {
    const node = new Node(data);
    if (this.head) {
      node.next = this.head;
      this.head = node;
      this.size++;
    }
    this.head = node;
    this.size++;
  }
  includes(data) {
    let resultOfData = false;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return resultOfData;
  }
  toString() {
    let currentNode = this.head;
    let string = '';
    while (currentNode) {
      string = string + `{ ${currentNode.data} } -> `;
      currentNode = currentNode.next;
    }
    string += `NULL`;
    return string;
  }
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }
}
// const ll = new LinkedList();
// ll.insert(50);
// ll.insert(60);
// ll.insert(70);

// ll.getAt();
// ll.toString();

// console.log(ll.includes(60));
// console.log(ll.getAt(2));
// console.log(ll.toString());

module.exports = LinkedList;
