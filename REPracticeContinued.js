/*
var pattern = /y/g;
pattern.lastIndex = 3;
var match = pattern.exec("xyzzy");
console.log(match.index);
console.log(pattern.lastIndex);
*/

var digit = /\d/g;
console.log(digit.exec("here it is: 1"));
console.log(digit.exec("and now: 1"));

console.log("Banana".match(/an/g));

// Be cautious with global regular expressions. The cases where they are necessary - calls to
// _replace_ and places where you want to explicitly use _lastIndex_ - are typically the only
// places where you want to use them.

