const { sumAsync, subtractAsync } = require('../math');

test('sumAsync adds numbers', async () => {
  const result = await sumAsync(1, 2);
  const expected = 3;
  expect(result).toBe(expected);
})

test('subtractAsync subtracts numbers', async () => {
  result = await subtractAsync(2, 1);
  expected = 1;
  expect(result).toBe(expected);
})

async function test (title, callback) {
  try {
    await callback();
    console.log(`✅ ${title}`);
  } catch (error) {
    console.log(`❌ ${title}`);
    console.log(error);
  }
}

function expect (actual) {
  return {
    toBe (expected) {
      if (actual !== expected) {
        throw new Error(`Expected ${expected}, got ${actual}`);
      }
    }
  }
}

