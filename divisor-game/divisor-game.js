/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
    // base case n = 1;
    return !(n % 2) 
    if (n === 1) {
        return false;
    }
    // find the largest x where n % x = 0
    let x = n >> 1
    while (n % x !== 0) {
        x -= 1;
    }
    return !divisorGame(n - x);
};
