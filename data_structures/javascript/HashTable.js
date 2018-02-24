class HashNode {
    constructor(key, value, next) {
        this.key = key;
        this.value = value;
        this.next = next || null;
    }
}

class HashTable {
    constructor(size) {
        this.buckets = new Array(size);
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

    checkKey(key) {
        if (typeof key === "object" || key == null) {
            throw new TypeError('Unallowed key type of object, null or undefined');
        }

        return key.toString();
    }

    //O(key.length + targetIndex.length)
    insert(key, value) {

        const keyString = this.checkKey(key);
        const targetBucket = this.hash(keyString);
        let targetIndex = this.buckets[targetBucket];

        if (!targetIndex) {
            targetIndex = new HashNode(keyString, value);
        } else if (targetIndex.key === keyString) {
            targetIndex.value = value;
        } else {
            while (targetIndex.next) {
                if (targetIndex.key === keyString) {
                    targetIndex.value = value;
                    return;
                }
            }
            targetIndex = targetIndex.next;
        }
        targetIndex.next = new HashNode(keyString, value);
    }

    get(key) {
        const keyString = this.checkKey(key);
        const targetBucket = this.hash(keyString);
        let targetIndex = this.buckets(targetBucket);

        if (!targetIndex) {
            return null;
        } else {
            while (targetIndex) {
                if (targetIndex.key === keyString) {
                    return targetIndex.value;
                }
                targetIndex = targetIndex.next;
            }
            return null;
        }
    }




}