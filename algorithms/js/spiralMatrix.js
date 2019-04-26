/*
Prompt

Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

const spiralOrder = (matrix, result = []) => {
  if (!matrix.length) {
    return result;
  }

  // add first row to result
  result = result.concat(matrix.shift())

  let currentRow;
  for (let i = 0; i < matrix.length; i++) {
    currentRow = matrix[i];

    if (!currentRow.length) {
      return result;
    }
    result.push(currentRow.pop());
    currentRow.reverse();
  }

  // we need to reverse the matrix to maintain the spiral effect
  matrix.reverse();

  return spiralOrder(matrix, result);
}

const tests = new Set();
tests.add([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);

tests.add([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]);

tests.forEach((test) => console.log(spiralOrder(test)))
