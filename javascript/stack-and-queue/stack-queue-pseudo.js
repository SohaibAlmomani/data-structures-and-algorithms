'use strict';

const Stack = require('./Stack');

class PseudoQueue {

  constructor() {
    this.firstStack = new Stack();
    this.secondStack = new Stack();
  }

  enqueue(value) {
    this.firstStack.push(value);
  }

  dequeue() {
    if (this.firstStack.top) {
      this.secondStack.push(this.firstStack.top.value);
      return this.firstStack.pop();
    }
    else {
      return 'Both Stakes is Empty';
    }
  }

}

module.exports = PseudoQueue;
