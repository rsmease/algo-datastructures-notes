const functionalComposition = (operand, ...operators) => {
  let result = operand;
  while (operators.length) {
    result = operators.shift()(result);
  }
  return result;
}

const square = (x) => x * x;
const inc = (x) => x + 1;

console.log(functionalComposition(6, inc, square))
