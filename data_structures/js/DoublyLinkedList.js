//For value of a linked list in general, see SinglyLinkedList


//Singly vs. Doubly Linked Lists
//Singly linked list carry less memory per node (one pointers instead of two)
//Complexity of insertion and deletion at a known position for a singly linked list is O(n) for both
//If we care about search performance, a DDL is better; if we care about space more, a SLL is better
//In B-trees and heap trees, we need a doubly linked list to rearrange nodes

class DoublyLinkedNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
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

        if (position === 1) {
            nodeToDelete = this.head;
            this.head = nodeToDelete.next;
            deletedNode = nodeToDelete;
            nodeToDelete = null;
            return deletedNode;
        } else if (position === this.length) {
            nodeToDelete = this.tail;
            this.tail = nodeToDelete.prev;
            deletedNode = nodeToDelete;
            nodeToDelete = null;
            return deletedNode;
        }

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

    findNodeWithData(data) {

        if (this.length === 0) {
            return null;
        }

        let currentNode = this.head;

        while (currentNode.next && currentNode.next != data) {
            currentNode = currentNode.next;
        }
        if (currentNode.next.data == data) {
            return currentNode.next;
        } else {
            return null;
        }
    }

    findNodeWithDataStrict(data) {

        if (this.length === 0) {
            return null;
        }

        let currentNode = this.head;

        while (currentNode.next && currentNode.next !== data) {
            currentNode = currentNode.next;
        }
        if (currentNode.next.data === data) {
            return currentNode.next;
        } else {
            return null;
        }
    }

    deleteNodeWithData(data) {
        if (this.length === 0) {
            return null;
        }

        let currentNode, previousNode, nextNode, nodeToDelete, deletedNode;

        while (currentNode.next && currentNode.next != data) {
            currentNode = currentNode.next;
        }
        if (currentNode.next.data == data) {
            previousNode = currentNode;
            nodeToDelete = currentNode.next;
            nextNode = nodeToDelete.next;

            previousNode.next = nextNode;
            nextNode.prev = previousNode;
            deletedNode = nodeToDelete;
            nodeToDelete = null;
            return deletedNode;
        } else {
            return null;
        }
    }

    deleteNodeWithDataStrict(data) {
        if (this.length === 0) {
            return null;
        }

        let currentNode, previousNode, nextNode, nodeToDelete, deletedNode;

        while (currentNode.next && currentNode.next !== data) {
            currentNode = currentNode.next;
        }
        if (currentNode.next.data === data) {
            previousNode = currentNode;
            nodeToDelete = currentNode.next;
            nextNode = nodeToDelete.next;

            previousNode.next = nextNode;
            nextNode.prev = previousNode;
            deletedNode = nodeToDelete;
            nodeToDelete = null;
            return deletedNode;
        } else {
            return null;
        }
    }
}