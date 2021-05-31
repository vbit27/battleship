const Ship = (length) => {
    let shipStatus = [];

    for (let i = 0; length < 2; i++) {
        shipStatus.push('notHit');
    }

    const hit = (position) => {
        shipStatus[position] = 'hit';
    };

    const isSunk = () => {
        if (shipStatus.some((x) => x == 'notHit')) {
            return false;
        } else true;
    };
    return {
        // hit,
        isSunk,
    };
};

module.exports = Ship;
