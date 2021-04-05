'use strict';



// Stack
function Stack () {
  this.storage = {};
  this.length = 0;
}

Stack.prototype.push = function (value) {
  this.storage[this.length] = value;
  this.length++;
  return true;
};

Stack.prototype.pop = function () {
  if (this.length == 0) return null;
  let deleting = this.storage[this.length-1];
  delete this.storage[this.length-1];
  this.length--;
  return deleting;
};

Stack.prototype.size = function () {
  return this.length;
};



// Queue
function Queue () {
  this.storage = {};
  this.back = 0;
  this.frontIndex = 0;
  this.deleting = '';
}

Queue.prototype.enqueue = function (string) {
  if (!string) return null;
  else { 
    this.storage[this.back] = string;
    this.back++;
    return true;
  }
};

Queue.prototype.dequeue = function () {
  if (this.back == 0) { 
    return null;
  } else if (this.storage[this.frontIndex] == undefined) {
    return null;
  } else {
    this.deleting = this.storage[this.frontIndex];
    delete this.storage[this.frontIndex];
    this.frontIndex++;
    return this.deleting;
  }
};

Queue.prototype.size = function () {
  return this.back - this.frontIndex;
};



// Linked list
function LinkedList () {
  this.head = null;
  this.tail = null;
}

function LinkedListNode (value, next) {
  this.value = value;
  this.next = next;
}

LinkedList.prototype.addToHead = function (value) {
  const nextNode = this.head;
  const nodeObj = new LinkedListNode(value, nextNode);
  this.head = nodeObj;
  if (!this.tail) this.tail = nodeObj;
  return true;
};

LinkedList.prototype.addToTail = function (value) {
  const nodeObj = new LinkedListNode(value, null);
  this.tail.next = nodeObj;
  this.tail = nodeObj;
  if (!this.head) this.head = nodeObj;
  return true;
};

LinkedList.prototype.removeHead = function (value) {
  if (!this.head) return null;
  const currentHead = this.head;
  this.head = currentHead.next;
  return currentHead;
};

LinkedList.prototype.contains = function (value) {
  let nodeLook = null;
  let matched = false;
  while (!matched) {
    if (nodeLook === null) nodeLook = this.head;
    else {
      nodeLook = nodeLook.next;
    }
    if (!nodeLook) {
      break;
    }
    if (nodeLook.value === value) matched = true;
  }
  return matched;
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
      } else this.tail = this.head = null;
      return prevTail.value;
    }
    return null;
  }
}






// const ll = new LinkedList();
// ll.addToHead('radiohead');
// ll.addToHead('mike jackson');
// ll.addToTail('Muse');  // Mike Jackson(HEAD) --->  Radiohead ---> Muse(TAIL) --->null
// ll.removeHead(); //Radiohead(HEAD) ---> Muse(TAIL) --->null
// console.log(ll.contains('Madonna'));
// console.log(ll.contains('Muse'));




module.exports = {
  Stack,
  Queue,
  LinkedList,
  DoubleLinkedList
};


