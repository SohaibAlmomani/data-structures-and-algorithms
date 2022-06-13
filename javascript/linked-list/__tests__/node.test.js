'use strict';
const Node = require('../node');

describe('node module test', () => {
  test('create successfully node with Data and next', () => {
    const testData = 'test';
    const node = new Node(testData);
    expect(node.data).toBe(testData);
    expect(node.next).toBeNull();
    expect(node).toBeInstanceOf(Node);
  });
});
