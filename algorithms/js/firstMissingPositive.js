// Given an unsorted integer array, find the smallest missing positive integer.

// Example 1:

// Input: [1,2,0]
// Output: 3
// Example 2:

// Input: [3,4,-1,1]
// Output: 2
// Example 3:

// Input: [7,8,9,11,12]
// Output: 1
// Note:

// Your algorithm should run in O(n) time and uses constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */

const firstMissingPositive = (nums) => {
  let minPositive = Number.MAX_SAFE_INTEGER;
  let maxPositive = 0;
  const seenPositives = new Set();

  nums.forEach((num) => {
    if (num < 1) {
      return;
    }

    minPositive = Math.min(num, minPositive);
    maxPositive = Math.max(num, maxPositive);
    seenPositives.add(num)
  });

  if (minPositive > 1) {
    return 1;
  }

  for (let i = minPositive; i <= maxPositive; i++) {
    if (!seenPositives.has(i)) {
      return i;
    }
  }

  return maxPositive + 1;
};

const tests = new Set();
tests.add([1, 2, 0])
tests.add([3, 4, -1, 1])
tests.add([7, 8, 9, 11, 12]);
tests.add([1]);
tests.add([])

tests.forEach((test) => console.log(firstMissingPositive(test)))
