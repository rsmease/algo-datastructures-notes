//Cache management algorithms are an entire field of Computer Science
//Removing an item from a cache: eviction
//Makes sense to add a callback for processing evicted items
//Cache size should be based on the expected available memory in your system


class LRUCacheInefficient {
    constructor(capacity = 0) {
        this.capacity = capacity;
        this.entries = {};
        this.keys = [];
        this.size = this.entries.size;
    }

    //O(this.keys.length)
    updateKey(key) {
        let keyIndex = this.keys.indexOf(key);
        this.keys[keyIndex] = undefined;
        this.keys.push(key);
    }

    //O(this.keys.length)
    set(key, value) {
        if (this.entries.hasOwnProperty(key)) {
            this.entries[key] = value;
            this.updateKey(key);
            return this.entries[key];
        } else {
            if (!this.remainingCapacity()) {
                let i = 0;
                let removedKey = this.keys[i];
                while (typeof removedKey === 'undefined') {
                    i++;
                    removedKey = this.keys[i];
                }
                delete this.entries[removedKey];
            }

            this.entries[key] = value;
            this.keys.push(key);
        }
    }

    //O(this.keys.length)
    get(key) {
        if (this.entries.hasOwnProperty(key)) {
            this.updateKey(key);
            return this.entries[key];
        } else {
            return null;
        }
    }

    //O(1)
    size() {
        return this.size;
    }

    //O(1)
    remainingCapacity() {
        return this.capacity - this.size;
    }
}

class LRUNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.older = null;
        this.newer = null;
    }
}
class LRUCacheEfficient extends LRUCacheInefficient {
    constructor() {
        super();
        this.head = null;
        this.tail = null;
    }

    //O(1)
    updateKey(key) {
        const existingNode = this.entries[key];
        if (existingNode.newer) {
            existingNode.newer.older = existingNode.older;
        } else {
            this.head = existingNode.older;
        }

        if (existingNode.older) {
            existingNode.older.newer = existingNode.newer;
        } else {
            this.tail = existingNode.newer;
        }

        existingNode.older = this.head;
        existingNode.newer = null;
        if (this.head) {
            this.head.newer = existingNode;
        }
        this.head = existingNode;
        if (!this.tail) {
            this.tail = existingNode;
        }
    }

    //O(1)
    set(key, value) {
        const newNode = new LRUNode(key, value);
        if (this.entries.hasOwnProperty(key)) {
            this.entries[key] = value;
            this.updateKey(key);
            return this.entries[key];
        }

        if (!this.remainingCapacity()) {
            const deletedKey = this.tail.key;
            this.tail = this.tail.newer;
            if (this.tail) {
                this.tail.older = null;
            }
            delete this.entries[deletedKey];
        }

        newNode.older = this.head;
        if (this.head) {
            this.head.newer = newNode;
        }
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
        this.entries[key] = newNode;
    }
}
