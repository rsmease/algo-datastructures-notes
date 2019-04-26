var numIslands = function (grid) {
  const foundFlag = "X";

  let count = 0;
  const incrementCount = () => {
    count++;
    return true;
  }

  const isIsland = (i, j) => grid[i] && grid[i][j] && grid[i][j] === "1";

  const neighbors = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const searchNeighbors = (i, j) => {
    grid[i][j] = foundFlag;

    neighbors.forEach((neighbor) => {
      let [neighborI, neighborJ] = neighbor;
      neighborI += i;
      neighborJ += j

      isIsland(neighborI, neighborJ) && searchNeighbors(neighborI, neighborJ);
    });
  }

  grid.forEach((row, i) => {
    row.forEach((element, j) => {
      isIsland(i, j) && incrementCount() && searchNeighbors(i, j);
    })
  });

  return count;
}


