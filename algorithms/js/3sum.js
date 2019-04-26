// Prompt
/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
Find all unique triplets in the array which gives the sum of zero.
*/

const threeSum = (numsArray, sumTarget = 0) => {
  const result = [];

  // too few items to make a three sum comparison
  if (numsArray.length < 3) {
    return result;
  }

  const numsSorted = numsArray.sort((a, b) => a - b);

  // if all items are greater than sumTarget, then we'll never sum to target
  if (numsSorted[0] > sumTarget) {
    return result;
  }

  const scanRemainder = (start) => {
    const startValue = numsSorted[start];

    let nextValue, endValue, currentSum;
    for (let next = start + 1, end = numsSorted.length - 1; next < end;) {
      nextValue = numsSorted[next];
      endValue = numsSorted[end];

      currentSum = startValue + nextValue + endValue;
      if (currentSum === sumTarget) {
        result.push([startValue, nextValue, endValue]);
        next++;
        end--

        // skip over the same values so that we only have unique sets
        while (next < end && numsSorted[next] == numsSorted[next - 1]) {
          next++;
        }
        while (next < end && numsSorted[end] == numsSorted[end + 1]) {
          end--;
        }
        continue;
      }

      if (currentSum > sumTarget) {
        end--;
        continue;
      }

      if (currentSum < sumTarget) {
        next++;
        continue;
      }
    }
  }

  for (let i = 0; i < numsSorted.length - 2; i++) {
    if (i > 0 && numsSorted[i] === numsSorted[i - 1]) {
      continue;
    }
    scanRemainder(i);
  }

  return result;
};

const tests = new Set();
tests.add([-1, 0, 1, 2, -1, -4]);

tests.forEach((test) => console.log(threeSum(test)))
