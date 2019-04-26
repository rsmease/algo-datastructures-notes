// this is mostly a copy of the other HashTable for the sake of relearning the implementation details;
// there are no major improvements here;

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

  // linear with size of key
  hash(key) {
    const sum = key.split('').map((char) => getCharCodeOf(char)).reduce((a, b) => a + b, 0);
    const bucket = total % this.numberOfBuckets;
    return bucket;
  }

  // linear with size of key
  checkKey(key) {
    if (typeof key === "object" || key === null) {
      throw "Unallowed key type of object, null or undefined";
    }
    return typeof key === "string" ? key : key.toString();
  }

  // linear with key length (hashing) + this.size (total items inserted, where they all land in the same bucket)
  insert(key, value) {
    const keystring = this.checkKey(key);
    const targetBucket = this.hash(keyString);
    let currentBucket = this.buckets[targetBucket];

    // add new bucket
    if (!currentBucket) {
      currentBucket = new NashNode(keyString, value);
      this.buckets[targetBucket] = currentBucket;
      this.size++;
      return;
    }

    // update value for existing bucket
    if (currentBucket.key === keyString) {
      currentBucket.value = value;
      return;
    }

    // add new item with new key that happens to land in the same bucket to that bucket
    while (currentBucket.next) {
      if (currentBucket.key === keyString) {
        currentBucket.value = value;
        return;
      }
      currentBucket = currentBucket.next;
    }
    currentBucket.next = new HashNode(keyString, value);
    this.size++;
  }

  // linear to key size + linear to this.size, where everything is in the same bucket
  get(key) {
    const keyString = this.checkKey(key);
    const targetBucket = this.hash(keyString);
    let currentBucket = this.buckets[targetBucket];

    while (currentBucket) {
      if (currentBucket.key === keyString) {
        return currentBucket.value;
      }
      currentBucket = currentBucket.next;
    }

    return null;
  }

  // linear to key size + linear to this.size, in worst case
  remove(key) {
    const keyString = this.checkKey(key);
    const targetBucket = this.hash(keyString);
    let currentBucket = this.buckets[targetBucket];
    let previousNode, nodeToDelete, deletedNode;

    if (!currentBucket) {
      return null;
    }
    if (currentBucket.key === keyString) {
      nodeToDelete = currentBucket;
      this.buckets[targetBucket] = currentBucket.next;
      deletedNode = nodeToDelete;
      nodeToDelete = null;
      return deletedNode;
    }

    while (currentBucket) {
      previousNode = currentBucket;
      currentBucket = currentBucket.next;

      if (currentBucket && currentBucket.key === keyString) {
        nodeToDelete = currentBucket;
        previousNode.next = currentBucket.next;
        deletedNode = nodeToDelete;
        nodeToDelete = null;
        return deletedNode;
      }
    }
    return null;
  }

  // linear, this.size + this.numberOfBuckets (possibility of many sparse buckets, depending on how far the buckets are spread apart);
  keys() {
    const keysArr = [];
    let currentBucket;
    for (let i = 0; i < this.numberOfBuckets; i++) {
      currentBucket = this.buckets[i];
      while (currentBucket) {
        keysArr.push(currentBucket.key);
        currentBucket = currentBucket.next;
      }
    }
    return keysArr;
  }

  // linear, this.size + this.numberOfBuckets (possibility of sparse buckets array)
  values() {
    const valsArr = [];
    let currentBucket;
    for (let i = 0; i < numberOfBuckets; i++) {
      currentBucket = this.buckets[i];
      while (currentBucket) {
        valsArr.push(currentBucket.value);
        currentBucket = currentBucket.next;
      }
    }
  }
}
