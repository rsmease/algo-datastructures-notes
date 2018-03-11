//How to Pick a Traversal Pattern
//Pre-order: you know you need to explore roots first
//Pre-order traversal is used to create a copy of the tree;
//Pre-order traveral is used to get a prefix expression on a trie

//Post-order: you know you needto explore leaves right
//Post-order traversal is used to delete the tree
//Post order is used to get a suffix expression on a trie

//In-order: you want to preserve the inherent order of the tree, or flatten it

//Full binary tree: all nodes have either 0 or two children
//Complete binary tree: tree is completely filled to leaf level, where all nodes are filled left to right (e.g. a minHeap/maxHeap)
//Perfect binary tree: both full and complete

class BinarySearchTreeNode {
    constructor(value) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    //O(depth of tree)
    insert(value) {
        const newNode = new BinaryTreeNode(value);
        if (value <= this.value) {
            if (!this.left) {
                this.left = newNode;
            } else {
                this.left.insert(newNode);
            }
        } else {
            if (!this.right) {
                this.right = newNode;
            } else {
                this.right.insert(newNode);
            }
        }
    }

    //O(depth of three)
    contains(value) {
        if (value === this.value) {
            return true;
        } else if (value < this.value) {
            if (!this.left) {
                return false;
            } else {
                return this.left.contains(value);
            }
        } else {
            if (!this.right) {
                return false;
            } else {
                return this.right.contains(value)
            }
        }
    }

    //O(number of nodes)
    DFSTraversal(traversalCb, order = 'in') {
        if (order = 'pre') {
            traversalCb(this.value);
        }
        if (this.left) {
            this.left.DFSTraversal(traversalCb, order);
        }
        if (order = 'in') {
            traversalCb(this.value);
        }
        if (this.right) {
            this.right.DFSTraversal(traversalCb, order);
        }
        if (order = 'post') {
            traversalCb(this.value)
        }
    }

    //O(number of nodes)
    BFSTraversal(traversalCb) {
        let processingQueue = [this];
        while (processingQueue.length) {
            let currentNode = processingQueue.shift();
            traversalCb(currentNode);
            if (currentNode.left) {
                processingQueue.push(currentNode.left);
            }
            if (currentNode.right) {
                processingQueue.push(currentNode.right);
            }
        }
    }

    //O(depth of tree)
    getMin() {
        return this.left ? this.left.getMin() : this.value;
    }

    //O(depth of tree)
    getMax() {
        return this.right ? this.right.getMin() : this.value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    //O(depth of tree)
    add(value) {
        const newNode = new BinarySearchTreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.root.insert(newNode);
        }
    }

    //O(depth of three)
    remove(value) {

        if (!this.root) {
            return null;
        }

        const removeNode = (node, value) => {
            if (!node) {
                return null;
            }
            if (node.value === value) {
                if (!node.left && !node.right) {
                    return null;
                }
                if (!node.left) {
                    return node.right;
                }
                if (!node.right) {
                    return node.left;
                }

                const min = this.right.getMin();
                node.value = min;
                node.right = removeNode(node.right, min);
                return node;
            } else if (value < node.value) {
                node.left = removeNode(node.left, value);
                return node.left;
            } else {
                node.right = removeNode(node.right, value);
                return node.right;
            }
        };

        this.root = removeNode(this.root, value);
    }

    //O(depth of tree)
    getHeight(node = this.root) {
        if (!node) {
            return 0;
        } else {
            const rightHeight = this.getHeight(node.right);
            const leftHeight = this.getHeight(node.left);
            return Math.max(rightHeight, leftHeight) + 1;
        }
    }

    //O(2 * depth of tree)
    isBalanced(node = this.root) {
        if (!node) {
            return true;
        }
        const leftHeight = this.getHeight(node.left);
        const rightHeight = this.getHeight(node.right);
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return false;
        } else {
            return this.isBalanced(node.left) && this.isBalanced(node.right);
        }
    }

}