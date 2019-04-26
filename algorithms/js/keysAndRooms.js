const canVisitAllRooms = (allRooms, initialKey = 0) => {

  const usedKeys = new Set([initialKey]);
  const keysToTest = [initialKey];

  let currentRoom, currentKey;
  while (keysToTest.length) {
    currentKey = keysToTest.pop();
    currentRoom = allRooms[currentKey];

    currentRoom.forEach((otherRoomKey) => {
      usedKeys.has(otherRoomKey) || keysToTest.push(otherRoomKey);
      usedKeys.add(otherRoomKey);
    });
  }
  return allRooms.length === usedKeys.size;
};

