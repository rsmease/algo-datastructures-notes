const canVisitAllRooms = (rooms) => {
  const roomsWithKnownAccess = new Set();

  let allRoomsTotal = 0;
  let deadEndRoomsTotal = 0;
  let currentRoom;
  for (let i = 0; i < rooms.length; i++) {
    currentRoom = rooms[i];
    if (!currentRoom.length) {
      deadEndRoomsTotal++;
    }
    if (deadEndRoomsTotal > 1) {
      return false;
    }
    allRoomsTotal += i;
  }

  let roomsTotal = 0;
  rooms.forEach((availableKeys, currentRoom) => {
    let otherRoom;
    if (!availableKeys.length) {
      deadEndRoomsTotal++;
      if (deadEndRoomsTotal > 1) {
        return false;
      }
    }

    for (let j = 0; j < availableKeys.length; j++) {
      otherRoom = availableKeys[j]
      if (!(roomsWithKnownAccess.has(otherRoom) || otherRoom === currentRoom)) {
        roomsTotal += otherRoom;
        roomsWithKnownAccess.add(otherRoom);
      }
    }
  });

  return roomsTotal === allRoomsTotal;
};

console.log(canVisitAllRooms([[4], [3], [], [2, 5, 7], [1], [], [8, 9], [], [], [6]]));

