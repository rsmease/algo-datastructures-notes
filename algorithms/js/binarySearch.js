function binarySearchRecursive(array, target) {
    if (!array.length) {
        return null;
    } else if (array.length === 1) {
        return array[0] === target ? 0 : null;
    }

    let mid = Math.floor(array.length / 2);

    if (array[mid] === target) {
        return mid;
    } else if (target > array[mid]) {
        const result = binarySearchRecursive(array.slice(mid + 1), target);
        return result === null ? null : mid + result + 1;
    } else {
        return binarySearchRecursive(array.slice(0, mid), target);
    }
}

function binarySearchIterative(array, target) {
    let start = 0;
    let end = array.length - 1;
    let middleIndex;

    while (start <= end) {
        if (start === end) {
            middleIndex = start;
        } else {
            middleIndex = Math.floor((end - start) / 2) + start;
        }

        if (array[middleIndex] === target) {
            return middleIndex;
        }

        if (target < array[middleIndex]) {
            end = middleIndex - 1;
        } else {
            start = middleIndex + 1;
        }
    }

    return null;
}

let testArr = [1, 3, 4, 5, 7, 8, 11, 15, 19];
console.log(binarySearchIterative(testArr, 4))