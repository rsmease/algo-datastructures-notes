const makeMonitored = (functionToWatch) => {
  this.callCount = 0;
  return (input) => {
    this.callCount++;
    console.log("Call count: " + this.callCount)
    return functionToWatch(input);
  }
}
makeMonitored.getCallCount = () => this.callCount;

const squareRoot = (r) => r * r;
const monitorSquareRoot = makeMonitored(squareRoot);

const addTwo = (r) => r + 2;
const monitorAddTwo = makeMonitored(addTwo);

console.log(monitorSquareRoot(4))
console.log(monitorSquareRoot(1))
console.log(monitorAddTwo(4));
