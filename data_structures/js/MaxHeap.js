class MaxHeap {
    constructor() {
        this.root = null;
        //where children are all stored at 
        //parentIndex * 2 + 1 and parentIndex * 2 + 2
        this.heap = [];
    }

    //O(log(n)) where n is number of nodes in tree
    insert(value) {
        this.heap.push(value);
        this.heap.siftUp(this.heap.length - 1);
    }

    leftChild(parentIndex) {
        return parentIndex * 2 + 1;
    }

    rightChild(parentIndex) {
        return parentIndex * 2 + 2;
    }

    parentIndex(childIndex) {
        return [Math.floor((childIndex - 1) / 2)];
    }

    swap(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    //O(1)
    getMax() {
        return this.heap[0];
    }

    //O(log(n)) where n is number of nodes in tree
    extractMax() {
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.siftDown();
        return max;
    }

    siftUp(index) {
        while (index > 0) {
            let parentIndex = this.parentIndex(index);
            if (this.heap[parentIndex] < this.heap[index]) {
                this.swap(parentIndex, index);
            }
            index = parent;
        }
    }

    siftDown() {
        let index = 0;
        let indexToSwap = null;
        while (true) {
            let leftChild = this.leftChild(index);
            if (this.heap[index] < this.heap[leftChild]) {
                indexToSwap = leftChild;
            }
            let rightChild = this.rightChild(index);
            if (this.heap[index] < this.heap[rightChild] && (this.heap[leftChild] === null ||
                    this.heap[leftChild] !== null && this.heap[rightChild] > this.heap[leftChild])) {
                indexToSwap = rightChild;
            }
            if (!indexToSwap) {
                break;
            } else {
                this.swap(index, indexToSwap);
                index = indexToSwap;
            }
        }
    }
}