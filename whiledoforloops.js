var result = 1;
var counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);


for (var number = 0; number <= 12; number = number + 2)
  console.log(number);


var result = 1;
for (var counter = 0; counter < 10; counter = counter + 1)
  result = result * 2;
console.log(result);


for (var current = 20; ;current++) {
  if (current % 7 === 0)
    break;
}
console.log(current)
