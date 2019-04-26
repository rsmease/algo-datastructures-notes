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
  let globalMax = 0;

  const search = (node) => {
    if (!node) {
      return 0;
    }

    let leftTotal = search(node.left);
    let rightTotal = search(node.right);

    // mental metaphor here:
    // start with the deepest leaves, build the chain as far as you can upward
    // when you find a break in the chain, cut it and start over
    // by the time that you reset it, you will have already updated globalMax
    if (node.left) {
      leftTotal = node.left.val === node.val ? leftTotal + 1 : 0;
    }
    if (node.right) {
      rightTotal = node.right.val === node.val ? rightTotal + 1 : 0;
    }

    globalMax = Math.max(globalMax, (leftTotal + rightTotal));
    return Math.max(leftTotal, rightTotal);
  }

  search(root);
  return globalMax;
}
