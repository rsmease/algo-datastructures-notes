//When to use each sort:

//Quick sort:
//You don't need a stable sort and average runtime is most important
//Uses up to O(n**2) time and around O(n*log(n)) of call stack memory
//Preferred method of sorting arrays because its moves through adjacent elements (better locality of reference) than merge sort, which ends up scanning a variety of arrays when it's not in-place

//Merge sort:
//You want a stable, O(n*log(n)) sort and Quicksort's worstcase runtime is scary
//Always uses O(n) auxiliary space and has a larger constant than quicksort for N
// It's the only stable O(n*log(n)) sort
// It's the prefer sort of linked lists, where only O(log(n)) extra space is needed

//Heap sort:
//You don't need a stable sort and you care more about worst case performance
//Guaranteed to be O(n*log(n)) and uses constant auxiliary space

//Introsort:
//Like heap sort, but with log(n) additional stack space

//Insertion sort:
//When N is guaranteed to be small
//O(n*2), but a small constant and it's a stable sort

//Bubble sort and selection sort:
//Not really useful in a practical context
//Slightly easier to implement than insertion sort

//Radix sort
//Where log(n) is larger than K, where K is the number of radix digits

const isLessThan = (a, b) => a < b;

const mergeSort = (array, comparatorCb = isLessThan) => {
    if (array.length <= 1) {
        return array;
    }

    const median = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, median);
    const rightHalf = array.slice(median);

    return merge(mergeSort(leftHalf), mergeSort(rightHalf), comparatorCb);
}

const merge = (array1, array2, comparatorCb) => {
    const newArray = [];

    let firstPointer = secondPointer = 0;
    let currentFirst, currentSecond, predicate;
    while (firstPointer < array1.length && secondPointer < array2.length) {
        currentFirst = array1[firstPointer];
        currentSecond = array2[secondPointer];

        predicate = comparatorCb(currentFirst, currentSecond);
        if (predicate) {
            newArray.push(currentFirst);
            firstPointer++
        } else {
            newArray.push(currentSecond);
            secondPointer++;
        }
    }
    return newArray.concat(array1.slice(firstPointer), array2.slice(secondPointer));
}

const testArray = [4, 1, 2, 12, 4, 16, 8, 7];
console.log(mergeSort(testArray));
