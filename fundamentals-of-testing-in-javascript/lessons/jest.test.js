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


