function printer2k (a, b) {
  for (a; a <= b; a++) {
    if (a % 12 === true) {
      console.log("LoopyLighthouse");
    } else if (a % 3 === 0) {
      console.log("Loopy");
    } else if (a % 4 === 0) {
      console.log("Lighthouse");
    } else {
      console.log(a);
    }
  }
}
printer2k(100, 200)

// isinteger()


