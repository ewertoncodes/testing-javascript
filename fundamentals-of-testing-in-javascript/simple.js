const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

let result = sum(1, 2);
let expected = 3;

if (result !== expected) {
  throw new Error(`Expected ${expected}, got ${result}`);
}


result = subtract(2, 1);
expected = 1;

if (result !== expected) {
  throw new Error(`Expected ${expected}, got ${result}`);
}
