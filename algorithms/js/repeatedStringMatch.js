const repeatedStringMatch = (A, B) => {
  if (!A.length || !B.length) {
    return 0;
  }

  let repeatedA = A;
  let timesRepeated = 1;
  const maxLength = A.length + B.length;

  while (repeatedA.length <= maxLength) {
    if (repeatedA.includes(B)) {
      return timesRepeated;
    }

    repeatedA += A;
    timesRepeated++;
  }

  return repeatedA.includes(B) ? timesRepeated : -1;
};

const tests = new Set();
tests.add(['abcd', 'cdabcdab']);
tests.forEach((test) => console.log(repeatedStringMatch(...test)))
