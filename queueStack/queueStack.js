/*
Queue Stack

Write a stack. Once you’re done, implement a queue using two stacks to create FIFO behavior. 
The queue should not have any storage separate from its stacks.
*/

var Stack = function() {
  var storage = [];

  this.push = function(value) {
    return storage.push(value)
  };

  this.pop = function() {
    return storage.pop()
  };

  this.size = function() {
    return storage.length
  };

};

var Queue = function() {
  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(value) {
   return inbox.push(value)
  };

  this.dequeue = function() {
    var inbo = inbox.size()
    var outbo = outbox.size()
    while (inbo !== 0){
      outbox.push(inbox.pop())
      inbo--
      outbo++
    }
    var deleted = outbox.pop()
    outbo = outbox.size();
    while (outbo !== 0){
      inbox.push(outbox.pop())
      outbo--
      inbo++
    }
    return deleted
  };

  this.size = function() {
    return inbox.size()
  };
};
