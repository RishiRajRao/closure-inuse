function outerAddr() {
  const cache = {};
  debugger;
  return function adder(val) {
    if (!cache[val]) {
      cache[val] = val;
    }
    let sum = 0;
    for (let [key, value] of Object.entries(cache)) {
      sum += parseInt(value);
    }
    // debugger;
    return sum;
  };
}

const adder = outerAddr();
console.log(adder(10));
console.log(adder(30));
console.log(adder(60));
