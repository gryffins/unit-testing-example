const sum = require('./index');

test('the sum of 1 and 1 should equal 2.', () => {
  expect(sum(1, 1)).toBe(2);
});