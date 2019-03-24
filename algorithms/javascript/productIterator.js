const productIterator = (base, end) => {
  if (base === end) {
    return end;
  }
  return times(base, productIterator(base + 1, end));
}

const times = (a, b) => {
  if (a === 0 || b === 0) {
    return 0;
  }
  if (b % 2 === 0) {
    return times(a + a, b / 2);
  }
  return a + times(a, b - 1);
}

const multiplyRange = (a, b) => productIterator(a, b);
const factorial = (n) => multiplyRange(1, n);

const applicator = (func, ...inputs) => {
  return func(...inputs);
}

// const applicatorWithFilter = (applicator, filter) => {
//   if (filter) {
//     return applicator(...inputs)
//   }
// }

