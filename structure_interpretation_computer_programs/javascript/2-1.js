const greatestCommonDenominator = (num1, num2) => {
  let num1ABS = Math.abs(num1);
  let num2ABS = Math.abs(num2);
  let temp;
  while (num2ABS) {
    temp = num2ABS;
    num2ABS = num1ABS % num2ABS;
    num1ABS = temp;
  }
  return num1ABS;
}

const makeRationalNumber = (numerator, denominator) => {
  let GCD = greatestCommonDenominator(numerator, denominator);
  let sign = numerator < 0 || denominator < 0 ? -1 : 1;

  return { numerator: Math.abs(numerator) / GCD, denominator: Math.abs(denominator) / GCD, sign }
}

console.log(makeRationalNumber(3, 4))
console.log(makeRationalNumber(12, 16))
console.log(makeRationalNumber(1, -8))
