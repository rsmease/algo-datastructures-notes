const fermatPrimeTest = (n) => {
  const random = Math.ceil(Math.random() * n) - 1;
  return remainerAfterExpotentiation(random, n, n) === random;
}

const isPrime = (n, times = 100) => {
  if (times === 0) {
    return true;
  }
  if (!fermatPrimeTest(n)) {
    return false;
  }
  return isPrime(n, times - 1)
}

const remainerAfterExpotentiation = (base, exponent, modulo) => {
  if (exponent === 0) {
    return 1;
  }
  let next;
  if (exponent % 2 === 0) {
    next = millerRabinTest(remainerAfterExpotentiation(base, exponent / 2, modulo), modulo) * millerRabinTest(remainerAfterExpotentiation(base, exponent / 2, modulo), modulo)
  } else {
    next = base * remainerAfterExpotentiation(base, exponent - 1, modulo);
  }
  return next % modulo;
}

const millerRabinTest = (exponent, n) => {
  if (exponent === 1 || exponent + 1 === n) {
    return exponent;
  }
  if ((exponent * exponent) % n === 1) {
    return 0;
  }
  return exponent;
}

console.log(isPrime(2465))
