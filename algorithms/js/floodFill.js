const floodFill = (imageMatrix, startX, startY, newColor) => {
  let targetColor = imageMatrix[startX][startY];

  const paintByNumber = (x, y) => {
    // return cell is not target color
    if (imageMatrix[x][y] !== targetColor) {
      return;
    }
    imageMatrix[x][y] = newColor;

    // paint neighbors where X in bounds
    x + 1 < imageMatrix.length && paintByNumber(x + 1, y);
    x > 0 && paintByNumber(x - 1, y);

    // paint neighbors where Y in bounds
    y + 1 < imageMatrix[0].length && paintByNumber(x, y + 1);
    y > 0 && paintByNumber(x, y - 1);
  }

  if (targetColor !== newColor) {
    paintByNumber(startX, startY);
  }
  return imageMatrix;
}


