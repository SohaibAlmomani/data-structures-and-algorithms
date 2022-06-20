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

/* test for Code Challenge: Class 06 */

test('Can successfully add a node to the end of the linked list', () => {
  const ll = new LinkedList();
  ll.append('20');
  expect(ll.head.next).toBeNull();
});

test('Can successfully add multiple nodes to the end of a linked list', () => {
  const ll = new LinkedList();
  ll.append('10');
  ll.append('20');
  expect(ll.head.next.data).toEqual('20');
  expect(ll.head.next.next).toBeNull();
});

test('Can successfully insert a node before a node located i the middle of a linked list', () => {
  const ll = new LinkedList();
  ll.append('10');
  ll.append('20');
  ll.append('30');
  ll.insertBefore('20', 'x');
  expect(ll.head.next.data).toEqual('x');
  expect(ll.head.next.next.data).toEqual('20');
});

test('Can successfully insert a node before the first node of a linked list', () => {
  const ll = new LinkedList();
  ll.append('10');
  ll.append('20');
  ll.insertBefore('10', 'f');
  // console.log(ll.toString());
  expect(ll.head.data).toEqual('f');
});

test('Can successfully insert after a node in the middle of the linked list', () => {
  const ll = new LinkedList();
  ll.append('10');
  ll.append('20');
  ll.append('30');
  ll.insertAfter('20', 'x');
  expect(ll.head.next.next.data).toEqual('x');
  expect(ll.head.next.next.next.data).toEqual('30');

});

test('Can successfully insert a node after the last node of the linked list', () => {
  const ll = new LinkedList();
  ll.append('10');
  ll.append('20');
  ll.append('30');
  ll.insertAfter('30', 'x');
  expect(ll.head.next.next.next.data).toEqual('x');
  expect(ll.head.next.next.next.next).toBeNull();

});

/* Test for Code Challenge: Class 07 */

test('Where k is greater than the length of the linked list', () => {
  const ll = new LinkedList();
  ll.append('10');
  expect(ll.kthFormEnd(2)).toEqual('Exception');
});

test('Where k and the length of the list are the same', () => {
  const ll = new LinkedList();
  ll.append('10');
  ll.append('20');
  expect(ll.kthFormEnd(1)).toEqual('10');
});

test('Where k is not a positive integer', () => {
  const ll = new LinkedList();
  ll.append('10');
  expect(ll.kthFormEnd(-1)).toEqual('Exception');
});

test('Where the linked list is of a size 1', () => {
  const ll = new LinkedList();
  ll.append('10');
  expect(ll.kthFormEnd(0)).toEqual('10');
});

test('Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
  const ll = new LinkedList();
  ll.append('10');
  ll.append('20');
  ll.append('30');
  ll.append('40');
  ll.append('50');
  expect(ll.kthFormEnd(3)).toEqual('20');
});

/* Test for Code Challenge: Class 08 */

test('In case (1) zipLists method, where two linked lists have the same length', () => {
  const ll1 = new LinkedList();
  const ll2 = new LinkedList();
  let ll = new LinkedList();
  ll1.append(1);
  ll1.append(3);
  ll1.append(2);
  ll2.append(5);
  ll2.append(9);
  ll2.append(4);
  ll = ll1.zipLists(ll1, ll2);
  expect(ll.toString()).toEqual('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> NULL');
});

test('In case (2) zipLists method, where the length of linked list 2 is greater than the length of linked list 1', () => {
  const ll1 = new LinkedList();
  const ll2 = new LinkedList();
  let ll = new LinkedList();
  ll1.append(1);
  ll1.append(3);
  ll2.append(5);
  ll2.append(9);
  ll2.append(4);
  ll = ll1.zipLists(ll1, ll2);
  expect(ll.toString()).toEqual('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 4 } -> NULL');
});

test('In case (3) zipLists method, where the length of linked list 1 is greater than the length of linked list 2', () => {
  const ll1 = new LinkedList();
  const ll2 = new LinkedList();
  let ll = new LinkedList();
  ll1.append(1);
  ll1.append(3);
  ll1.append(2);
  ll2.append(5);
  ll2.append(9);
  ll = ll1.zipLists(ll1, ll2);
  expect(ll.toString()).toEqual('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> NULL');
});
