'Use strict';

/*Node : Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node. */

class node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
module.exports = node;
