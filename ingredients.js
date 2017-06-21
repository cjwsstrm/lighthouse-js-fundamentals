var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var repeat = 0
while (repeat < ingredients.length) {
  console.log(ingredients[repeat]);
  repeat++;
}

for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

for (var i = ingredients.length -1; i >= 0; i--) { // Length of ingredients array is 8, however count goes 0-7.
                                                   // Therefore i = ingredients.length -1, so it starts at a
                                                   // defined value. We also have to do i >= 0 to ensure that
                                                   // the last value is included.
  console.log(ingredients[i]);
}

// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards: