'use strict';
const LinkedList = require('../Linked-List');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
});

test('Can successfully instantiate an empty linked list', () => {
  const ll = new LinkedList();
  expect(ll).toBeInstanceOf(LinkedList);
  expect(ll.head).toBeNull();
});

test('Add a new node with that data to the head', () => {
  const ll = new LinkedList();
  ll.insert('10');

  expect(ll.head.data).toEqual('10');
  expect(ll.head.next).toBeNull();
});

test('The head property will properly point to the first node in the linked list', () => {
  const ll = new LinkedList();
  ll.insert('10');
  ll.insert('20');
  ll.insert('30');

  expect(ll).toBeDefined();
  expect(ll.head.data).toEqual('30');
  expect(ll.head.next).toBeTruthy();
});

test('Can properly insert multiple nodes into the linked list', () => {
  const ll = new LinkedList();
  ll.insert('10');
  ll.insert('20');
  ll.insert('30');

  expect(ll.head.data).toEqual('30');
  expect(ll.head.next.data).toEqual('20');
  expect(ll.head.next.next.data).toEqual('10');
  expect(ll.head.next.next.next).toBeNull();
});

test('Will return true when finding a data within the linked list that exists', () => {
  const ll = new LinkedList();
  ll.insert('10');
  ll.insert('20');
  ll.insert('30');

  expect(ll.includes('10')).toEqual(true);
  expect(ll.includes('20')).toEqual(true);
  expect(ll.includes('30')).toEqual(true);
  expect(ll.includes('e')).toEqual(false);
});

test('Will return false when searching for a data in the linked list that does not exist', () => {
  const ll = new LinkedList();
  ll.insert('10');
  ll.insert('20');

  expect(ll.includes('20')).toEqual(true);
  expect(ll.includes('30')).toEqual(false);
});

test('Can properly return a collection of all the data that exist in the linked list', () => {
  const ll = new LinkedList();
  ll.insert('30');
  ll.insert('20');
  ll.insert('10');

  expect(ll.toString()).toEqual('{ 10 } -> { 20 } -> { 30 } -> NULL');
});
