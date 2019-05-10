// Determine whether an integer is a palindrome. An integer is a palindrome when
// it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true

// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it
// becomes 121-. Therefore it is not a palindrome.

// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Follow up:

// Coud you solve it without converting the integer to a string?

/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = (integer) => {
  if (integer < 0) {
    return false;
  }

  if (integer < 10) {
    return true;
  }

  if (integer % 10 === 0) {
    return false;
  }

  let reversed = 0;
  let remainder = integer;

  let current;
  while (remainder >= 10) {
    current = remainder % 10;
    reversed = (reversed * 10) + current;

    if (remainder === reversed) {
      return true;
    }

    remainder = Math.floor(remainder / 10);

    if (remainder === reversed) {
      return true;
    }

    if (remainder < reversed) {
      return false;
    }
  }

  return false;
};

tests = new Set();
tests.add(121);
tests.add(-121);
tests.add(10);
tests.add(4);
tests.add(44);
tests.add(445455);

tests.forEach((test) => console.log(isPalindrome(test)))
