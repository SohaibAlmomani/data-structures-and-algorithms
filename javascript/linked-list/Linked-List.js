'use strict';
const Node = require('./node');

/* Code Challenge: Linked List Implementation ===> Implementation: Singly Linked Lists */

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  /*insert : Adds a new node with that value to the head of the list with an O(1) Time performance. */
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
  /*includes : Indicates whether that value exists as a Node’s value somewhere within the list. */
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
  /*toString : Returns: a string representing all the values in the Linked List, formatted as:
  "{ a } -> { b } -> { c } -> NULL" */
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

  /* Code Challenge: Class 06 */

  /*append : adds a new node with the given value/data to the end of the list */
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.length++;
      return this;
    }
    else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      this.length++;
      return this;
    }
  }
  /*insert before : adds a new node with the given new value immediately before the first node that has the value specified */
  insertBefore(chosenData, newData) {
    const node = new Node(newData);
    let current = this.head;
    if (current.data === chosenData) {
      this.head = node;
      return this;
    }
    while (current.next) {
      if (current.next.data === chosenData) {
        node.next = current.next;
        current.next = node;
        return this;
      }
      current = current.next;
    }
    return this;
  }

  /*insert after : adds a new node with the given new value immediately after the first node that has the value specified */
  insertAfter(chosenData, newData) {
    const node = new Node(newData);
    let current = this.head;
    while (current.next) {
      if (current.data === chosenData) {
        node.next = current.next;
        current.next = node;
        return this;
      }
      current = current.next;
    }
    if (current.data === chosenData) {
      current.next = node;
      return this;
    }
    return this;
  }

}

// const ll = new LinkedList();
// ll.insert(10);
// ll.insert(20);
// ll.insert(30);
// ll.toString();
// ll.insertBefore(20,80);
// console.log(ll.append(100));
// console.log(ll.insertAfter(10,300));
// console.log(ll.insertBefore(20,80));
// console.log(ll.includes(20));
// console.log(ll.getAt(2));
// console.log(ll.toString());

module.exports = LinkedList;
