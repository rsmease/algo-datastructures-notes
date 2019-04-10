const canVisitAllRooms = (allRooms, startingIndex = 0) => {

  const visitedIndices = new Set([startingIndex]);
  const indicesToVisit = [startingIndex];

  let currentRoom, currentIndex;
  while (indicesToVisit.length) {
    currentIndex = indicesToVisit.pop();
    currentRoom = allRooms[currentIndex];

    currentRoom.forEach((otherRoomIndex) => {
      visitedIndices.has(otherRoomIndex) || indicesToVisit.push(otherRoomIndex);
      visitedIndices.add(otherRoomIndex);
    });
  }
  return allRooms.length === visitedIndices.size;
};

