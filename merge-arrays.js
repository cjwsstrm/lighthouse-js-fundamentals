// Using array.concat() and array.sort(). Array.sort() seems like almost an almost too easy solution,
// yet it seems to make more sense than writing a loop to check the values and then sort them,
// e.g. "bubble sorting"?

function merge (array1, array2) {
  var arr3 = array1.concat(array2);
  return(arr3.sort());
}


// Using array.push() and array.sort();

/*function merge (array1, array2) {
  for (var i = 0; i < array2.length; i++) {
    array1.push(array2[i]);
  } return(array1.sort());
}*/



console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);