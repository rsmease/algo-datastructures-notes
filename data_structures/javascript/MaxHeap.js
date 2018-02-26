class BinaryHeapNode {
    constructor(value) {
        this.parent = null;
        this.rightChild = null;
        this.leftChild = null;
        this.value = value;
    }
}

class MaxHeap {
    constructor() {
        this.length = 0;
        this.root = null;
    }

    count(node = this.root) {
        if (!node) {
            return 0;
        }
        let count = 1;
        count += this.count(node.leftChild);
        count += this.count(node.rightChild);
        return count;
    }

    insert(value) {
        const newNode = new BinaryHeapNode(value);
        this.length += 1;
        if (!this.root) {
            this.root = newNode;
        } else {
            //??
            return undefined;
        }
    }

    extractMax() {
        if (!this.root) {
            return null;
        } else {
            return this.remove(this.root);
        }
    }

    resetRoot() {
        if (!this.root) {
            return null;
        } else {
            let newRoot = this.root;
            while (newRoot.parent) {
                newRoot = newRoot.parent;
            }
            this.root = newRoot;
        }
    }

    last() {
        let path, position, modifier, insertNode;

        position = this.length;
        path = [];

        while (position > 1) {

        }
    }
}