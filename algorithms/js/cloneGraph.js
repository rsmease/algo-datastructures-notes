const cloneGraph = function (oldRoot, visited = new Map()) {

  const newRoot = new Node(oldRoot.val, []);
  visited.set(oldRoot.val, newRoot);

  oldRoot.neighbors.forEach((oldNeighbor) => {
    newRoot.neighbors.push(
      visited.get(oldNeighbor.val) || cloneGraph(oldNeighbor, visited)
    );
  });

  return newRoot;
}
