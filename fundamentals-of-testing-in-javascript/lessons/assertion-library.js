const { sum, subtract } = require('../math');

function sumTest(){
  const result = sum(1, 2);
  const expected = 3;
  expect(result).toBe(expected);
}

test('sum adds numbers', () => {
  const result = sum(1, 2);
  const  expected = 3;
  expect(result).toBe(expected);
});


test('subtract subtracts numbers', () => {
  result = subtract(2, 1);
  expected = 1;
  expect(result).toBe(expected);
});


function test(title, callback){
  try{
    callback();
    console.log(`✅ ${title}`);
  }catch(error){
    console.log(`❌ ${title}`);
    console.log(error);
  }
}

function expect(actual){
  return {
    toBe(expected){
      if(actual !== expected){
        throw new Error(`Expected ${expected}, got ${actual}`);
      }
    }
  }
}