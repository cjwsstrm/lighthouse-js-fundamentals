/* A common pattern is to scan through all occurences of a pattern in a string,
  in a way that gives us access to the match object in the loop body, bu ising lastIndex
  and exec.
*/

var input = "A string with 3 numbers in it... 42 and 88.";
var number = /\b(\d+)\b/g;
var match;
while (match = number.exec(input))
  console.log("Found", match[1], "at", match.index);

/* This makes use of the fact that the value of an assignment expression (=)
   is the assigned value. So by using match = number.exec(input) as the condition
   in the while statement, we perform the match at the start of each iteration, save
   its result in a variable, and stop looping when no more matches are found.
*/

