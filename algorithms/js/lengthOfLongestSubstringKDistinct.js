/*
Prompt

Given a string, find the length of the longest substring T that contains at most k distinct characters.

Example 1:

Input: s = "eceba", k = 2
Output: 3
Explanation: T is "ece" which its length is 3.
Example 2:

Input: s = "aa", k = 1
Output: 2
Explanation: T is "aa" which its length is 2.
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

const lengthOfLongestSubstringKDistinct = (s, k) => {
  let count = 0;
  let characterMap = new Map();
  let maxLength = -1 * Number.MAX_SAFE_INTEGER;
  let start = 0;

  const addToMap = (char, differential) => {
    const charCount = characterMap.get(char) || 0;
    characterMap.set(char, charCount + differential);
  }

  let startChar, endChar;
  for (let end = 0; end < s.length; end++) {
    endChar = s[end];
    addToMap(endChar, 1)

    if (characterMap.get(endChar) === 1) {
      count++;
    }

    while (count > k) {
      startChar = s[start];
      addToMap(startChar, -1)

      if (!characterMap.get(startChar)) {
        count--;
      }
      start++;
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength > 0 ? maxLength : 0;
}

const tests = new Set();
tests.add(["eceba", 2]);
tests.add(["aa", 1]);

tests.forEach((test) => console.log(lengthOfLongestSubstringKDistinct(...test)))
