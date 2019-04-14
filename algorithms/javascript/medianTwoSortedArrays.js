const findMedianSortedArrays = function (a, b) {
  const totalItems = a.length + b.length;
  const medianPointer = Math.floor(totalItems / 2) + 1;

  let aPointer = 0;
  let bPointer = 0;
  let currA, currB, currMedian, prevMedian;

  while (aPointer + bPointer < medianPointer) {
    if (currMedian) {
      prevMedian = currMedian;
    }
    currA = a[aPointer];
    currB = b[bPointer];

    if (currA === undefined || currB === undefined) {
      currMedian = currA || currB;
      currA && aPointer++;
      currB && bPointer++;
      continue;
    }

    if (currA < currB) {
      currMedian = currA;
      aPointer++;
    } else {
      currMedian = currB;
      bPointer++;
    }
  }

  return totalItems % 2 === 0 ? (prevMedian + currMedian) / 2 : currMedian;
};

const nums1test = [1, 2];
const nums2test = [3];

console.log(findMedianSortedArrays(nums1test, nums2test));
