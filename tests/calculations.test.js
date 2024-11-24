const sum = require('../functions/sum');
const randomNumber = require('../functions/randomNumber');


test('adds 7 and 3 to equal 10', () => {
  expect(sum(7, 3)).toBe(10);
});

test('sum is not a zero', () => {
  expect(sum(0,7)).not.toBe(0);
});

test('number is in the range of 20-30', () => {
  const number = randomNumber(20, 30);
  console.log("random number: " + number);

  expect(number).toBeGreaterThanOrEqual(20);
  expect(number).toBeLessThanOrEqual(30);
});