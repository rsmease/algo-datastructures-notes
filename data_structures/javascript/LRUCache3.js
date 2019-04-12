class LRUNode {
  constructor(key = null, value = null) {
    this.key = key;
    this.value = value;
    this.lessRecent = null;
    this.moreRecent = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.leastRecent = this.mostRecent = new LRUNode();
    this.nodes = new Map();
    this.capacity = capacity;
  }

  remove(key) {
    const node = this.nodes.get(key);
    if (!node) {
      return;
    }
    node.lessRecent.moreRecent = node.moreRecent;

    if (node.moreRecent) {
      node.moreRecent.lessRecent = node.lessRecent;
    } else {
      this.mostRecent = node.lessRecent;
    }
    this.nodes.delete(key);
  }

  get(key) {
    if (this.nodes.has(key)) {
      this.put(key, this.nodes.get(key).value);
      return this.mostRecent.value;
    }
    return -1;
  }

  put(key, value) {
    this.remove(key);
    if (this.nodes.size === this.capacity) {
      this.remove(this.leastRecent.moreRecent.key);
    }

    const temporary = this.mostRecent;

    temporary.moreRecent = new LRUNode(key, value);
    this.mostRecent = temporary.moreRecent;
    this.mostRecent.lessRecent = temporary;

    this.nodes.set(key, this.mostRecent);
  }
}
