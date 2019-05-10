// Given two binary strings, return their sum (also a binary string).

// The input strings are both non-empty and contains only characters 1 or 0.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = "";

  let aPointer = a.length - 1;
  let bPointer = b.length - 1;

  let currentA, currentB, currentSum;
  let carry = 0;

  while (aPointer >= 0 || bPointer >= 0) {
    currentA = a[aPointer] || "0";
    currentB = b[bPointer] || "0";

    currentSum = parseInt(currentA) + parseInt(currentB) + carry;
    carry = Math.floor(currentSum / 2);
    currentSum %= 2;

    result = currentSum.toString() + result;

    aPointer--;
    bPointer--;
  }

  return carry ? carry.toString() + result : result;
};

tests = new Set();
tests.add(["11", "1"]);
tests.add(["1010", "1011"]);

tests.forEach((test) => console.log(addBinary(...test)))
