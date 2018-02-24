//Value of Linked List
//No need for a fixed allocation of memory in a defined space, because the nodes can be scattered in memory dynamically

//When would we want to use this?
//If we don't know how much space we'll need, this structure makes more sense than an array, which requires that we allocate a fixed amount of memory
//Linked lists have no added memory for storage, but they do have added memory for the pointers to the nodes in the array (this is less than the added memory storage allocation, in general)
//Adding an element to the head of the list is very easy, whereas with an array, it requires that we shift the position of all the subsequent elements
//Adding an element to the end of an array is an O(1) operation if we're using a dynamic ring buffer that tracks the current last-filled element, but O(current number of elements) if we do not have that ring buffer. Similarly, we have O(current number of elements) to insert into a singly linked list, and O(1) to insert at the end of an doubly-linked list
//For insertion, different variations of these data structuers have various advantages, making them score roughly evenly.

//When would we not want to use this? 
//If we want constant time look up, we should use an array instead. Because arrays have a fixed starting memory address, they can be randomly accessed in O(1) time because the address of a locations are mathematically fixed in relation to this starting memory address.

class SinglyLinkedNode {
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
        const newNode = new SinglyLinkedNode(data);

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
        let NodeToDelete = null;
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
            //start position at 0 so that we break when NodeToDelete is currentNode.next
            //and not currentNode
            while (currentPosition < position) {
                previousNode = currentNode;
                NodeToDelete = currentNode.next;
                currentPosition++;
            }

            previousNode.next = NodeToDelete.next;
            deletedNode = NodeToDelete;
            //set to null to formally remove from linkedList
            NodeToDelete = null;
            this.length--;
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
            this.length--;
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
            this.length--;
            return deletedNode;
        } else {
            return null;
        }
    }
}