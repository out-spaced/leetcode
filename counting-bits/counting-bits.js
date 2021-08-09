/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    if (n === 0) {
        return [0];
    }
    let result = [1];
    let count = 1;
    let previous = [1];
    while (count < n) {
        previous = previous.concat(previous.map(num => num + 1))
        count *= 2;
        result = result.concat(previous);
    }
    result.unshift(0);
    return (result.slice(0, n + 1))
};