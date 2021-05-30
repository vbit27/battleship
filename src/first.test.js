const add = require('./first');

test('should add 1 + 1 equal 2 ', () => {
  expect(add(1, 1)).toBe(2);
});
