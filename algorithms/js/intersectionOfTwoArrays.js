// Given two arrays, write a function to compute their intersection.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Note:

// Each element in the result must be unique.
// The result can be in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
  // build a set of each array's entries
  const nums1Set = new Set(nums1);
  const nums2Set = new Set(nums2);

  const result = [];

  // loop over the smaller of the two sets so that we don't do any added work
  // add the shared entries to the result
  const [smallerSet, largerSet] = nums1Set.size <= nums2Set.size ? [nums1Set, nums2Set] : [nums2Set, nums1Set];
  smallerSet.forEach((value) => largerSet.has(value) && result.push(value));

  return result;
};

tests = new Set();
tests.add([[1, 2, 2, 1], [2, 2]]);
tests.add([[4, 9, 5], [9, 4, 9, 8, 4]]);

tests.forEach((test) => console.log(intersection(...test)))
