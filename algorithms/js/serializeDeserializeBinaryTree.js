var serialize = function (root) {
  let result = "";

  var buildNodeString = function (root) {
    if (!root) {
      result += "e ";
      return;
    }
    result += root.val + " ";
    buildNodeString(root.left);
    buildNodeString(root.right);
  }

  buildNodeString(root);
  return result;
}

var deserialize = function (nodeString) {
  const nodes = nodeString.split(" ");

  var buildNodes = function () {
    const rootVal = nodes.shift();
    if (rootVal === "e") {
      return null;
    }
    const root = new TreeNode(parseInt(rootVal));
    root.left = buildNodes();
    root.right = buildNodes();
    return root;
  }

  buildNodes();
}


