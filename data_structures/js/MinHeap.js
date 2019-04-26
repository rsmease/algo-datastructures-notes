//Heaps
//Tree heap structure where nodes are ordered with respect to value of their children
//Parent's node is either greater than or less than its children
//Similar to the binary search tree, expect that the root is an extreme vaue instead of a median

//Binary Heap: heap where each parent has at most two children
//Complete binary heap: all levels are filled, except for the bottom level, being filled left to right

//MinHeap: binary heap whose minimum value is stored as its root

class BinaryMinHeap {
    constructor() {
        this.heap = [];
    }

    //O(log(n))
    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap[-1]);
    }

    //O(log(n))
    extractMin() {
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    //O(1)
    swap(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    //O(log(n))
    bubbleUp(index) {
        while (index > 0) {
            const parent = Math.floor((index + 1) / 2) - 1;
            if (this.heap[parent] > this.heap[index]) {
                this.swap(this.heap[parent], this.heap[index]);
            }
            index = parent;
        }
    }

    //O(log(n))
    bubbleDown() {
        let index = 0;
        while (true) {
            let child = (index + 1) * 2;
            let sibling = child - 1;
            let indexToSwap = null;

            if (this.heap[index] > this.heap[child]) {
                indexToSwap = child;
            }

            if (this.heap[index] > this.heap[sibling] && (this.heap[child] === null ||
                    this.heap[child] !== null && this.heap[sibling] < this.heap[child])) {
                indexToSwap = sibling;
            }

            if (indexToSwap === null) {
                break;
            }

            this.swap(index, indexToSwap);
            index = indexToSwap;
        }
    }
}