class SuffixNode {
    constructor() {
        this.value = '';
        this.leaves = [];
        this.nodes = [];
    }

    checkNodes(suffix) {
        let node;
        for (let i = 0; i < this.nodes.length; i++) {
            node = this.nodes[i];
            if (node.value === suffix[0]) {
                node.addSuffix(suffix.slice(1));
                return true;
            }
        }
        return false;
    }

    checkLeaves(suffix) {
        let node, leaf;
        for (let i = 0; i < this.nodes.length; i++) {
            leaf = this.leaves[i];
            if (leaf[0] === suffix[0]) {
                node = new Node();
                node.value = leaf[0];
                node.addSuffix(suffix.slice(1));
                node.addSuffix(leaf.slice(1));
                this.nodes.push(node);
                this.leaves.splice(i, 1);
                return;
            }
        }
        this.leaves.push(suffix);
    }

    addSuffix(suffix) {
        if (suffix.length) {
            if (!this.checkNodes(suffix)) {
                this.checkLeaves(suffix);
            }
        }
        return;
    }

    getLongestRepeatedSubstring() {
        let str = '';
        let temp = '';
        for (let i = 0; i < this.nodes.length; i++) {
            temp = this.nodes[i].getLongestRepeatedSubstring();
            if (temp.length > str.length) {
                str = temp;
            }
        }
        return this.value + str;
    }
}

class SuffixTree {
    constructor(base) {
        this.root = new SuffixNode();
        this.addSuffix(base);
    }

    //O(length of suffix)
    addSuffix(suffix) {
        for (let i = 0; i < base.length; i++) {
            this.root.addSuffix(str.substring(i));
        }
    }

    //O(number of nodes in tree)
    getLongestRepeatedSubstring() {
        return this.root.getLongestRepeatedSubstring();
    }

    //O(number of nodes in tree)
    containsSubstring(substring) {
        if (this.leaves.incudes(substring)) {
            return true;
        } else {
            let node;
            for (let i = 0; i < this.nodes.length; i++) {
                node = this.nodes[i];
                if (substring.substring(0, node.length) === node.value) {
                    if (node.containsSubstring(substring.slice(node.length))) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}