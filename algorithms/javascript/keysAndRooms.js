const canVisitAllRooms = (rooms) => {
  const roomsWithKnownAccess = new Set();
  const expectedResult = allKeysSum(rooms.length);
  const currentResult = 0;

  let availableKeys;
  rooms.forEach((room) => {
    availableKeys = getAllAvailableKeys(room);

    currentResult += sumOfUnseenKeys(availableKeys);
    addKeysToSet(availableKeys, roomsWithKnownAccess);
  });

  return currentResult === expectedResult;
};

const getAllAvailableKeys = function (room) {
  return room.length > 1 ? room.slice(1) : [];
}

const sumOfUnseenKeys = function (newKeys, set) {
  const unseenKeysTotal = 0;
  newKeys.forEach((key) => {
    unseenKeysTotal += set.has(key) ? 0 : key;
    updateSet(key, set);
  })
  return unseenKeysTotal;
}

const addKeysToSet = (keys, set) => keys.forEach((key) => !set.has(key) && set.add(key));

const allKeysSum = (range) => {
  total = 0;
  for (let i = 0; i < range; i++) {
    total += i;
  }
  return total;
}

console.log(canVisitAllRooms([[1], [2], [3], []]));

