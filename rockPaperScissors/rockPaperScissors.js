/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function (n) {
  // TODO: your solution here
var result = [];
var RPS = ['R','P','S']
var nbrSolution = Math.pow(3, n)
while(result.length !== nbrSolution){
  var arr ="";
  var item1 = RPS[Math.floor(Math.random() * RPS.length)];
  var item2 = RPS[Math.floor(Math.random() * RPS.length)];
  var item3 = RPS[Math.floor(Math.random() * RPS.length)];
  arr += item1 + item2 + item3;
  if (!result.includes(arr)) {
    result.push(arr)
  }
}
return result

};
