const merge = (intervals) => {
  if (intervals.length < 2) {
    return intervals;
  }

  // intervals are sorted backwards so that we can treat them like a stack;
  const sortedIntervals = intervals.sort((a, b) => {
    return a.start === b.start ? b.end - a.end : b.start - a.start;
  });

  // add first interval to the result stack;
  const result = [sortedIntervals.pop()];

  // compare the tail of each stack, merge if appropriate
  let previous, current;
  while (sortedIntervals.length) {
    previous = result.pop();
    current = sortedIntervals.pop();

    if (previous.overlapsWith(current)) {
      result.push(previous.mergedWith(current));
    } else {
      result.push(previous, current);
    }
  }

  return result;
};

// merge or return "parent" interval if one interval contains another
// the second interval will never contain the first due to our sorting pattern
Interval.prototype.mergedWith = function (otherInterval) {
  if (this.contains(otherInterval)) {
    return this;
  }
  return new Interval(this.start, otherInterval.end)
}

Interval.prototype.overlapsWith = function (otherInterval) {
  return this.end >= otherInterval.start;
}

Interval.prototype.contains = function (otherInterval) {
  return this.start <= otherInterval.start && this.end >= otherInterval.end;
}

// NOTE: these won't work anymore, now that Intervals are an object with start/end props
const tests = new Set();
tests.add([[1, 4], [4, 5]]);
tests.add([[1, 3], [2, 6], [8, 10], [15, 18]]);

tests.forEach((test) => console.log(merge(test)))
