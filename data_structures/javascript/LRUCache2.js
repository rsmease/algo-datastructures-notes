import { type } from "os";

class LinearLRUCache {
  constructor(capacity = 0) {
    this.capacity = capacity;
    this.entries = {};
    this.keys = [];
    this.size = this.entries.size;
  }

  // linear, keys.length
  // 'how recently used?' answered by position in this.keys array
  udpateKeyPriortity(key) {
    const keyIndex = this.keys.indexOf(key);
    this.keys[keyIndex] = undefined;
    this.keys.push(key);
  }

  // linear, keys.length
  set(key, value) {
    if (this.entries.hasOwnProperty(key)) {
      this.entries[key] = value;
      this.udpateKeyPriortity(key);
      return this.entries[key];
    }

    if (!this.hasSpareCapacity()) {
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

  // linear, this.keys.length
  get(key) {
    if (this.entries.hasOwnProperty(key)) {
      this.udpateKeyPriortity(key);
      return this.entries[key];
    }

    return null;
  }

  // constant
  size() {
    return this.size;
  }

  // constant
  hasSpareCapacity() {
    return this.capacity > this.size;
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

class ConstantLRUCache extends LinearLRUCache {
  constructor() {
    super();
    this.oldest = null;
    this.newest = null;
    this.entries = new Map();

    // we're no longer using this
    this.keys = null;
  }

  // constant
  udpateKeyPriortity(key) {
    const nodeToUpdate = this.entries.get(key);

    if (typeof nodeToUpdate === 'undefined') {
      return `Key ${key} does not exist in cache`;
    }

    if (nodeToUpdate.newer) {
      // node to udpate is not the head (newest)
      // connect newer node to the item that's older than the node
      nodeToUpdate.newer.older = nodeToUpdate.older;
    } else {
      // node behind the nodeToUpdate is temporarily made this.newest
      this.newest = nodeToUpdate.older;
    }

    if (nodeToUpdate.older) {
      // node to update is not the tail (oldest)
      // connected older node to the item that's newer than the node
      nodeToUpdate.older.newer = nodeToUpdate.newer;
    } else {
      // node ahead of nodeToUpdate is made this.oldest
      // nodeToUpdate will be move to to the front of the list
      this.oldest = nodeToUpdate.newer;
    }

    // attach the old head (newest) to the nodeToUpdate
    nodeToUpdate.older = this.newest;
    // set the nodeToUpdate newer to null, since it's the new head (newest)
    nodeToUpdate.newer = null;

    if (this.newest) {
      // if we set up a temporary newest (line 91), set that node's newer to the new newest,
      // our nodeToUpdate
      this.newest.newer = nodeToUpdate;
    }
    // formally set the nodeToUpdate to this.newest
    this.newest = nodeToUpdate;

    // if the list has just this node, set it to this.oldest, too
    if (!this.oldest) {
      this.oldest = nodeToUpdate;
    }
  }

  // constant
  set(key, value) {
    if (this.entries.has(key)) {
      this.entries.set(key, value);
      this.udpateKeyPriortity(key);
      return true;
    }

    const newestNode = new LRUNode(key, value);

    if (!this.hasSpareCapacity()) {
      // find oldest key, remove related pointers
      const keyToDelete = this.oldest.key;
      this.oldest = this.oldest.newer;

      // will be false if there is only one item in the keys list
      if (this.oldest) {
        this.tail.older = null;
      }
      this.entries.delete(keyToDelete);
    }

    newestNode.older = this.newest;
    // will return false if this is the only entry
    if (this.newest) {
      this.newest.newer = newestNode;
    }
    this.newest = newestNode;

    // will return true if this is the only entry
    if (!this.oldest) {
      this.oldest = newestNode;
    }

    this.entries.set(key, value)
  }

  // constant
  get(key) {
    return this.entries.get(key);
  }
}
