/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/

function largestProductOfThree(array) {
    var arr = array;
    var obj = {}
    var count = 0;
    while(count !== 3){
        var max = array[0]
        var j;
        for (var i = 0 ; i < arr . length ; i++){
            if (Math.abs(array[i]) > max){
                if (!obj[Math.abs(array[i]) ]){
                    max = Math.abs(array[i]) 
                    j = i
                }
            }
        }  
        obj[count] = max  
        arr.splice(j,1)
        count++
    }
    var result = obj[0] * obj[1] * obj[2]
    return result
}
