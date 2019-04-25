/*
Prompt

Given a time represented in the format "HH:MM", form the next closest time by reusing the current digits. There is no limit on how many times a digit can be reused.

You may assume the given input string is always valid. For example, "01:34", "12:09" are all valid. "1:34", "12:9" are all invalid.

Example 1:

Input: "19:34"
Output: "19:39"
Explanation: The next closest time choosing from digits 1, 9, 3, 4, is 19:39, which occurs 5 minutes later.  It is not 19:33, because this occurs 23 hours and 59 minutes later.
Example 2:

Input: "23:59"
Output: "22:22"
Explanation: The next closest time choosing from digits 2, 3, 5, 9, is 22:22. It may be assumed that the returned time is next day's time since it is smaller than the input time numerically.
*/

const nextClosestTime = (timeString) => {
  const segments = timeString.split(":");

  const digits = segments.join("").split("");
  const digitsMatch = () => {
    if ((currentHour < 10 || currentMinute < 10) && !digits.includes("0")) {
      return false;
    }

    return (currentHour.toString() + currentMinute.toString()).split('').every((digit) => digits.includes(digit))
  }

  let currentHour = Number(segments[0]);
  const incrementHour = () => currentHour = (currentHour + 1) % 24;
  let currentMinute = Number(segments[1]);
  const incrementMinute = () => currentMinute = (currentMinute + 1) % 60;


  for (let i = 0; i < 60 * 24; i++) {
    incrementMinute() || incrementHour();

    if (digitsMatch()) {
      return currentHour.toString().padStart(2, '0') + ':' + currentMinute.toString().padStart(2, '0');
    }
  }

  return timeString;
}

const tests = new Set();
// tests.add('01:32')
tests.add('19:34');
// tests.add('23:59');

tests.forEach((test) => console.log((nextClosestTime(test))))
