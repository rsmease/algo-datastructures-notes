var trap = function (elevs) {
  var trapped = 0;
  var left = 0;
  var leftHeight = 0;
  var right = elevs.length - 1;
  var rightHeight = 0;

  while (left <= right) {
    if (leftHeight <= rightHeight) {
      leftHeight = Math.max(leftHeight, elevs[left]);
      trapped += leftHeight - elevs[left];
      left++;
    } else {
      rightHeight = Math.max(rightHeight, elevs[right]);
      trapped += rightHeight - elevs[right];
      right--;
    }
  }

  return trapped;
};

const test = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(test))
