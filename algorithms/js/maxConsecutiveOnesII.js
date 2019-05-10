// Given a binary array, find the maximum number of consecutive 1s in this array
// if you can flip at most one 0.

// Example 1:

// Input: [1,0,1,1,0]
// Output: 4
// Explanation: Flip the first zero will get the the maximum number of consecutive 1s.
//     After flipping, the maximum number of consecutive 1s is 4.
// Note:

// The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10,000
// Follow up:
// What if the input numbers come in one by one as an infinite stream? In other
// words, you can't store all numbers coming from the stream as it's too large
// to hold in memory. Could you solve it efficiently?

/**
 * @param {number[]} nums
 * @return {number}
 */

const findMaxConsecutiveOnes = (nums, flips = 0) => {
  let currentStart = 0;
  let currentEnd = 0;
  let flipsAvailable = flips;
  let maxSpan = 0;

  while (currentEnd < nums.length) {
    nums[currentEnd] === 0 && flipsAvailable--;

    while (flipsAvailable < flips) {
      nums[currentStart] === 0 && flipsAvailable++;
      currentStart++;
    }

    maxSpan = Math.max((currentEnd - currentStart + 1), maxSpan);
    currentEnd++;
  }
  return maxSpan;
};

const tests = new Set();
tests.add([1, 0, 1, 1, 0]);
tests.add([1, 0, 1, 1, 0, 1]);

tests.forEach((test) => console.log(findMaxConsecutiveOnes(test)))
