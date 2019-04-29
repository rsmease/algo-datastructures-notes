/*
Prompt

According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

Example:

Input:
[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
Output:
[
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]
Follow up:

Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?

*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

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

  const newBoard = [...Array(board.length)].map((row) => Array(board[0].length))

  const propagate = (cell, isLiving) => {
    const [cellRow, cellCol] = cell;
    const neighborCount = getNeighborCount(cellRow, cellCol);

    newBoard[cellRow][cellCol] = isLiving ? liveCellMutations[neighborCount] : deadCellMutations[neighborCount];
    return;
  }

  let isLiving;
  board.forEach((row, rowNum) => {
    row.forEach((col, colNum) => {
      isLiving = board[rowNum][colNum] === 1;
      propagate([rowNum, colNum], isLiving);
    })
  });

  return newBoard;
}

const tests = new Set();
tests.add([
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0]
]);

tests.forEach((test) => console.log(gameOfLife(test)))
