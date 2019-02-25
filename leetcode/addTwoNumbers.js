/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  // track result as LL built during trace of input LLs
  let result = new ListNode(0);
  let currentHead = result;

  // keep current sum, carry
  let currentSum = 0;
  let carry = 0;

  // until both LLs are empty and there is no carry remainder (currentSum)
  while (l1 || l2 || currentSum > 0) {
    if (l1) {
      currentSum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      currentSum += l2.val
      l2 = l2.next;
    }
    if (currentSum >= 10) {
      currentSum -= 10;
      carry = 1;
    }
    currentHead.next = new ListNode(currentSum);
    currentHead = currentHead.next;

    currentSum = carry;
    carry = 0;
  }
  // avoid returning leading zero
  return result.next;

};

// NOTES:
// not an organic solution, needed to review others' work for guidance
// runtime: O(n) where n is Math.max(l1.length, l2.length)
// memory: n where n is Math.max(l1.length, l2.length) (l1, l2, result, currentHead)
