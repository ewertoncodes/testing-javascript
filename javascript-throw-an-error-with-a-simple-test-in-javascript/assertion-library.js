const {sum, subtract} = require('../math');

let result, expected;

result = sum(1, 2);
expected = 3;
expect(result).toBe(expected);


result = subtract(2, 1);
expected = 1;
expect(result).toBe(expected);


function expect(actual){
  return {
    toBe(expected){
      if(actual !== expected){
        throw new Error(`Expected ${expected}, got ${actual}`);
      }
    }
  }
}