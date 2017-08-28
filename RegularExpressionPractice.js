
console.log(new Date());

console.log(new Date(2017, 11, 9));

console.log(new Date(2017, 11, 9, 12, 59, 59, 999));

console.log(new Date(2013, 11, 19).getTime());

console.log(new Date(1387407600000));

console.log(Date.now());


// .exec - returns null if not match, and an object otherwise
// .index - tells us where in the string a successful match begins.

function findDate(string) {
  var dateTime = /(\d{1,2})-(\d{1,2})-(\d{4})/;
  var match = dateTime.exec(string);
  return new Date(Number(match[3]),
                  Number(match[2]) -1,
                  Number(match[1]));
}
console.log(findDate("30-1-2003"));


console.log(/cat/.test("concatenate"));

console.log(/\bcat\b/.test("concatenate"));


var animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));
console.log(animalCount.test("15 pigchickens"));
console.log(animalCount.test("the 3 pigs"));


console.log("papa".replace("p", "m"));

console.log("Borobudur".replace(/[ou]/, "a"));
console.log("Borobudur".replace(/[ou]/g, "a"));

console.log(
  "Hopper, Grace\nMcCarthy, John\nRitchie, Dennis"
    .replace(/([\w]+), ([\w]+)/g, "$2 $1"));

var s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, function(str) {
  return str.toUpperCase();
}));

var stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1)
    unit = unit.slice(0, unit.length - 1);
  else if (amount == 0)
    amount = "no";
  return amount + " " + unit;
}

console.log(stock.replace(/(\d+) (\w+)/g, minusOne));



function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}
console.log(stripComments("1 + /* 2 */3"));
console.log(stripComments("x = 10;// ten!"));
console.log(stripComments("1 /* a */+/* b */ 1"));

// repetition operators (+, *, ?, and {}) are greedy. Using ? with them makes them nongreedy.

var name = "harry";
var text = "Harry is a suspicious character.";
var regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));

var name = "dea+hl[]rd";
var text = "This dea+hl[]rd guy is super annoying.";
var escaped = name.replace(/[^\w\s]/g, "\\$&");
var regexp = new RegExp("\\b(" + escaped + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));


console.log(" word".search(/\S/));
console.log("   ".search(/\S/));

