const sameParity = (number, args) => {
  const isEven = (number) => number % 2 === 0;
  const isOdd = (number) => !isEven(number);

  const parity = isEven(number) ? isEven : isOdd;
  return args.filter((arg) => parity(arg));
}

const args = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sameParity(1, args));
console.log(sameParity(2, args));
