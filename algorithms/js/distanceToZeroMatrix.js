const updateMatrix = (matrix) => {
  const outOfBounds = (
    (row, col) =>
      row < 0 || col < 0 || row + 1 > matrix.length || col + 1 > matrix[0].length
  );

  const queue = buildQueue(matrix);
  resetMatrix(matrix);

  let distance, neighborDistance;
  const neighboringCoordinates = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  while (queue.length) {
    const [row, col] = queue.shift();
    distance = matrix[row][col];

    neighboringCoordinates.forEach(([neighborRow, neighborCol]) => {
      neighborRow += row;
      neighborCol += col;

      if (outOfBounds(neighborRow, neighborCol)) {
        return;
      }

      neighborDistance = matrix[neighborRow][neighborCol];

      if (neighborDistance || neighborDistance <= distance) {
        return;
      }

      matrix[neighborRow][neighborCol] = distance + 1;
      queue.push([neighborRow, neighborCol]);
    })
  }

  return matrix;
}

const buildQueue = (matrix) => {
  const queue = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        queue.push([row, col])
      }
    }
  }
  return queue;
}

const resetMatrix = (matrix) => {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 1) {
        matrix[row][col] = undefined;
      }
    }
  }
}

console.log(updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]]))
