class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    //O(this.length)
    add(data) {
        const newNode = new Node(data);

        let currentNode = this.head;

        if (!currentNode) {
            this.head = newNode;
            this.length++;
            return newNode;
        } else {
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
            this.length++;
            return newNode;
        }
    }

    //O(position)
    findNodeAtPosition(position) {
        let currentNode = this.head;
        let currentPosition = 1;

        if (position > this.length || position < 1 || this.length === 0) {
            throw new RangeError(`Position ${position} is not available in LinkedList of length ${this.length}`);
        }

        while (currentPosition < position) {
            currentNode = currentNode.next;
            currentPosition++;
        }

        return currentNode;
    }

    //O(this.length)
    findNodeWithData(data) {
        let currentNode = this.head;

        if (!currentNode) {
            return null;
        }

        while (currentNode.next && currentNode.data != data) {
            currentNode = currentNode.next;
        }
        if (currentNode.data == data) {
            return currentNode;
        } else {
            return null;
        }
    }

    //O(this.length)
    findNodeWithDataStrict(data) {
        let currentNode = this.head;

        if (!currentNode) {
            return null;
        }

        while (currentNode.next && currentNode.data !== data) {
            currentNode = currentNode.next;
        }
        if (currentNode.data === data) {
            return currentNode;
        } else {
            return null;
        }
    }

    //O(position)
    removeNodeAtPosition(position) {
        let currentNode = this.head;
        let currentPosition = 0;
        let previousNode = null;
        let nodeToDelete = null;
        let deletedNode = null;

        if (position > this.length || position < 1 || this.length === 0) {
            throw new RangeError(`Position ${position} is not available in LinkedList of length ${this.length}`);
        }

        //remove the head
        if (position === 1) {
            this.head = currentNode.next;
            deletedNode = currentNode;
            currentNode = null;
            this.length--;
            return deletedNode;
        } else {
            //start position at 0 so that we break when nodeToDelete is currentNode.next
            //and not currentNode
            while (currentPosition < position) {
                previousNode = currentNode;
                nodeToDelete = currentNode.next;
                currentPosition++;
            }

            previousNode.next = nodeToDelete.next;
            deletedNode = nodeToDelete;
            //set to null to formally remove from linkedList
            nodeToDelete = null;
            return deletedNode;
        }
    }

    //O(this.length)
    removeNodeWithData(data) {
        let currentNode = this.head;
        let deletedNode = null;
        let previousNode = null;

        if (!currentNode) {
            return null;
        }

        while (currentNode.next && currentNode.next.data != data) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        if (currentNode.data == data) {
            previousNode.next = currentNode.next;
            deletedNode = currentNode;
            currentNode = null;
            return deletedNode;
        } else {
            return null;
        }
    }

    //O(this.length)
    removeNodeWithDataStrict(data) {
        let currentNode = this.head;
        let deletedNode = null;
        let previousNode = null;

        if (!currentNode) {
            return null;
        }

        while (currentNode.next && currentNode.next.data !== data) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        if (currentNode.data === data) {
            previousNode.next = currentNode.next;
            deletedNode = currentNode;
            currentNode = null;
            return deletedNode;
        } else {
            return null;
        }
    }
}