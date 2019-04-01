var lowestCommonAncestor = function (root, p, q) {
  let result = root;

  const leftCondition =
    root.left
    && hasChild(root.left, p)
    && hasChild(root.left, q);

  const rightCondition =
    root.right
    && hasChild(root.right, p)
    && hasChild(root.right, q);

  if (leftCondition) {
    result = lowestCommonAncestor(root.left, p, q);
    return result;
  }

  if (rightCondition) {
    result = lowestCommonAncestor(root.right, p, q);
    return result;
  }

  return result;
};

var hasChild = function (node, child) {
  if (!node) {
    return false;
  }
  return (
    node.val === child.val
    || hasChild(node.left, child)
    || hasChild(node.right, child)
  );
}
