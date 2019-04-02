/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */

// TODO: improve how I'm processing these items / sticking them in the queue
var wallsAndGates = function (grid) {
  const processingQueue = [];
  const seenItems = {};
  const INF = 2147483647;

  grid.forEach((row, i) => {
    row.forEach((node, j) => {
      if (grid[i][j] === 0) {
        processingQueue.push([i, j]);
      }
    })
  });

  let distance = 0;
  let nodesInQueue, currentNode;

  var addAdjacentNodes = function (current) {
    processingQueue.push(grid[current[0]][current[1] - 1]);
    processingQueue.push(grid[current[0]][current[1] + 1]);
    processingQueue.push(grid[current[0] - 1][current[1]]);
    processingQueue.push(grid[current[0] + 1][current[1]]);
  }

  while (processingQueue.length) {
    nodesInQueue = processingQueue.length;
    for (let i = 0; i < nodesInQueue; i++) {
      currentNode = processingQueue.shift();
      currentNode = grid[currentNode[0]][currentNode[1]];
      if (typeof currentNode !== 'undefined' && currentNode !== -1 && currentNode >= distance) {
        addAdjacentNodes(currentNode);
        grid[currentNode[0]][currentNode[1]] = distance;
      }
    }
    distance++;
  }

  return grid;
};
