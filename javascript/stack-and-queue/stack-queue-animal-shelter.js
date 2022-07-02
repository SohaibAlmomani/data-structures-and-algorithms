'use strict';

const Queue = require('./Queue');

module.exports = class AnimalShelter {

  constructor() {
    this.queueOfAnimal = new Queue();
  }

  enqueue(animal) {
    if (animal === 'cat' || animal === 'dog') {
      this.queueOfAnimal.enqueue(animal);
    }
    else {
      console.log('Please enter cat or dog only');
    }
  }

  dequeue(pref) {
    if (pref === 'cat' || pref === 'dog') {
      if (!this.queueOfAnimal.isEmpty()) {
        this.queueOfAnimal.dequeue();
      }
    }
    else {
      return null;
    }
  }

};
