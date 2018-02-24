//Why use a HashSet?

//Use a hash set when you aren't really storing values, you're just storing the presence of absence of keys. If you are just looking a set of numbers, consider using an array instead, which would take up more space for very large numbers, but which would ultimately have an easier API and (in theory) faster better average run times if we consider the O(n) worst case for a HashMap
//Intersections, unions and differences/complements are also better peformed on an array, beceause they allow for direct in-order traversal, allowing for O(Math.max(a,b)) comparisons on sorted arrays, rather than O(a*b) comparisons for unsorted HashMaps

import HashTable from './HashTable.js';

class HashNode {
    constructor(key, value = true) {
        this.key = key;
        this.value = value;
    }
}

class HashSet extends HashTable {
    constructor() {
        super();
    }

    //O(value.length + this.size)
    add(value) {
        const valueAsKey = this.checkKey(value);
        this.insert(valueAsKey, true);
    }

    //O(key.length + this.size)
    remove(value) {
        const valueAsKey = this.checkKey(value);
        this.insert(valueAsKey, false);
    }

    //O(key.length this.size)
    contains(value) {
        if (this.size === 0) {
            return false;
        }
        return this.key(value) ? true : false;
    }

    //O(this.size)
    clone() {
        const newSet = new HashSet();
        this.keys().forEach(key => newSet.add(key));
        return newSet;
    }

    //O(this.size * otherHashSet.size)
    intersection(otherHashSet) {
        const newSet = new HashSet();
        const currentSetValues = this.values();
        for (let i = 0; i < currentSetValues.length; i++) {
            let currentValue = currentSetValues[i];
            if (otherHashSet.contains(currentValue)) {
                newSet.add(currentValue);
            }
        }
        return newSet;
    }

    //O(this.size + otherHashSet.size)
    union(otherHashSet) {
        const newSet = this.clone();
        const otherSetValues = otherHashSet.values();
        otherSetValues.map(value => newSet.add(value));
        return newSet;
    }

    //O(this.size * otherHashSet.size)
    isSubsetOf(otherHashSet) {
        const currentSetValues = this.values();
        for (let i = 0; i < currentSetValues.length; i++) {
            let currentValue = currentSetValues[i];
            if (!otherHashSet.contains(currentValue)) {
                return false;
            }
        }
        return true;
    }

    //O(this.size * otherHashSet.size)
    complement(otherHashSet) {
        const newSet = new HashSet();
        const currentSetValues = this.values();
        for (let i = 0; i < currentSetValues.length; i++) {
            let currentValue = currentSetValues[i];
            if (!otherHashSet.contains(currentValue)) {
                newSet.add(currentValue);
            }
        }
        return newSet;
    }
}