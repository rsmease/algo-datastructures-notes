/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.stack = [];
  this.bufferStack = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack.push(x);
  return undefined;
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.bufferStack.length) {
    while (this.stack.length) {
      this.bufferStack.push(this.stack.pop())
    }
  }
  return this.bufferStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (!this.bufferStack.length) {
    while (this.stack.length) {
      this.bufferStack.push(this.stack.pop())
    }
  }
  const result = this.bufferStack.pop();
  this.bufferStack.push(result);
  return result;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack.length === 0 && this.bufferStack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
