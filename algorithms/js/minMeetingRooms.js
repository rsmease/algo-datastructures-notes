const minMeetingRooms = (intervalsArray) => {

  // sort mutates the caller ("y tho?!"" - Douglas Crockford)
  // we need to make copies to keep the function pure
  const sortByStart = intervalsArray.slice().sort((a, b) => a.start - b.start);
  const sortByEnd = intervalsArray.slice().sort((a, b) => a.end - b.end);

  let totalRooms = 0;
  const requestAdditionalRoom = () => totalRooms++;

  let currentEnd = 0;
  const checkNextEndTime = () => currentEnd++;

  let currentStart = 0;
  const checkNextStartTime = () => currentStart++;

  let isConflict;
  while (currentStart < sortByStart.length) {
    isConflict = sortByStart[currentStart].overlapsWith(sortByEnd[currentEnd]);
    isConflict ? requestAdditionalRoom() : checkNextEndTime();

    checkNextStartTime();
  }

  return totalRooms;
};

// note: different than similar function in mergeIntervals problem
Interval.prototype.overlapsWith = function (otherInterval) {
  return this.start < otherInterval.end;
}

