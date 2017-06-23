// [range] == an array of 2 numbers representing the start and end values of the loop
// [multiples] == an array of 2 numbers representing the multiples you want to replace with words
// [words] == an array of 2 strings representing the words that will replace the [multiples]

// 1. Retrieve/reference the start and end numbers from [range] to set the loop parameters - CHECK
// 2. Retrieve/reference numbers from [multiples] to make if statements - CHECK
// 3. Retrieve/reference strings from [words] to console.log as a result of [multiples] - CHECK

function loopyLighthouse (range, multiples, words) {
  for (range[0]; range[0] <= range[1]; range[0]++) {
    if (range[0] % (multiples[0] * multiples[1]) === 0) {
      console.log(words[0] + words[1]);
    } else if (range[0] % 2 === 0) {
      console.log(words[0]);
    } else if (range[0] % 5 === 0) {
      console.log(words[1]);
    } else {
      console.log(range[0]);
    }
  }
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);



/*function loopyLighthouse (range) {
  for (range[0]; range[0] <= range[1]; range[0]++) {
    console.log(range[0]);
  }
}

loopyLighthouse([1, 20]);*/