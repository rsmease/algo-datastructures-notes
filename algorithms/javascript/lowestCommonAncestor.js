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
    result = lowestCommonAncestor(root.left);
    return result;
  }

  if (rightCondition) {
    result = lowestCommonAncestor(root.right);
    return result;
  }

  return result;
};

var hasChild = function (node, targetValue) {
  if (!node) {
    return false;
  }
  return (
    node.val === targetVal
    || hasChild(node.left, targetValue)
    || hasChild(node.right, targetValue)
  );
}
