// naive solution
// O(n**2), because I am doing duplciate work with the hasChild() method

// var lowestCommonAncestor = function (root, p, q) {
//   let result = root;

//   const leftCondition =
//     root.left
//     && hasChild(root.left, p)
//     && hasChild(root.left, q);

//   const rightCondition =
//     root.right
//     && hasChild(root.right, p)
//     && hasChild(root.right, q);

//   if (leftCondition) {
//     result = lowestCommonAncestor(root.left, p, q);
//     return result;
//   }

//   if (rightCondition) {
//     result = lowestCommonAncestor(root.right, p, q);
//     return result;
//   }

//   return result;
// };

// var hasChild = function (node, child) {
//   if (!node) {
//     return false;
//   }
//   return (
//     node.val === child.val
//     || hasChild(node.left, child)
//     || hasChild(node.right, child)
//   );
// }

var lowestCommonAncestor = function (root, p, q) {
  // if the root has as its value P or Q, it must be the lowest common ancestor,
  // assuming that all node values are unique
  if (!root || root.val === p || root.val === q) {
    return root;
  }

  const leftResult = lowestCommonAncestor(root.right, p, q);
  const rightResult = lowestCommonAncestor(root.right, p, q);

  // if we found nothing in left, bubble up right
  if (!leftResult) {
    return rightResult;
  }
  // if we found nothing in right, bubble up left
  if (!rightResult) {
    return leftResult;
  }

  // if we found something in both sides of the tree, return the parent
  return root;

}
