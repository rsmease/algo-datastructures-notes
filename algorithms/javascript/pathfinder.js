/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */

// TODO: improve how I'm processing these items / sticking them in the queue
var wallsAndGates = function (grid) {
  const queue = initializeQueue(grid);

  const GRID_WIDTH = grid[0].length;
  const UNASSIGNED = 2147483647;

  var validUnseenNode = function (row, col) {
    return row >= 0 && row < GRID_WIDTH && grid[row][col] === UNASSIGNED;
  }

  let distance = 0;
  let nodesInQueue, currentNode;

  while (processingQueue.length) {
    nodesInQueue = processingQueue.length;

    for (let i = 0; i < nodesInQueue; i++) {
      const { row, col } = processingQueue.shift();

      validUnseenNode(row, col + 1) && processingQueue.push({ row: row, col: col + 1 });
      validUnseenNode(row, col - 1) && processingQueue.push({ row: row, col: col - 1 });
      validUnseenNode(row + 1, col) && processingQueue.push({ row: row + 1, col: col });
      validUnseenNode(row - 1, col) && processingQueue.push({ row: row - 1, col: col });

      grid[row][col] = distance;
    }

    distance++;
  }

  return grid;
};

var initializeQueue = function (grid) {
  const queue = [];
  grid.forEach((row, i) => {
    row.forEach((node, j) => {
      if (grid[i][j] === 0) {
        processingQueue.push({ row: i, col: j });
      }
    })
  });
  return queue;
}

