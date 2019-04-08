const findTargetSumWays = (nums, sum) => {
  let sumCounts = { 0: 1 };

  let newSumCounts, nextNum;
  for (let i = 0; i < nums.length; i++) {
    newSumCounts = {};
    nextNum = nums[i];

    for (let key in sumCounts) {
      newSumCounts[parseInt(key) + nextNum] = (
        newSumCounts[parseInt(key) + nextNum] || 0
      ) + sumCounts[key];

      newSumCounts[parseInt(key) - nextNum] = (
        newSumCounts[parseInt(key) - nextNum] || 0
      ) + sumCounts[key];
    }

    sumCounts = newSumCounts;
  }

  return sumCounts[sum] || 0;
}

findTargetSumWays([1, 1, 1], 4)
