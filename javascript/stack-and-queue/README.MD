# Stacks and Queues

<!-- Short summary or background information -->

### Stack :

A stack : is a data structure that consists of Nodes. Each Node references the next Node in the stack, but does not reference its previous.

The main concept for the stack is :

- LIFO ==> Last In First Out.
- FILO ==> First In Last Out.

### Queue :

A stack : is a data structure that consists of Nodes.

The main concept for the queue is :

- FIFO ==> First In First Out.
- LILO ==> Last In Last Out.

## Challenge

<!-- Description of the challenge -->

Create Stack and Queue classes with

These functions for Stack class :

- push
- pop
- peek
- isEmpty

And these functions for Queue class :

- enqueue
- dequeue
- peek
- isEmpty

Write tests to prove the following functionality:

- Can successfully push onto a stack
- Can successfully push multiple values onto a stack
- Can successfully pop off the stack
- Can successfully empty a stack after multiple pops
- Can successfully peek the next item on the stack
- Can successfully instantiate an empty stack
- Calling pop or peek on empty stack raises exception
- Can successfully enqueue into a queue
- Can successfully enqueue multiple values into a queue
- Can successfully dequeue out of a queue the expected value
- Can successfully peek into a queue, seeing the expected value
- Can successfully empty a queue after multiple dequeues
- Can successfully instantiate an empty queue
- Calling dequeue or peek on empty queue raises exception

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

- Understand the problem first.
- Write the code.
- Make the tests.

The Big O for this approach is :
we didn't use any loop then :

- Time : O(1).
- Space : O(1).

### All Test is passed :


  ![Stack and Queue test](./assets/Stack%20and%20Queue%20test.png)


## API

<!-- Description of each method publicly available to your Stack and Queue-->

### Stack class:

The class should contain the following methods:

1. `push(value)`
   - Arguments: value.
   - adds a new node with that value to the top of the stack with an O(1) Time performance.
2. `pop()`
   - Arguments: none.
   - Returns: the value from node from the top of the stack.
   - Removes the node from the top of the stack.
   - Should raise exception when called on empty stack.
3. `peek()`
   - Arguments: none.
   - Returns: Value of the node located at the top of the stack.
   - Should raise exception when called on empty stack.
4. `isEmpty()`
   - Arguments: none.
   - Returns: Boolean indicating whether or not the stack is empty.

### Queue class:

The class should contain the following methods:

1. `enqueue(value)`
   - Arguments: value.
   - adds a new node with that value to the back of the queue with an O(1) Time performance.
2. `dequeue()`
   - Arguments: none.
   - Returns: the value from node from the front of the queue.
   - Removes the node from the front of the queue.
   - Should raise exception when called on empty queue.
3. `peek()`
   - Arguments: none.
   - Returns: Value of the node located at the front of the queue.
   - Should raise exception when called on empty stack.
4. `isEmpty()`
   - Arguments: none.
   - Returns: Boolean indicating whether or not the queue is empty.
