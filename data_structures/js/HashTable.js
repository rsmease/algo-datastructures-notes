//Why use Hash Tables

//Hash tables are an associated array data structure, mapping keys to values
//Allow for (amortized) constant time lookup, insertion and deletion, although the worst case remains O(n)

//When we use a LList at each bucket to prevent overriding values in the case of collisions, it's called chaining
//We can chain with something other than a linked list (e.g. binary search tree) if we think that they chances of collision are very high

//When not to use Hash Tables

//When you don't need to look up things quickly (use a linked list)
//When the keys are integers and are within a small range (use an array)
//Balanced Binary Search Trees can expand more efficiently
//Binary Search Trees allow for faster in-order traversal of keys
//Hash Tables' hashing functions are hard to generate: they can be either unwieldy or inefficient
//If you can tolerate some overlap, a Bloom Filter is more memory efficient for representing a set

class HashNode {
    constructor(key, value, next) {
        this.key = key;
        this.value = value;
        this.next = next || null;
        this.size = 0;
    }
}

class HashTable {
    constructor() {
        this.size = 0;
        this.buckets = [];
        this.numberOfBuckets = this.buckets.length;
    }



    //O(key.length)
    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCode(i);
        }
        let bucket = total % this.numberOfBuckets;
        return bucket;
    }

    //O(key.length)
    checkKey(key) {
        if (typeof key === "object" || key == null) {
            throw new TypeError('Unallowed key type of object, null or undefined');
        }

        return typeof key === "string" ? key : key.toString();
    }

    //O(key.length + this.size)
    insert(key, value) {

        const keyString = this.checkKey(key);
        const targetBucket = this.hash(keyString);
        let currentNode = this.buckets[targetBucket];

        if (!currentNode) {
            currentNode = new HashNode(keyString, value);
            this.buckets[targetBucket] = currentNode;
            this.size++;
        } else if (currentNode.key === keyString) {
            currentNode.value = value;
        } else {
            while (currentNode.next) {
                if (currentNode.key === keyString) {
                    currentNode.value = value;
                    return;
                }
                currentNode = currentNode.next;
            }
            currentNode.next = new HashNode(keyString, value);
            this.size++;
        }
    }

    //O(this.size)
    get(key) {
        const keyString = this.checkKey(key);
        const targetBucket = this.hash(keyString);
        let currentNode = this.buckets[targetBucket];

        if (!currentNode) {
            return null;
        } else {
            while (currentNode) {
                if (currentNode.key === keyString) {
                    return currentNode.value;
                }
                currentNode = currentNode.next;
            }
            return null;
        }
    }

    //O(number of stored items in all buckets)
    remove(key) {
        const keyString = this.checkKey(key);
        const targetBucket = this.hash(keyString);
        let currentNode = this.buckets[targetBucket];
        let previousNode;

        if (!currentNode) {
            return null;
        } else if (currentNode.key === keyString) {
            nodeToDelete = currentNode;
            this.buckets[targetBucket] = currentNode.next;
            deletedNode = nodeToDelete;
            nodeToDelete = null;
            return deletedNode;
        } else {
            while (currentNode) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                if (currentNode && currentNode.key === keyString) {
                    nodeToDelete = currentNode;
                    previousNode.next = currentNode.next;
                    deletedNode = nodeToDelete;
                    nodeToDelete = null;
                    return deletedNode;
                }
            }
            return null;
        }
    }

    //O(this.size)
    keys() {
        const keysArr = [];
        for (let i = 0; i < this.numberOfBuckets; i++) {
            let currentNode = this.buckets[i];
            while (currentNode) {
                keysArr.push(currentNode.key);
                currentNode = currentNode.next;
            }
        }
        return keysArr;
    }

    //O(this.size)
    values() {
        const valsArr = [];
        for (let i = 0; i < this.numberOfBuckets; i++) {
            let currentNode = this.buckets[i];
            while (currentNode) {
                valsArr.push(currentNode.value);
                currentNode = currentNode.next;
            }
        }
        return valsArr;
    }
}

export default HashTable;