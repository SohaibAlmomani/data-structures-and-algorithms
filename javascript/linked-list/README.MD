# Singly Linked List

<!-- Short summary or background information -->

Single linked list is a list that contains nodes linked together, each node has a value and reference to the next node in the list.

## Challenge

<!-- Description of the challenge -->

- Successfully instantiate an empty linked list.
- Insert into the linked list.
- Head point to the first node in the linked list.
- Insert multiple nodes into the linked list.
- Return true when finding a value within the linked list that exists.
- Return false when searching for a value in the linked list that does not exist.
- Return a collection of all the values that exist in the linked list.

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

Create Class LinkedLest that have three main functions :

- insert().
- includes().
- toString().

The Big O for this approach is :

- Time : O(n).
- Space : O(1).

### All Test is passed :

![LinkedLest Test](./assets/LinkedLest%20Test.png)

## API

<!-- Description of each method publicly available to your Linked List -->

- Insert(data): Add a value of any type in a new node to the list.

- include(data): Find input value if it is exist in the linked list.

- toString(): Returns a string representing all the data in the Linked List.

