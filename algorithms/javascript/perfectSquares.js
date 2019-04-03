var numSquares = function (desiredSum, count = 0, squares) {
  const availableSquares = squares || getSquaresUpTo(desiredSum);

  if (desiredSum < 0 || !availableSquares.length) {
    return Number.MAX_SAFE_INTEGER;
  }

  if (desiredSum === 0 || isSquare(desiredSum)) {
    return count;
  }

  const remainingSquares = availableSquares.slice(0);
  const largestSquare = remainingSquares.pop();

  return Math.min(
    numSquares(
      desiredSum - largestSquare,
      count + 1,
      availableSquares
    ),
    numSquares(
      desiredSum,
      count + 1,
      remainingSquares
    )
  );
};

var getSquaresUpTo = (limit) => {
  const squares = [];
  for (let i = 1; i * i < limit; i++) {
    squares.push(i * i)
  }
  return squares;
}

var isSquare = (number) => {
  const root = Math.pow(number, 0.5);
  return Math.ceil(root) === Math.floor(root);
}

console.log(numSquares(12))
