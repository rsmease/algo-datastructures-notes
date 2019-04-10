const canVisitAllRooms = (allRooms, initialRoomIndex = 0) => {

  const visitedIndices = new Set([initialRoomIndex]);
  const indicesToVisit = [0];

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

