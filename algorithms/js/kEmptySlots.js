/*
Prompt

There is a garden with N slots. In each slot, there is a flower. The N flowers will bloom one by one in N days. In each day, there will be exactly one flower blooming and it will be in the status of blooming since then.

Given an array flowers consists of number from 1 to N. Each number in the array represents the place where the flower will open in that day.

For example, flowers[i] = x means that the unique flower that blooms at day i will be at position x, where i and x will be in the range from 1 to N.

Also given an integer k, you need to output in which day there exists two flowers in the status of blooming, and also the number of flowers between them is k and these flowers are not blooming.

If there isn't such day, output -1.

Example 1:

Input:
flowers: [1,3,2]
k: 1
Output: 2
Explanation: In the second day, the first and the third flower have become blooming.
Example 2:

Input:
flowers: [1,2,3]
k: 1
Output: -1
Note:

The given array will be in the range [1, 20000].
*/

const kEmptySlots = (flowers, k) => {
  const isBloomed = new Set();

  const searchInterval = (start, end) => {
    for (let i = start; i <= end; i++) {
      if (isBloomed.has(i)) {
        return false;
      }
    }
    return true;
  }

  let current, lookAhead, lookBack;
  for (let i = 0; i < flowers.length; i++) {
    current = flowers[i] - 1;
    isBloomed.add(current);

    lookBack = current - k - 1;
    lookAhead = current + k + 1;

    if (lookBack >= 0 && isBloomed.has(lookBack)) {
      if (searchInterval(lookBack + 1, current - 1)) {
        return i + 1;
      }
    }

    if (lookAhead < flowers.length && isBloomed.has(lookAhead)) {
      if (searchInterval(current + 1, lookAhead - 1)) {
        return i + 1;
      }
    }
  }
  return -1;
};

const tests = new Set();
tests.add([[1, 3, 2], 1]);
tests.add([[1, 2, 3], 1]);

tests.forEach((test) => console.log(kEmptySlots(...test)))
