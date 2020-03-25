/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
    var n = Math.floor(array.length / 2)
    var result = null
    if ((array[array.length-1]< target) || (array[0] > target)){
        return result = null;
    }
    if (array[n] === target){
        return result = n
    }
    else if (array[n] < target){
        var arr = array.slice(n)
        return result || binarySearch (arr, target) +n
    }
    else if (array[n] > target){
        var arr = array.slice(0, n)
        return result || binarySearch (arr, target)
    }
    return result
};

