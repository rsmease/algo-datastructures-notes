// Given a binary array, find the maximum number of consecutive 1s in this array.

// Example 1:

// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.
// Note:

// The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10,000.

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {
  let largestSpan = 0;

  let currentSpan = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      currentSpan++;
      continue;
    }

    largestSpan = Math.max(largestSpan, currentSpan);
    currentSpan = 0;
  }

  return Math.max(largestSpan, currentSpan);
};

tests = new Set();
tests.add([1, 1, 1]);
tests.add([0, 0])
tests.add([])

tests.forEach((test) => console.log(findMaxConsecutiveOnes(test)))
