// to improve: add pointers to improve this
// instead of array manipulation, just move the pointers to indicate subarrays

const buildTree = (preorder, inorder) => {
  if (!(inorder.length && preorder.length)) {
    return null;
  }

  const root = new TreeNode(preorder[0]);
  const rootPositionInOrder = inorder.indexOf(root.val);

  root.left = buildTree(
    preorder.slice(1, rootPositionInOrder + 1),
    inorder.slice(0, rootPositionInOrder)
  );

  root.right = buildTree(
    preorder.slice(rootPositionInOrder + 1),
    inorder.slice(rootPositionInOrder + 1)
  );

  return root;
};
