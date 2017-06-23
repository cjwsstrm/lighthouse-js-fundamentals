// Using loop to array.push(). Modifies existing array.

function concat (array1, array2) {
  for (var i = 0; i < array2.length; i++) {
    array1.push(array2[i]);
  } return(array1);
}

// Trying different method, using .concat(). Creates new array.

/*function concat (array1, array2) {
  var arr3 = array1.concat(array2);
  return(arr3);
}*/



console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);