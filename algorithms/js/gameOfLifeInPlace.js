const gameOfLife = (board) => {
  const neighbors = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

  const getNeighborCount = (homeRow, homeCol) => {
    let neighborCount = 0;
    const incrementNeighborCount = () => neighborCount++;

    let neighborRow, neighborCol;
    neighbors.forEach((neighbor) => {
      const [rowOffset, colOffset] = neighbor;
      neighborRow = homeRow + rowOffset;
      neighborCol = homeCol + colOffset;

      board[neighborRow] && board[neighborRow][neighborCol] && incrementNeighborCount();
    });

    return neighborCount;
  }

  const liveCellMutations = {
    0: 0,
    1: 0,
    2: 1,
    3: 1,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0
  }

  const deadCellMutations = {
    0: 0,
    1: 0,
    2: 0,
    3: 1,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0
  }

  const newBoard = [...Array(board.length)].map((row) => Array(board[0].length));

  const propagateToNewBoard = (cell, isLiving) => {
    const [cellRow, cellCol] = cell;
    const neighborCount = getNeighborCount(cellRow, cellCol);

    newBoard[cellRow][cellCol] = isLiving ? liveCellMutations[neighborCount] : deadCellMutations[neighborCount];
    return;
  }

  let isLiving;
  board.forEach((row, rowNum) => {
    row.forEach((col, colNum) => {
      isLiving = board[rowNum][colNum] === 1;
      propagateToNewBoard([rowNum, colNum], isLiving);
    })
  });

  board.forEach((row, rowNum) => {
    row.forEach((col, colNum) => {
      board[rowNum][colNum] = newBoard[rowNum][colNum];
    })
  });

  return board;
}

const tests = new Set();
tests.add([
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0]
]);

tests.forEach((test) => console.log(gameOfLife(test)))
