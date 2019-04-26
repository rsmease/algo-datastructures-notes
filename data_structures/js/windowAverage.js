/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
  this.store = [];
  this.maxSize = size;
  this.currentWindowTotal = 0;
};

/**
* @param {number} val
* @return {number}
*/
MovingAverage.prototype.next = function(val) {
  if (this.store.length === this.maxSize) {
      this.evict();
  }
  this.currentWindowTotal += val;
  this.store.push(val);
  return this.currentWindowTotal / Math.min(this.store.length, this.maxSize);
};

MovingAverage.prototype.evict = function() {
  const evicted = this.store.shift();
  this.currentWindowTotal -= evicted;
}

/**
* Your MovingAverage object will be instantiated and called as such:
* var obj = new MovingAverage(size)
* var param_1 = obj.next(val)
*/