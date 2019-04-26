const trap = (heights) => {
  if (heights.length < 3) {
    return 0;
  }

  let leftPointer, leftPeak, leftHeight;
  let rightPointer, rightPeak, rightHeight;

  leftPointer = 0;
  rightPointer = heights.length - 1;

  let totalWaterCollected = 0;
  while (leftPointer < rightPointer) {
    leftHeight = heights[leftPointer];
    rightHeight = heights[rightPointer];

    leftPeak = Math.max(leftHeight, leftPeak || 0);
    rightPeak = Math.max(rightHeight, rightPeak || 0);

    totalWaterCollected += leftPeak > leftHeight ? leftPeak - leftHeight : 0;
    totalWaterCollected += rightPeak > rightHeight ? rightPeak - rightHeight : 0;

    leftHeight < rightHeight ? leftPointer++ : rightPointer--;
  }
  return totalWaterCollected;
};

const tests = new Set();
tests.add([2, 0, 2]);
tests.add([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
tests.add([5, 4, 1, 2])
tests.forEach((test) => console.log(trap(test)));
