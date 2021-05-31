const Ship = (length) => {
    const shipStatus = Array.from('O'.repeat(length)); // O = not hit

    const hit = (position) => {
        shipStatus[position] = 'hit';
    };

    const isSunk = () => {
        if (shipStatus.some((x) => x == 'O')) {
            return false;
        } else true;
    };
    return {
        hit,
        isSunk,
        shipStatus,
    };
};

module.exports = Ship;
