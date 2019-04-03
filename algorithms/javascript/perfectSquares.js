const numSquares = function (desiredSum) {
  if (isSquare(desiredSum)) {
    return 1;
  }

  const memo = [0, 1, 2, 3];

  for (let i = 3; i <= desiredSum; i++) {
    memo[i] = memo[i - 1] + 1;
    for (let j = 1; j * j <= i; j++) {
      memo[i] = Math.min(memo[i], memo[i - j * j] + 1);
    }
  }

  return memo[desiredSum]
};

const isSquare = (sum) => Math.sqrt(sum) % 1 === 0;
