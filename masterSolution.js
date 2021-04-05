'use strict';

// Stack

function Stack () {
  this.storage = {};
  this.length = 0;
}

Stack.prototype.push = function (value) {
  // REMOVE-START
  this.length++;
  this.storage[this.length] = value;
  return true;
  // REMOVE-END
};

Stack.prototype.pop = function () {
  // REMOVE-START
  if (this.length) {
    const res = this.storage[this.length];
    delete this.storage[this.length];
    this.length--;
    return res;
  }
  return null;
  // REMOVE-END
};

Stack.prototype.size = function () {
  // REMOVE-START
  return this.length;
  // REMOVE-END
};


// Queue

function Queue () {
  // REMOVE-START
  this.storage = {};
  this.start = 1;
  this.end = 1;
  // REMOVE-END
}

// REMOVE-START
Queue.prototype.enqueue = function (value) {
  this.storage[this.end] = value;
  this.end++;
  return true;
};

Queue.prototype.dequeue = function () {
  if (this.size()) {
    const res = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return res;
  }
  return null;
};

Queue.prototype.size = function () {
  return this.end - this.start;
};
// REMOVE-END


// Linked list

function LinkedList () {
  // REMOVE-START
  this.head = null;
  this.tail = null;
  // REMOVE-END
}

// REMOVE-START

function LinkedListNode (value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.addToHead = function (value) {
  const newNode = new LinkedListNode(value);
  if (!this.head) this.head = this.tail = newNode;
  else {
    const prevHead = this.head;
    this.head = newNode;
    this.head.next = prevHead;
  }
  return true;
};

LinkedList.prototype.addToTail = function (value) {
  const newNode = new LinkedListNode(value);
  if (!this.head) this.head = this.tail = newNode;
  else {
    const prevTail = this.tail;
    this.tail = prevTail.next = newNode;
  }
  return true;
};

LinkedList.prototype.removeHead = function () {
  if (this.head) {
    const prevHead = this.head;
    if (prevHead.next) this.head = prevHead.next;
    else this.head = this.tail = null;
    return prevHead.value;
  }
  return null;
};

LinkedList.prototype.contains = function (value) {
  let current = this.head;
  while (current) {
    if (current.value === value) return true;
    current = current.next;
  }
  return false;
};

// REMOVE-END

class DoubleLinkedList extends LinkedList {
  // REMOVE-START

  addToHead (value) {
    const prevHead = this.head;
    super.addToHead(value);
    if (prevHead) prevHead.prev = this.head;
    return true;
  }

  addToTail (value) {
    const prevTail = this.tail;
    super.addToTail(value);
    if (prevTail) this.tail.prev = prevTail;
    return true;
  }

  removeHead () {
    const res = super.removeHead();
    if (this.head && this.head.prev) this.head.prev = null;
    return res;
  }

  removeTail () {
    if (this.tail) {
      const prevTail = this.tail;
      if (prevTail.prev) {
        this.tail = prevTail.prev;
        this.tail.next = null;
      } else this.tail = this.head = null;
      return prevTail.value;
    }
    return null;
  }

  // REMOVE-END
}


module.exports = {
  Stack,
  Queue,
  LinkedList,
  DoubleLinkedList
};