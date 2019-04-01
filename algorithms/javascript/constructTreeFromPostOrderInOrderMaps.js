// to improve: add pointers to improve this
// instead of array manipulation, just move the pointers to indicate subarrays

const buildTree = (inorder, postorder) => {
  if (!inorder.length) {
    return null;
  }
  const root = new TreeNode(postorder.pop());
  const rootPositionInOrder = inorder.indexOf(root.val);

  root.left =
    rootPositionInOrder > 0 ?
      buildTree(
        inorder.slice(0, rootPositionInOrder),
        postorder.slice(0, rootPositionInOrder)
      )
      : null;

  root.right =
    postorder.length ?
      buildTree(
        inorder.slice(rootPositionInOrder + 1),
        postorder.slice(rootPositionInOrder)
      )
      : null;

  return root;
};
