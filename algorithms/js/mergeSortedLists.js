// Merge k sorted linked lists and return it as one sorted list. Analyze and
// describe its complexity.

// Example:

// Input:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// Output: 1->1->2->3->4->4->5->6

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

const mergeKLists = (lists, start = 0, end = lists.length - 1) => {
  if (lists.length === 0) {
    return null;
  }

  if (start === end) {
    return lists[start];
  }

  const median = Math.floor((start + end) / 2);
  const left = mergeKLists(lists, start, median);
  const right = mergeKLists(lists, median + 1, end);

  return mergeTwoLists(left, right);
};

const mergeTwoLists = (list1, list2) => {
  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  }

  list2.next = mergeTwoLists(list1, list2.next);
  return list2;
}
