/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo = {}) {
    if (n in memo) {
        return memo[n];
    }
    if (n === 0) {
        return 1;
    } else if (n < 0) {
        return 0;
    }
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    return memo[n];
};