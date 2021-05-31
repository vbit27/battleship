const Ship = require('./ship');

test('add one plus one return two', () => {
    const ship = Ship(2);
    expect(ship.isSunk()).toEqual(false);
});
