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
//You don't need a stable sort and you care more about worst case perfromance
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



function mergeSort(array, comparatorCb) {
    if (array.length <= 1) {
        return array;
    }

    let first = array.slice(0, Math.floor(array.length / 2));
    let second = array.slice(Math.floor(array.length / 2));

    return merge(mergeSort(first), mergeSort(second), comparatorCb);
}

function merge(array1, array2, comparatorCb) {
    let newArray = [];

    //remove from end to presere O(1) operation time
    while (array1.length && array2.length) {
        if (comparatorCb(array1, arry2)) {
            newArray.push(array1.pop());
        } else {
            newArray.push(array2.pop());
        }
    }
    //these will bubble up in the call stack to already sorted, if they remain
    //first 1 -> return, then 2 -> remainder is sorted by default, then n -> composed of sorted substructures
    return array1.length ? newArray.concat(array1) : newArray.concat(array2);
}