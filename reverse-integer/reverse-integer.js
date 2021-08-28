/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    while (Math.abs(x) > 0) {
        result = result*10;
        let current = x % 10;
        x -= current;
        result += current;
        x /= 10;
    }
    if (result >= Math.pow(2, 31) || result <= (Math.pow(2, 31) + 1) * -1) {
        return 0;
    }
    return result;
};