//benefits of MergeSort

//stability: elements that compare = do not move, so never reassigned in memory
//O(nlog(n)) run time
//merge sort is better of linkedLIsts, but quicksort is better for arrays, because it works better with a local memory cache 

//fallings of MergeSort

//does way too much work if array is already sorted
//does way too much work if array is composed of identical elements
//does more work than quicksort if array is sorted in reverse order
//use MergeSort over QuickSort if you don't know anything about the data


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