/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function (grid) {
  const procesingQueue = [];
  const seenItems = {};

  grid.forEach((row, i) => {
    row.forEach((node, j) => {
      if (grid[i][j] === 0) {
        processingQueue.push([i, j]);
      }
    })
  });

  let distance = 0;
  let nodesInQueue, currentNode;

  while (processingQueue.length) {
    nodesInQueue = procesingQueue.length;
    for (let i = 0; i < nodesInQueue; i++) {
      currentNode = procesingQueue.shift();
      currentNode = grid[currentNode[0]][currentNode[1]];
      if (typeof currentNode !== 'undefined' && currentNode !== -1 && currentNode >= distance) {
        addAdjacentNodes(currentNode);
        grid[currentNode[0]][currentNode[1]] = distance;
      }
    }
    distance++;
  }

  var addAdjacentNodes = function (current) {
    procesingQueue.push(grid[current[0]][current[1] - 1]);
    procesingQueue.push(grid[current[0]][current[1] + 1]);
    procesingQueue.push(grid[current[0] - 1][current[1]]);
    procesingQueue.push(grid[current[0] + 1][current[1]]);
  }

  return grid;
};
