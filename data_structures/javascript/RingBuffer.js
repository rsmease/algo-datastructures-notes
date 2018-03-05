//Value of Circular Queue
//Allows us to continuously add elements to the queue if elements have been removed. In a normal queue, at least in a language like C, a queue is full when we have assigned something to the final location in the static memory alloted to the array, we run into an error. A dynamic array or circular queue (implemented with an array) allows us to look for empty slots at the beginning of the array, if they exist, so that we are not constrained by the original memory allocation. We reassign to the begining of the array with a simple modulo operation. 

//Where would we want to use this?
//We need fixed memory, but the used capacity of that memory will vary over time. 
//We do not mind erasing old memory in the queue when the queue is full, or we are comfortable refusign to make space when the queue is full.

//Where would we not want to use this?
//We need a dynamically spanding queue (use a doubly linked list instead)

//Where are buffers used in computer science?

//Buffers are used as data structures that house data temporarily as it is moved from one physical location in memory to another, commonly from one process in an operating system to another
//Buffers are useful because the receipt and process rates for data can vary; typically, things are received more quickly than they are processed, or they are received out of order and they must be held and sorted before processing

class RingBuffer {
    constructor(capacity, evictedCb) {
        this.elements = new Array(capacity || 50);
        this.first = 0;
        this.last = 0;
        this.size = 0;
        this.evictedCb = evictedCb;
    }

    //O(1)
    capacity() {
        return this.elements.length;
    }
    //O(1)
    size() {
        return this.size;
    }
    //O(1)
    isEmpty() {
        return this.size === 0;
    }
    //O(1)
    isFull() {
        return this.size() === this.capacity();
    }
    //O(1)
    peek() {
        if (this.isEmpty()) {
            throw new Error('Cannot peek when Ring buffer is empty.')
        } else {
            return this.elements[this.first];
        }
    }

    //O(this.size())
    peekToPosition(position) {
        if (position > this.size()) {
            throw new Error(`Position ${position} does not exist in RingBuffer of size ${this.size()}`)
        }

        const absPosition = Math.min(this.first + position, this.capacity());

        const firstHalf = this.elements.slice(this.first, absPosition);
        const secondHalf = this.elements.slice(0, position - firstHalf.length);

        return absPosition < this.capacity() ? firstHalf : secondHalf;
    }

    //O(1)
    dequeue() {
        const dequeuedElement = this.peek();

        this.size--;
        this.first = (this.first + 1) % this.capacity();

        return dequeuedElement;
    }

    //O(this.size())
    dequeueToPosition(position) {
        const dequeuedElements = this.peekToPosition(position);

        this.size -= position;
        this.first = (this.first + position) % this.capacity();

        return dequeuedElements;
    }

    //O(1)
    enqueue(newElement) {
        this.end = (this.first + this.size()) % this.capacity();
        if (this.isFull() && this.evictedCb) {
            this.evictedCb(this.elements[this.end]);
        }

        this.elements[this.end] = newElement;
        if (this.isFull()) {
            this.first = (this.first + 1) % this.capacity();
        } else {
            this.size++;
        }

        return this.size();
    }
}