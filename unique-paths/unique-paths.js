/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n, memo = {}) {
        // base case
    if (`${m},${n}` in memo) {
        return memo[`${m},${n}`]
    } 
    if (`${n},${m}` in memo) {
        return memo[`${n},${m}`]
    }
    if (m === 1 && n === 1) {
        return 1;
    }
    // in case of invalid answers
    if (m < 1 || n < 1) {
        return 0;
    }
    memo[`${m},${n}`] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);
    return memo[`${m},${n}`];
};