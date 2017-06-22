function lastIndexOf(anArray, num) {
  for (var i = anArray.length - 1; i >= 0; i--) {          // Since we want the last possible value to
    if (anArray[i] === num) {                              // match, I started checking from behind.
      return i;
    }
  } return (-1);                                           // This feels like a cheap way to do it.
}


console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);


// You need to make a loop that will compare num to the array values and once it detects the last match
// the loop needs to return the array.length of that value.





