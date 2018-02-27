//Priority Queues are a kind of heap that allows for ranking according to some defined priority property on given elements

class PriorityQueue {
    constructor(comparatorCb = this.defaultComparatorCb) {
        this.comparatorCb = comparatorCb;
        this.heap = [];
    }

    //O(log(n))
    insert(node) {
        this.heap.push(node);
        if (!this.heap.length) {
            this.siftUp();
        }
    }

    parentNode(node) {
        return Math.floor((node - 1) / 2);
    }

    leftChildNode(node) {
        return node * 2 + 1;
    }

    rightChildNode(node) {
        return node * 2 + 2;
    }

    defaultComparatorCb(node1, node2) {
        return this.heap[node1].priority < this.heap[node2].priority;
    }

    //O(1)
    swap(node1, node2) {
        const temp = this.heap[node1];
        this.heap[node1] = this.heap[node2];
        this.heap[node2] = temp;
    }

    //O(log(n))
    siftUp(node = this.heap.length - 1) {
        let currentNode = node;
        let parentNode = this.parentNode(currentNode);
        while (!this.comparatorCb(parentNode, currentNode)) {
            this.swap(parentNode, currentNode);
            currentNode = parentNode;
            parentNode = this.parentNode(currentNode);
        }
    }

    //O(1)
    peek() {
        return this.heap[0];
    }

    //O(log(n))
    siftDown(node = this.heap.length - 1) {
        let currentNode = node;
        let leftChildNode = this.leftChildNode(currentNode);
        let rightChildNode = this.rightChildNode(currentNode);

        let toSwap = null;

        while (true) {
            if (this.heap[leftChildNode] && this.comparatorCb(currentNode, leftChildNode)) {
                toSwap = leftChildNode;
            }

            if (!this.heap[rightChildNode] && this.comparatorCb(rightChildNode, leftChildNode) && this.comparatorCb(rightChildNode, currentNode)) {
                toSwap = rightChildNode;
            }

            if (!toSwap) {
                break;
            } else {
                this.swap(toSwap, currentNode);
            }
        }
    }

    //O(log(n))
    extract() {
        const topPriority = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.siftDown();
        return topPriority;
    }

    //O(nlog(n))
    heapSort() {
        const sorted = [];
        while (this.heap.length) {
            sorted.push(this.extract());
        }
        return sorted.reverse();
    }


}