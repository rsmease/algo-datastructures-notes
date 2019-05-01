// Given two strings s and t, determine if they are both one edit distance
// apart.

// Note:

// There are 3 possiblities to satisify one edit distance apart:

// Insert a character into s to get t
// Delete a character from s to get t
// Replace a character of s to get t
// Example 1:

// Input: s = "ab", t = "acb"
// Output: true
// Explanation: We can insert 'c' into s to get t.
// Example 2:

// Input: s = "cab", t = "ad"
// Output: false
// Explanation: We cannot get t from s by only one step.
// Example 3:

// Input: s = "1203", t = "1213"
// Output: true
// Explanation: We can replace '0' with '1' to get t.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Note:
// OED => one edit ditance

const isOneEditDistance = (s, t) => {
  const [longerString, shorterString] = s.length < t.length ? [t, s] : [s, t];
  const differenceInLength = Math.abs(longerString.length - shorterString.length);

  // only compare strings with baseline potential to be OED
  if (differenceInLength > 1) {
    return false;
  }

  // we want both I and J so that we can speed up J if we need to; see below
  let oneMismatchAlreadyFound = false;
  let currentShortChar, currentLongChar;
  for (let i = j = 0; i < shorterString.length; i++ , j++) {
    currentShortChar = shorterString[i];
    currentLongChar = longerString[j];

    // base case: characters are equal, continue looping
    if (currentShortChar === currentLongChar) {
      continue;
    }

    // if we already found a mismatch and this is our second mismatch, return false
    if (oneMismatchAlreadyFound) {
      return false;
    }

    // flag the first time we find a mismatch;
    // if the two strings don't have equal length, speed up the longer string to
    // represent the addition / substraction of the one character
    oneMismatchAlreadyFound = true;

    // speed up longer string, see if the issue is just a one-time problem
    if (differenceInLength) {
      j++;
      currentLongChar = longerString[j];

      // we want to immediately check this because of the edge case where the
      // difference shows up at the very end of the strings
      if (currentShortChar !== currentLongChar) {
        return false;
      }
    }
  }

  // three possible end states:

  // if we found no mismatches and the strings are equal in length, return false
  // because strings are equal

  // if we found no mismatches but one of the strings is exactly 1 longer, then
  // we have something like "a" and "ab" or "bobcat" and "bobcats", so return true

  // if we found one mismatch, that's perfect, so return true immediately
  return oneMismatchAlreadyFound || differenceInLength;
};

const tests = new Set();
tests.add(["a", "b"]);
tests.add(["aa", "b"]);
tests.add(["ab", "bb"]);
tests.add(["aaaa", "aaab"]);

tests.forEach((test) => console.log(isOneEditDistance(...test)));
