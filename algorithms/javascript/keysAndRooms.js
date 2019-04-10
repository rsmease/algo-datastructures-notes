const canVisitAllRooms = (rooms) => {
  const roomsVisited = new Set();
  const roomsToVisit = [];

  roomsToVisit.push(0);
  roomsVisited.add(0);

  let currentRoom;
  while (roomsToVisit.length) {
    currentRoom = rooms[roomsToVisit.pop()];

    currentRoom.forEach((otherRoom) => {
      !roomsVisited.has(otherRoom) && roomsToVisit.push(otherRoom);
      roomsVisited.add(otherRoom);
    });
  }
  return rooms.length === roomsVisited.size;
};

console.log(canVisitAllRooms([[4], [3], [], [2, 5, 7], [1], [], [8, 9], [], [], [6]]));

