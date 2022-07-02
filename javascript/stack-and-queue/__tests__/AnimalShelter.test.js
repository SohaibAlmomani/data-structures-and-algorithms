'use strict';
const Queue = require('../stack-queue-animal-shelter');

describe('Linked Queue Test', () => {

  test('Can successfully enqueue into a queue', () => {
    const newQueue = new Queue();
    newQueue.enqueue('cat');
    expect(newQueue.queueOfAnimal.front.value).toBe('cat');
  });

  test('Can successfully enqueue multiple values into a queue', () => {
    const newQueue = new Queue();
    newQueue.enqueue('cat');
    newQueue.enqueue('dog');
    newQueue.enqueue('cat');
    newQueue.enqueue('dog');
    expect(newQueue.queueOfAnimal.front.value).toBe('cat');
    expect(newQueue.queueOfAnimal.front.next.value).toBe('dog');
    expect(newQueue.queueOfAnimal.front.next.next.value).toBe('cat');
    expect(newQueue.queueOfAnimal.rear.value).toBe('dog');
  });

  test('Can successfully dequeue out of a queue the expected value', () => {
    const newQueue = new Queue();
    newQueue.enqueue('cat');
    newQueue.enqueue('dog');
    newQueue.dequeue('cat');
    newQueue.dequeue('dog');
    expect(newQueue.queueOfAnimal.front).toBeNull();
  });

  test('Can successfully instantiate an empty queue', () => {
    const newQueue = new Queue();
    expect(newQueue instanceof Queue).toBeTruthy();
  });

});
