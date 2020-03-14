// You are given an input string.

 //For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

 // But will your code be performant enough
 // Examples

 // input   =  Hello, World!
 // result  =  1112111121311 1112111121311

 // input   =  aaaaaaaaaaaa
 // result  =  123456789101112

<<<<<<< HEAD
 function occurence(str){
     var count = 1;
     var string = ""
     for (var i=0 ; i<str.length ; i++){ 
     for (var j = i ; j>=0 ; j--){
        if (j===0){
            string += count;
            count = 1
        } 
        if ((str[i]===str[j])&& (i !== j)){
             count+= 1
         }

     }
    }
    return string;
 }
=======


 
>>>>>>> 8b2322f64f8f3bd6a03885315c81ee9cadbe4dac
