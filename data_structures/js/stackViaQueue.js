/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.queue = [];
  this.bufferQueue = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x);
  return undefined;
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.queue.length > 1) {
    this.bufferQueue.push(this.queue.shift());
  }
  const result = this.queue.shift();
  this.queue = this.bufferQueue;
  this.bufferQueue = [];
  return result;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  while (this.queue.length > 1) {
    this.bufferQueue.push(this.queue.shift());
  }
  const result = this.queue.shift();
  this.bufferQueue.push(result);
  this.queue = this.bufferQueue;
  this.bufferQueue = [];
  return result;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
