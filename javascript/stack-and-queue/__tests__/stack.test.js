'use strict';

const Stack = require('../Stack');

describe('STACK TEST', () => {

  test('Can successfully push onto a stack', () => {
    const newStack = new Stack();
    newStack.push('a');
    expect(newStack.top.value).toEqual('a');
  });

  test('Can successfully push multiple values onto a stack', () => {
    const newStack = new Stack();
    newStack.push('a');
    newStack.push('b');
    newStack.push('c');
    expect(newStack.top.value).toEqual('c');
    expect(newStack.top.next.value).toBe('b');
    expect(newStack.top.next.next.value).toBe('a');
  });

  test('Can successfully pop off the stack', () => {
    const newStack = new Stack();
    newStack.push('a');
    newStack.push('b');
    newStack.push('c');
    newStack.pop();
    expect(newStack.top.value).toEqual('b');
    expect(newStack.top.next.value).toBe('a');
  });

  test('Can successfully empty a stack after multiple pops', () => {
    const newStack = new Stack();
    newStack.push('a');
    newStack.push('b');
    newStack.push('c');
    newStack.pop();
    newStack.pop();
    newStack.pop();
    expect(newStack.isEmpty()).toEqual(true);
  });

  test('Can successfully peek the next item on the stack', () => {
    const newStack = new Stack();
    newStack.push('a');
    newStack.push('b');
    newStack.push('c');
    expect(newStack.peek()).toEqual('c');
    newStack.pop();
    expect(newStack.peek()).toEqual('b');
  });

  test('Can successfully instantiate an empty stack', () => {
    const newStack = new Stack();
    expect(newStack).toBeDefined();
    expect(newStack.top).toBeNull();
  });

  test('Calling pop or peek on empty stack raises exception', () => {
    const newStack = new Stack();
    expect(newStack.peek()).toBe("Exception");
    expect(newStack.pop()).toBe("Exception");
  });

});
