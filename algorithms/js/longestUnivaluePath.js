/*
Prompt

Given a binary tree, find the length of the longest path where each node in the path has the same value. This path may or may not pass through the root.

The length of path between two nodes is represented by the number of edges between them.

Example 1:

Input:

              5
             / \
            4   5
           / \   \
          1   1   5
Output: 2



Example 2:

Input:

              1
             / \
            4   5
           / \   \
          4   4   5
Output: 2



Note: The given binary tree has not more than 10000 nodes. The height of the tree is not more than 1000.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const longestUnivaluePath = (root) => {
  const pathLength = 0;

  const scan = (parent) => {
    if (!parent) {
      return 0;
    }

    let leftValue = 0;
    let rightValue = 0;
    if (parent.value === parent.left.value) {
      leftValue = 1;
    }
    if (parent.value === parent.right.value) {
      rightValue = 1;
    }

    leftValue += Math.max(scan(parent.left.left), scan(parent.left.right))
    rightValue += Math.max(scan(parent.right.left), scan(parent.right.right))

    return Math.max(leftValue, rightValue)
  }
  return scan(root)
}
