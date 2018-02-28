class TrieNode {
    constructor(key) {
        this.key = key;
        this.parent = null;
        this.prefixes = 0;
        this.children = {};
        this.wordEnd = false;
    }

    //O(word length)
    buildWord() {
        let word = "";
        let currentNode = this;
        while (currentNode) {
            word += currentNode.key;
            currentNode = currentNode.parent;
        }
        return word.reverse();
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode(null);
        this.wordCount = 0;
    }

    //O(word length)
    addWord(word, currentNode = this.root) {
        currentNode.prefixes++;
        let char = word.charAt(0);
        if (!currentNode.children[char]) {
            let newNode = new TrieNode(char);
            currentNode.children[char] = newNode;
        }
        if (word.length > 1) {
            word = word.substring(1);
            currentNode = currentNode.children[char];
            this.addWord(word, currentNode);
        } else {
            currentNode.children[char].wordEnd = true;
            this.wordCount++;
        }
    }

    //O(word length)
    contains(word, currentNode = this.root) {
        let char = word.charAt(0);
        if (!currentNode.children[char]) {
            return false;
        } else {
            if (word.length > 1) {
                word = word.substring(1);
                currentNode = currentNode.children[char];
                return this.contains(word, currentNode);
            } else {
                return currentNode.children[char].wordEnd;
            }
        }
    }

    //O(word length)
    removeWord(word, currentNode = this.root) {
        if (this.contains(word)) {
            // console.log('deleting')
            this.removeUtil(word);
        }
    }

    //O(word length)
    removeUtil(word, currentNode = this.root) {
        currentNode.prefixes--;
        let char = word.charAt(0);
        if (currentNode.children[char]) {
            let remainder = word.substring(1);
            if (remainder) {
                if (currentNode.children[char].prefixes === 1) {
                    delete currentNode.children[char];
                } else {
                    currentNode = currentNode.children[char];
                    this.removeUtil(remainder, currentNode);
                }
            } else {
                if (currentNode.children[char].prefixes === 0) {
                    delete currentNode.children[char];
                } else {
                    currentNode.wordEnd = false;
                    this.wordCount--;
                }
            }
        }
    }

    searchByPrefix(prefix) {
        let currentNode = this.root;
        for (let i = 0; i < prefix.length; i++) {
            let char = prefix.charAt(i);
            if (currentNode.children[char]) {
                currentNode = currentNode[char];
            } else {
                return [];
            }
        }
        let results = [];
        this.retrieveAllWithPrefix(prefix, results);
        return results.reverse();
    }

    retrieveAllWithPrefix(prefixEndNode, results) {
        if (prefixEndNode.wordEnd) {
            results.push(prefixEndNode.buildWord());
        } else {
            for (let child in prefixEndNode.children) {
                this.retrieveAllWithPrefix(child, results);
            }
        }
    }

    print() {
        const newLine = new TrieNode('|');
        const processingQueue = [this.root, newLine];
        let resultString = "";
        while (processingQueue.length) {
            let currentNode = processingQueue.shift();
            if (currentNode.key) {
                resultString += currentNode.key + ' ';
            }
            if (currentNode.key === "|" && processingQueue.length) {
                processingQueue.push(newLine);
            }
            for (let child in currentNode.children) {
                processingQueue.push(currentNode.children[child]);
            }
        }
        console.log(resultString);
    }

    printByDepth() {
        const newLine = new TrieNode('\n');
        const processingQueue = [this.root, newLine];
        let resultString = "";
        while (processingQueue.length) {
            let currentNode = processingQueue.shift();
            if (currentNode.key) {
                resultString += currentNode.key + (currentNode.key === '\n' ? ' ' : '');
            }
            if (currentNode.key === "\n" && processingQueue.length) {
                processingQueue.push(newLine);
            }
            for (let child in currentNode.children) {
                processingQueue.push(currentNode.children[child]);
            }
        }
    }
}