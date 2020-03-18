/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var strarray = string.split('')
  var arr = [];
  for (var i = 0 ; i< strarray.length ; i++){
    var occur = false
    for (var j = 0 ; j< strarray.length ; j++){
      if ((occur === false) && (strarray[i]=== strarray[j]) && (i !== j)){
        occur = true;
      }
      else if ((occur === false) && (strarray[i] !== strarray[j]) && (j === strarray.length -1)){
        arr.push(string[i])
        console.log(i)
      }
    }
  }
  return arr[0]

};
