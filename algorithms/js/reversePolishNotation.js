var evalRPN = function (tokens) {
  if (!tokens.length) { return 0; }

  const OPERATORS = {
    "*": (a, b) => a * b,
    "/": (a, b) => a / b > 0 ? Math.floor(a / b) : Math.ceil(a / b),
    "+": (a, b) => a + b,
    "-": (a, b) => a - b
  };
  const numberStack = [];
  let currentToken, operationResult, last, secondToLast;

  for (let i = 0; i < tokens.length; i++) {
    currentToken = tokens[i];

    if (OPERATORS[currentToken]) {
      last = numberStack.pop();
      secondToLast = numberStack.pop();

      operationResult = OPERATORS[currentToken](secondToLast, last);
      numberStack.push(operationResult);
      continue;
    }

    numberStack.push(Number(currentToken));
  }
  return numberStack.pop();
};
