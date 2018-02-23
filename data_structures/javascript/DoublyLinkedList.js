class DoublyLinkedNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //O(1) time
    add(data) {
        const newNode = new DoublyLinkedNode(data);

        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return newNode;
    }

    //O(this.length) time
    findNodeAtPosition(position) {

        if (position > this.length || position < 1 || this.length === 0) {
            throw new RangeError(`Position ${position} is not available in LinkedList of length ${this.length}`);
        }

        let currentNode = this.head;
        let currentPosition = 1;

        while (currentPosition < position) {
            currentNode = currentNode.next;
            currentPosition++;
        }
        return currentNode;
    }

    //O(this.length / 2) time
    removeNodeAtPosition(position) {

        if (position > this.length || position < 1 || this.length === 0) {
            throw new RangeError(`Position ${position} is not available in LinkedList of length ${this.length}`);
        }

        const medianPosition = Math.floor(this.length / 2);
        let currentNode, previousNode, nextNode, nodeToDelete, deletedNode;

        if (position >= medianPosition) {
            currentNode = this.tail;
            currentPosition = this.length;

            while (currentPosition > position) {
                currentNode = currentNode.prev;
                currentPosition--;
            }

        } else {
            currentNode = this.head;
            currentPosition = 1;

            while (currentPosition < position) {
                currentNode = currentNode.next;
                currentPosition++;
            }
        }

        previousNode = currentNode.previous;
        nodeToDelete = currentNode;
        nextNode = currentNode.next;

        previousNode.next = nextNode;
        nextNode.previous = previousNode;
        deletedNode = nodeToDelete;
        nodeToDelete = null;
        return deletedNode;

    }

    //TODO: test remove at position; write findNodeWithData, removeNodeWithData;
}