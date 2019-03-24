const makeChange = (coins, amount) => {
  if (amount < 0 || !coins.length) {
    return 0;
  }
  if (amount === 0) {
    return 1;
  }

  const remainingCoins = coins.slice(0);
  const currentCoin = remainingCoins.shift();

  return makeChange(coins, amount - currentCoin) + makeChange(remainingCoins, amount);
}

console.log(makeChange([25, 10], 100));
