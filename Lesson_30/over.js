const over = (x,y) => {
    if (x > y) return x;
    if (y > x) return y;
    return 'equal';
};

module.exports = over;