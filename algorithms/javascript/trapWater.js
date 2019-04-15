const trap = (heightArray) => {
  if (heightArray.length < 3) {
    return 0;
  }

  const peaks = [];
  const isPeak = (i) => heightArray[i] >= heightArray[i - 1] && heightArray[i] >= heightArray[i + 1];

  for (let i = 1; i < heightArray.length - 1; i++) {
    isPeak(i) && peaks.push(i);
  }

  const collectWater = (i, j) => {
    const lesserPeak = Math.min(heightArray[i], heightArray[j]);
    let valleyWaterLevel = lesserPeak * (j - i - 1);

    for (let valley = i + 1; valley < j; valley++) {
      valleyWaterLevel -= heightArray[valley];
    }
    return valleyWaterLevel;
  }

  let totalWater = 0;
  for (let peak = 0; peak < peaks.length - 1; peak++) {
    totalWater += collectWater(peaks[peak], peaks[peak + 1])
  }
  return totalWater;
};
