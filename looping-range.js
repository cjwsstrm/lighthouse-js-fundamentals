function range(start, end, step) {
  var some_array = [];
  if (step > 0 === false || start > end) {
    return(some_array);
  } else {
    var i = start;                         //  making var i = start outside the loop
                                          //removed 'i is undefined' lint errors in evaluator. why?
    for (i; i <= end; i = i + step) {
      some_array.push(i);
    }
    return(some_array);
  }
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(10, 5, 2));
console.log(range(2, 10, -10))


// Below is the function with 'i is undefined' in the loop

/*function range(start, end, step) {
  var some_array = [];
  if (step > 0 === false || start > end) {
    return([]);
  } else {
    for (i = start; i <= end; i = i + step) {           //<--- why does this produce lint errors?
      some_array.push(i);
    }
    return(some_array);
  }
}*/