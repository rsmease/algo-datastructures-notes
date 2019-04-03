// NOTE: no working; going to try DFS approach instead

var numIslands = function (grid) {
  const landNodesQueue = initializeQueue(grid);
  let currentNode, adjacentIndicator;
  let islandIndicator = "";

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
    if (!(grid[row] && grid[row][col])) {
      return false;
    }
    return !(grid[row][col] === "1" || grid[row][col] === "0");
  }

  while (landNodesQueue.length) {
    const { row, col } = landNodesQueue.shift();
    if (grid[row][col] === "1") {
      adjacentIndicator = scanNeighbors(row, col);
      console.log(adjacentIndicator)
      if (adjacentIndicator) {
        grid[row][col] = adjacentIndicator;
      } else {
        islandIndicator += "x";
        grid[row][col] = islandIndicator;
      }
    }
  }

  return islandIndicator.length;
};

var initializeQueue = function (grid) {
  const queue = [];
  grid.forEach((row, i) => {
    row.forEach((element, j) => {
      if (grid[i][j] === "1") {
        queue.push({ row: i, col: j })
      }
    })
  })
  return queue;
}

