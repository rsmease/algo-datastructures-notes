const inOrderRecursive = (rootNode, result = []) => {
  if (!rootNode) {
    return [];
  }

  traverseRecursive(rootNode, result);
  return result;
}

const traverseRecursive = (node, result) => {
  node.left && traverseRecursive(node.left, result);
  result.push(node.val);
  node.right && traverseRecursive(node.right, result);

  return true;
}

const inOrderIterative = (rootNode) => {
  const result = [];

  if (!rootNode) {
    return result;
  }
  let currentNode = rootNode;
  const processingStack = [];

  while (currentNode || processingStack.length) {
    if (!currentNode) {
      currentNode = processingStack.pop();
      result.push(currentNode.val);
      currentNode = currentNode.right;
    } else {
      processingStack.push(currentNode);
      currentNode = currentNode.left;
    }
  }
  return result;
}
