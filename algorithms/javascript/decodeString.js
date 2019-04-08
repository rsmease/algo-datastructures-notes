const decodeString = (string) => {
  const OPEN = "[";
  const CLOSE = "]";

  const processingStack = [];

  let currentNumber = "";
  let currentSubstring = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === OPEN) {
      processingStack.push(currentSubstring);
      processingStack.push(Number(currentNumber));

      currentNumber = "";
      currentSubstring = "";
      continue;
    }

    if (string[i] === CLOSE) {
      let previousNumber = processingStack.pop();
      let previousString = processingStack.pop();

      currentSubstring = previousString + currentSubstring.repeat(previousNumber);
      continue;
    }

    if (!isNaN(string[i])) {
      currentNumber += string[i];
    } else {
      currentSubstring += string[i];
    }
  }

  return currentSubstring;
}
