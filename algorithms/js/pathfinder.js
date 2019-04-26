/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */

// TODO: improve how I'm processing these items / sticking them in the queue
var wallsAndGates = function (grid) {
  const queue = initializeQueue(grid);

  const UNASSIGNED_FLAG = 2147483647;

  var validUnseenNode = function (row, col) {
    return validNodePosition(row, col) && grid[row][col] === UNASSIGNED_FLAG;
  }

  var validNodePosition = function (row, col) {
    return row >= 0 && col >= 0 && row < grid.length && col < grid[0].length;
  }

  var neighbors = function (row, col) {
    return [[row, col + 1], [row, col - 1], [row + 1, col], [row - 1, col]];
  }

  let nodesInQueue, currentNode, nodeNeighbors;

  while (queue.length) {
    nodesInQueue = queue.length;

    for (let i = 0; i < nodesInQueue; i++) {
      const { row, col } = queue.shift();
      currentNode = grid[row][col];
      nodeNeighbors = neighbors(row, col);

      nodeNeighbors.forEach((neighbor) => {
        const [nRow, nCol] = neighbor;

        if (validUnseenNode(nRow, nCol)) {
          queue.push({ row: nRow, col: nCol });
          grid[nRow][nCol] = currentNode + 1;
        }
      })
    }
  }

  return grid;
};

var initializeQueue = function (grid) {
  const queue = [];
  grid.forEach((row, i) => {
    row.forEach((node, j) => {
      if (grid[i][j] === 0) {
        queue.push({ row: i, col: j });
      }
    })
  });
  return queue;
}



