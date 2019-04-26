const accumulator = (initialValue = 0) => {
  this.count = initialValue;
  return (newValue) => {
    this.count += newValue;
    return this.count;
  }
}

const myAccumulator = accumulator();
console.log(myAccumulator(10))
console.log(myAccumulator(10))
console.log(myAccumulator(10))
console.log(myAccumulator(10))
console.log(myAccumulator(10))
console.log(myAccumulator(10))
console.log(myAccumulator(10))
console.log(myAccumulator(10))
