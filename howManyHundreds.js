function howManyHundreds(num) {
  var y = num % 100;
  var x = (num - y) / 100;
  return x;
}

console.log(howManyHundreds(1000), "=?", 10);