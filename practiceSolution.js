'use strict'

function Stack () {                          // To reflect the simplicity of a stack list
  this.storage = {};                         // a stack uses a storage object
  this.counter = 0;                          // and a length counter property
}

Stack.prototype.push = function (string) {   // The push method
  this.storage[this.counter] = string;       // adds an element to the end of the list
  this.counter += 1;                         // so we increase the stack counter by 1
  return true;                               // and return true when we invoke the method
};

Stack.prototype.pop = function () {          // The pop method
  if (this.counter === 0) return null;       // returns null when the stack is empty
  this.counter -= 1;                         // and if not, we decrease the stack counter by 1 and
  return this.storage[this.counter];         // return the popped element. Next time we add an element
};                                           // the new element will replace the last stack element because we reduced the counter by 1
              
Stack.prototype.size = function () {         // The size method
  return this.counter;                       // simply returs the length of the stack
};                                           // stored in the counter property


function Queue () {                                           // The Queue list
  this.storage = {};                                          // has a storage,
  this.frontCount = 0;                                        // a counter for the front of the list,
  this.backCount = 0;                                         // and a counter for the back of the list
}                                                             // to keep track of the elements that get added and deleted, from the front and back of the list.

Queue.prototype.enqueue = function (string) {                 // The enqueue method
  this.storage[this.backCount] = string;                      // adds a string to the back of the list using the backcounter
  this.backCount += 1;                                        // as reference. We increase the backcounter by 1
  return true;                                                // return true.
};

Queue.prototype.dequeue = function () {                       // The dequeue method
  if (this.backCount === this.frontCount) return null;        // returns null if there are no elements in the list; this is reflected
  const removing = this.storage[this.frontCount];             // in the back and font counters if they are equal, no elements have been added
  this.frontCount += 1;                                       // We increase the frontcounter to reflect the removal of the front elements in the list
  return removing;                                            // by disconnecting them to the list, we return the element saved in a temporary variable.
};

Queue.prototype.size = function () {                          // The size method
  return this.backCount - this.frontCount;                    // returns the length of the Queue list
};                                                            // by reflecting the difference of his front and back counters.


function LinkedList () {
  this.head = null;
  this.tail = null;
}

function LinkedListNode (value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.addToHead = function (value) {
  const newNode = LinkedListNode(value);
  if (this.tail === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    const prevHead = this.head;
    this.head = newNode;
    this.head.next = prevHead;
  }
  return true;
};

LinkedList.prototype.addToTail = function (value) {
  const newNode = LinkedListNode(value);
  if (this.head === null) {
    this.tail = newNode;
    this.head = newNode;
  } else {
    const prevTail = this.tail;
    this.tail = newNode;
    this.tail.next = prevTail;
  }
  return true;
};

LinkedList.prototype.removeHead = function () {
  if (this.head) {
    const prevHead = this.head;
    if (this.head.next) this.head = prevHead.next;
    else {
      this.head = null;
      this.tail = null;
    }
    return prevHead;
  }
  return null;
};

LinkedList.prototype.contains = function (value) {
  let current = this.head;
  while (current) {
    if (current.value = value) {
      return true;
    }
    current = current.next
  }
  return false;
};


class DoubleLinkedList extends LinkedList {
  
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
      } else {
        this.tail = null;
        this.head = null;
      }
      return prevTail.value;
    }
    return null;
  }

}





module.exports = {
  Stack,
  Queue,
  LinkedList,
  DoubleLinkedList
}