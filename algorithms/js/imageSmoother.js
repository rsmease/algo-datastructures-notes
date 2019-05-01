const imageSmoother = (image) => {
  const neighbors = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

  const smooth = (homeRow, homeCol, homeValue) => {
    let inBoundsNeighborCount = 1;
    let saturationTotal = homeValue;
    const incrementCountAndTotal = (value) => {
      saturationTotal += value;
      inBoundsNeighborCount++;
    }

    let neighborRow, neighborCol;
    neighbors.forEach((neighbor) => {
      const [rowOffset, colOffset] = neighbor;
      neighborRow = homeRow + rowOffset;
      neighborCol = homeCol + colOffset;

      if (image[neighborRow] && image[neighborRow][neighborCol] !== undefined) {
        incrementCountAndTotal(image[neighborRow][neighborCol]);
      }
    });

    return Math.floor(saturationTotal / inBoundsNeighborCount);
  }

  const newImage = [...Array(image.length)].map((row) => Array(image[0].length));

  image.forEach((currentRow, rowIndex) => {
    currentRow.forEach((currentItem, colIndex) => {
      newImage[rowIndex][colIndex] = smooth(rowIndex, colIndex, currentItem);
    })
  });

  return newImage;
}

tests = new Set();

tests.add(
  []
);
tests.add(
  [[1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]]
);
tests.add(
  [[2, 3, 4],
  [5, 6, 7],
  [8, 9, 10],
  [11, 12, 13],
  [14, 15, 16]]
)

tests.forEach((test) => console.log(imageSmoother(test)));

