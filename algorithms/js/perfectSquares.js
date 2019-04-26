const numSquares = function (desiredSum) {
  if (isSquare(desiredSum)) {
    return 1;
  }

  const memo = [0, 1, 2, 3];
  let squareFlag = false;

  for (let i = 3; i <= desiredSum; i++) {
    memo[i] = memo[i - 1] + 1;

    if (squareFlag) {
      squareFlag = false;
      continue;
    }

    for (let j = 1; j * j <= i; j++) {
      memo[i] = Math.min(memo[i], memo[i - j * j] + 1);
    }

    if (memo[i] === 1) {
      squareFlag = true;
    }
  }

  return memo[desiredSum]
};

const isSquare = (sum) => Math.sqrt(sum) % 1 === 0;
