const findSmallestDivisor = (n) => {
  return n < 0 ? divisorIterator(Math.abs(n)) * -1 : divisorIterator(n);
}

const divisorIterator = (n, divisor = 3) => {
  if (n < 2) {
    return n;
  }
  if (n % 2 === 0) {
    return 2;
  }
  if (n % divisor === 0) {
    return divisor;
  }
  if (divisor * divisor > n) {
    return null;
  }
  return divisorIterator(n, divisor + 2)
}

const isPrime = (n) => findSmallestDivisor(n) === null;

console.log(findSmallestDivisor(19999));
