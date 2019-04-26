/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.maxSize = k;
  this.currentSize = 0;

  this.store = Array(k);

  this.headPointer = 0;
  this.tailPointer = 0;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) {
    return false;
  }

  if (!this.isEmpty()) {
    this.incrementTail();
  }

  this.store[this.tailPointer] = value;
  this.currentSize++;
  return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) {
    return false;
  }

  this.store[this.headPointer] = undefined;
  this.currentSize--;

  if (!this.isEmpty()) {
    this.incrementHead();
  }
  return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.isEmpty() ? -1 : this.store[this.headPointer];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  return this.isEmpty() ? -1 : this.store[this.tailPointer]
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.currentSize === 0;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.currentSize === this.maxSize;
};

/**
 * Makes it easier to increment based on max size, moving in circular motion.
 */

MyCircularQueue.prototype.incrementTail = function (offset = 0) {
  this.tailPointer = (this.tailPointer + 1 + offset) % this.maxSize;
}

MyCircularQueue.prototype.incrementHead = function (offset = 0) {
  this.headPointer = (this.headPointer + 1 + offset) % this.maxSize;
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
