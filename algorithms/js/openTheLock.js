var openLock = function (deadends, target) {
  //generated visited set, add deadends to set
  const visited = new Set(deadends);

  const start = "0000";

  // if deadends list included "0000", return -1
  if (visited.has(start)) {
    return -1;
  }

  visited.add(start);
  const queue = [start];
  let currentCombination, currentAdjacentPaths, currentLength;
  let steps = 0;

  while (queue.length) {
    currentLength = queue.length;
    for (let i = 0; i < currentLength; i++) {
      currentCombination = queue.shift();
      if (currentCombination === target) {
        return steps;
      }
      currentAdjacentPaths = adjacentPaths(currentCombination);
      currentAdjacentPaths.forEach((path) => {
        if (!visited.has(path)) {
          visited.add(path);
          queue.push(path);
        }
      })
    }
    steps++;
  }

  return -1;
};

var adjacentPaths = (currentPath) => {
  const pathDigits = currentPath.split("").map((char) => Number(char));
  const combinationPaths = [];

  pathDigits.forEach((digit, i) => {
    combinationPaths.push(incrementString(currentPath, digit, i));
    combinationPaths.push(decrementString(currentPath, digit, i));
  })
  return combinationPaths;
}

var increment = (digit) => digit + 1 > 9 ? 0 : digit + 1;
var decrement = (digit) => digit - 1 < 0 ? 9 : digit - 1;

var incrementString = (string, digit, i) => {
  return string.substring(0, i) + increment(digit) + string.substring(i + 1);
}
var decrementString = (string, digit, i) => {
  return string.substring(0, i) + decrement(digit) + string.substring(i + 1);
}
