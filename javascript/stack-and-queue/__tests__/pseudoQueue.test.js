'use strict';

const PseudoQueue = require('../stack-queue-pseudo');

describe('Pseudo Queue TEST', () => {

  test('Can successfully enqueue into a queue', () => {
    const newPseudoQueue = new PseudoQueue();
    newPseudoQueue.enqueue('1');
    expect(newPseudoQueue.firstStack.top.value).toEqual('1');
  });

  test('Can successfully enqueue multiple values into a queue', () => {
    const newPseudoQueue = new PseudoQueue();
    newPseudoQueue.enqueue('1');
    newPseudoQueue.enqueue('2');
    newPseudoQueue.enqueue('3');
    expect(newPseudoQueue.firstStack.top.value).toEqual('3');
    expect(newPseudoQueue.firstStack.top.next.value).toBe('2');
    expect(newPseudoQueue.firstStack.top.next.next.value).toBe('1');
  });

  test('Can successfully dequeue out of a queue the expected value', () => {
    const newPseudoQueue = new PseudoQueue();
    newPseudoQueue.enqueue('1');
    newPseudoQueue.enqueue('2');
    newPseudoQueue.enqueue('3');
    newPseudoQueue.dequeue();
    newPseudoQueue.dequeue();
    newPseudoQueue.dequeue();
    expect(newPseudoQueue.secondStack.top.value).toEqual('1');
    expect(newPseudoQueue.firstStack.top).toBeNull();
  });

  test('Can successfully instantiate an empty queue', () => {
    const newPseudoQueue = new PseudoQueue();
    expect(newPseudoQueue).toBeDefined();
    expect(newPseudoQueue.firstStack.top).toBeNull();
    expect(newPseudoQueue.secondStack.top).toBeNull();
  });

  test('Can successfully see if the Queue is Empty from the exception', () => {
    const newPseudoQueue = new PseudoQueue();
    expect(newPseudoQueue.dequeue()).toBe('Both Stakes is Empty');
  });

});
