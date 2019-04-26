var connect = function (root) {
  if (!root) {
    return null;
  }
  const processingQueue = [root];

  // descriptive variables for clarity
  const currentNodePointer = 0;
  const layerEndPointer = 0;
  let currentNode;

  // alias variables for brevity
  let cnp = currentNodePointer;
  let lep = layerEndPointer;

  // start with root
  currentNode = processingQueue[cnp]

  while (currentNode) {
    // add this nodes children to the queue, building the next layer
    currentNode.left && processingQueue.push(currentNode.left);
    currentNode.right && processingQueue.push(currentNode.right);

    // move over the nodes in each layer, assigning .next to the next node
    // when we reach the end of this layer,
    // extend layer end pointer to include all the next layer's nodes
    if (cnp === lep) {
      currentNode.next = null;
      lep = processingQueue.length - 1;
    } else {
      currentNode.next = processingQueue[cnp + 1];
    }

    // move to the next node
    cnp++;
    currentNode = processingQueue[cnp];
  }
  return root;
};
