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

  /* Code Challenge: Class 07 */

  /* kthFormEnd : Return the node’s data that is k places from the tail of the linked list */
  kthFormEnd(k) {
    let current = this.head;
    let length = 0;
    while (current.next) {
      length++;
      current = current.next;
    }
    if (k > length || k < 0) {
      return "Exception";
    }
    else {
      length = (length) - k;
      current = this.head;
      while (length > 0) {
        current = current.next;
        length--;
      }
      return current.data;
    }
  }

  /* Code Challenge: Class 08 */

  /* zipLists : Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the zipped list. */
  zipLists(list1, list2) {
    let zippedList = new LinkedList();
    let current1 = list1.head;
    let current2 = list2.head;
    while (current1 || current2) {
      if (current1) {
        zippedList.append(current1.data);
        current1 = current1.next;
      }
      if (current2) {
        zippedList.append(current2.data);
        current2 = current2.next;
      }
    }
    return zippedList.toString();
  }

  /* Code Challenge: Class 09  */

  reverse() {
    let prev = null;
    let next = null;
    let current = this.head;
    if (current !== null) {
      while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
      this.head = prev;
      return `{ ${this.data} } -> `;
    }
    return 'this Linked List is empty';
  }

}

// const ll1 = new LinkedList();
// const ll2 = new LinkedList();
let ll = new LinkedList();

// ll.append(1);
// ll.append(2);
// ll.append(3);
// ll.append(4);
// ll.append(5);

ll.append('a');
ll.append('b');
ll.append('c');
ll.append('d');
ll.append('e');

ll.reverse();
console.log(ll.toString());
// ll.toString();
// ll.insertBefore(20,80);
// console.log(ll.append(100));
// console.log(ll.insertAfter(10,300));
// console.log(ll.insertBefore(20,80));
// console.log(ll.includes(20));
// console.log(ll.getAt(2));

//ll = ll1.zipLists(ll1, ll2);
// ll.reverse();

// console.log(ll.kthFormEnd(3));

module.exports = LinkedList;
