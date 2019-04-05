const dailyTemperatures = (temps) => {
  const datesToProcess = new DateStack();
  const result = Array(temps.length).fill(0);

  let currentTemp, pastDateToProcess;

  for (let currentDate = 0; currentDate < temps.length; currentDate++) {
    currentTemp = temps[currentDate];

    while (datesToProcess.any() && temps[datesToProcess.last()] < currentTemp) {
      pastDateToProcess = datesToProcess.pop();
      result[pastDateToProcess] = currentDate - pastDateToProcess;
    }
    datesToProcess.add(currentDate);
  }

  return result;
};


// The DateStack is a normal stack with a helpful name
// It could be substituted with any other well-behaved stack
var DateStack = function () {
  this.stack = [];
}

DateStack.prototype.last = function () {
  return this.stack[this.stack.length - 1];
}

DateStack.prototype.add = function (value) {
  this.stack.push(value);
  return true;
}

DateStack.prototype.any = function () {
  return this.stack.length > 0;
}

DateStack.prototype.pop = function () {
  return this.any() ? this.stack.pop() : null;
}

/*
* This solution was adapted from the solution given by IMiaoj.
*
* As they note, this is an O(N) solution, where we use the stack to keep track
* of all the indexes that are still waiting to find their 'next hottest day'.
* We only iterate over the temperatures array one time.
*
* We want the result to be filled with 0s so that the final hote days, which are
* never processed, end up with the correct answer.
*
* This process works because the stacks slowly builds as temperatures fall
* or stay steady. Then, when the temperature rises, we can batch process
* all the past dates that are less than the new temperatures. Because of the
* "fall or stay steady" pattern, we know that we won't accidentally leave some
* temperatures that we need to process on the stack.
*/


