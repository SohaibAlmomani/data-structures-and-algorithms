'use strict';

const Stack = require('./Stack');
const Queue = require('./Queue');
const PseudoQueue = require('./stack-queue-pseudo');

/* Stack */
const newStack = new Stack();

newStack.push(1);
newStack.push(2);
newStack.push(3);
console.log(newStack.peek()); //3

// newStack.pop();
// newStack.pop();
// console.log(newStack.peek()); //1

// newStack.pop();
// newStack.pop();
// console.log(newStack.peek()); //

/* Queue */
const newQueue = new Queue();

newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
console.log('front is ', newQueue.peek());

// newQueue.dequeue();
// console.log('front is ', newQueue.peek());

/* PseudoQueue */
const newPseudoQueue = new PseudoQueue();

newPseudoQueue.enqueue(11);
newPseudoQueue.enqueue(22);
newPseudoQueue.dequeue();
console.log(newPseudoQueue);
