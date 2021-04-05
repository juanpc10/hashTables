'use strict';

const should = require('chai').should();

const classes = require('../masterSolution.js');

describe('Stack', function () {

  let stack;

  beforeEach(function () {
    stack = new classes.Stack();
  });

  it('the class should provide a "push()" method', function () {
    stack.should.not.have.ownProperty('push');
    stack.push.should.be.a('function');
  });

  it('the class should provide a "pop()" method', function () {
    stack.should.not.have.ownProperty('pop');
    stack.pop.should.be.a('function');
  });

  it('should push and pop elements', function () {
    should.equal(stack.pop(), null);
    stack.push('hello').should.be.true;
    stack.push('world').should.be.true;
    stack.push('today').should.be.true;
    stack.pop().should.equal('today');
    stack.pop().should.equal('world');
    stack.pop().should.equal('hello');
    should.equal(stack.pop(), null);
    should.equal(stack.pop(), null);
  });

  it('should return its size', function () {
    stack.size().should.equal(0);
    stack.push('hello');
    stack.size().should.equal(1);
    stack.push('world');
    stack.size().should.equal(2);
    stack.pop();
    stack.size().should.equal(1);
    stack.pop();
    stack.size().should.equal(0);
  });

});

describe('Queue', function () {

  let queue;

  beforeEach(function () {
    queue = new classes.Queue();
  });

  it('the class should provide an "enqueue()" method', function () {
    queue.should.not.have.ownProperty('enqueue');
    queue.enqueue.should.be.a('function');
  });

  it('the class should provide a "dequeue()" method', function () {
    queue.should.not.have.ownProperty('dequeue');
    queue.dequeue.should.be.a('function');
  });

  it('should enqueue and dequeue elements', function () {
    should.equal(queue.dequeue(), null);
    queue.enqueue('hello').should.be.true;
    queue.enqueue('world').should.be.true;
    queue.enqueue('today').should.be.true;
    queue.dequeue().should.equal('hello');
    queue.enqueue('hello').should.be.true;
    queue.dequeue().should.equal('world');
    queue.dequeue().should.equal('today');
    queue.dequeue().should.equal('hello');
    should.equal(queue.dequeue(), null);
    should.equal(queue.dequeue(), null);
  });

  it('should return its size', function () {
    queue.size().should.equal(0);
    queue.enqueue('hello');
    queue.size().should.equal(1);
    queue.enqueue('world');
    queue.size().should.equal(2);
    queue.dequeue();
    queue.size().should.equal(1);
    queue.dequeue();
    queue.size().should.equal(0);
  });

});

describe('Linked list', function () {

  // REMOVE-START
  let doubleLinkedList;

  beforeEach(function () {
    doubleLinkedList = new classes.DoubleLinkedList();
  });

  it('the class should provide an "addToHead()" method', function () {
    doubleLinkedList.should.not.have.ownProperty('addToHead');
    doubleLinkedList.addToHead.should.be.a('function');
  });

  it('the class should provide an "addToTail()" method', function () {
    doubleLinkedList.should.not.have.ownProperty('addToTail');
    doubleLinkedList.addToTail.should.be.a('function');
  });

  it('the class should provide a "removeHead()" method', function () {
    doubleLinkedList.should.not.have.ownProperty('removeHead');
    doubleLinkedList.removeHead.should.be.a('function');
  });

  it('the class should provide a "removeTail()" method', function () {
    doubleLinkedList.should.not.have.ownProperty('removeTail');
    doubleLinkedList.removeTail.should.be.a('function');
  });

  it('should add to tail and remove from head', function () {
    should.equal(doubleLinkedList.head, null);
    should.equal(doubleLinkedList.tail, null);
    should.equal(doubleLinkedList.removeHead(), null);
    should.equal(doubleLinkedList.removeHead(), null);
    doubleLinkedList.addToTail('hello').should.be.true;
    doubleLinkedList.addToTail('world').should.be.true;
    doubleLinkedList.addToTail('today').should.be.true;
    doubleLinkedList.removeHead().should.equal('hello');
    doubleLinkedList.removeHead().should.equal('world');
    doubleLinkedList.removeHead().should.equal('today');
    should.equal(doubleLinkedList.head, null);
    should.equal(doubleLinkedList.tail, null);
  });

  it('should add to head and remove from tail', function () {
    should.equal(doubleLinkedList.head, null);
    should.equal(doubleLinkedList.tail, null);
    should.equal(doubleLinkedList.removeTail(), null);
    should.equal(doubleLinkedList.removeTail(), null);
    doubleLinkedList.addToHead('hello').should.be.true;
    doubleLinkedList.addToHead('world').should.be.true;
    doubleLinkedList.addToHead('today').should.be.true;
    doubleLinkedList.removeTail().should.equal('hello');
    doubleLinkedList.removeTail().should.equal('world');
    doubleLinkedList.removeTail().should.equal('today');
    should.equal(doubleLinkedList.head, null);
    should.equal(doubleLinkedList.tail, null);
  });

  it('should indicate if it contains a value', function () {
    doubleLinkedList.contains('hello').should.be.false;
    doubleLinkedList.contains('world').should.be.false;
    doubleLinkedList.addToTail('hello');
    doubleLinkedList.contains('hello').should.be.true;
    doubleLinkedList.contains('world').should.be.false;
    doubleLinkedList.addToTail('world');
    doubleLinkedList.contains('hello').should.be.true;
    doubleLinkedList.contains('world').should.be.true;
  });
  // REMOVE-END

});