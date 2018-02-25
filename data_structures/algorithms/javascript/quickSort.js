//for comparison of Merge and Quick sort, see MergeSort notes;

//O(array.length ^ 2), but O(array.length * log(array.length)) average
function quickSortBasic(array, comparatorCb) {
    if (array.length < 2) {
        return array;
    }
    const pivot = array[0];
    const left = [];
    const right = [];

    for (let i = 1; i < array.length; i++) {
        let currentElement = array[i];
        if (comparatorCb(currentElement, pivot)) {
            left.push(currentElement);
        } else {
            right.push(currentElement);
        }
    }
    return quickSortBasic(left, comparatorCb).concat(pivot, quickSortBasic(left, comparatorCb));
}

//uses specific partition schemes that reduce the average runtime of the algorithm
function quickSortAdvanced(array, left, right, partitionScheme, comparatorCb) {
    left = left || 0;
    right = right || array.length - 1;

    const pivot = partitionScheme(array, left, right, comparatorCb);

    if (left < pivot - 1) {
        quickSortAdvanced(array, left, pivot - 1, comparatorCb);
    } else if (right > pivot) {
        quickSortAdvanced(array, pivot, right, comparatorCb);
    }
    return array;
}

//in place swapping is unavailable in JavaScript
function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

//fewer pivots than the lumoto scheme due to use of median element
function hoarePartition(array, left, right, comparatorCb) {
    const pivot = Math.floor((left + right) / 2);

    while (left <= right) {
        while (comparatorCb(array[left], array[pivot])) {
            left++;
        }
        while (!comparatorCb(array[right], array[pivot])) {
            right--;
        }
        if (left <= right) {
            swap(array, left, right);
            left++;
            right--;
        }
    }
}

function lumotoPartition(array, left, right, comparatorCb) {
    const pivot = right;
    let i = left;

    for (let j = left; j < right; j++) {
        if (comparatorCb(array[j], array[pivot])) {
            swap(array, i, j);
            i++;
        }
    }
    swap(array, i, j);
    return i;
}

//secures O(n*log(n)) runtime against malicious inputs
//useful for preventing DDOS attacks when sorting user data
//opponent could overwhelm server with malignant data to be sorted in O(n*2) time
function quickSortRandom(array, comparatorCb) {
    if (array.length < 2) {
        return array;
    }
    const pivot = array[Math.floor(array.length * Math.random())];
    const left = [];
    const right = [];

    for (let i = 1; i < array.length; i++) {
        let currentElement = array[i];
        if (comparatorCb(currentElement, pivot)) {
            left.push(currentElement);
        } else {
            right.push(currentElement);
        }
    }
    return quickSortBasic(left, comparatorCb).concat(pivot, quickSortBasic(left, comparatorCb));
}