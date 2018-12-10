const {
  sum,
  subtract
} = require('./index');

test('the sum of 1 and 1 should equal 2.', () => {
  expect(sum(1, 1)).toBe(2);
});

test('subtract 1 from 5 to equal 4', () => {
  expect(subtract(5, 1)).toBe(4);
});