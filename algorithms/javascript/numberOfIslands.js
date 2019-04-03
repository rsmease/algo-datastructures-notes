var numIslands = function (grid) {
  const landNodesQueue = initializeQueue(grid);
  let currentNode, adjacentIndicator;
  let islandIndicator = "x";

  var scanNeighbors = function (row, col) {
    if (isKnownIsland(row, col + 1)) {
      return grid[row][col + 1];
    }
    if (isKnownIsland(row, col - 1)) {
      return grid[row][col - 1];
    }
    if (isKnownIsland(row + 1, col)) {
      return grid[row + 1][col];
    }
    if (isKnownIsland(row - 1, col)) {
      return grid[row - 1][col];
    }
    return false;
  }

  var isKnownIsland = function (row, col) {
    if (row < 0 || col < 0 || row > grid[0].length || col > grid.length) {
      return false;
    }
    return typeof grid[row][col] === "string";
  }

  while (landNodesQueue.length) {
    const { row, col } = landNodesQueue.shift();
    if (grid[row][col] === 1) {
      adjacentIndicator = scanNeighbors(row, col);
      if (adjacentIndicator) {
        grid[row][col] = adjacentIndicator;
      } else {
        grid[row][col] = islandIndicator;
        islandIndicator += "x";
      }
    }
  }
};

var initializeQueue = function (grid) {
  const queue = [];
  grid.forEach((row, i) => {
    row.forEach((element, j) => {
      if (grid[i][j] === 1) {
        queue.push({ row: i, col: j })
      }
    })
  })
  return queue;
}

