/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s, memo = {}) {
    if (s in memo) {
        return memo[s];
    }
    const firstNum = parseInt(s.slice(0, 1));
    if (firstNum === 0) {
        return 0;
    }
    if (s.length === 1) {
        return 1;
    }
    const secondNum = parseInt(s.slice(0,2));
    if (s.length === 2) {
        // can be 10 through 99
        if (secondNum % 10 === 0 && secondNum >= 30) {
            return 0;
        }
        if (secondNum % 10 === 0 || secondNum > 26) {
            return 1;
        }
        return 2;
    }
    if (secondNum > 26) {
        memo[s] = numDecodings(s.slice(1), memo);
        return memo[s];
    }
    memo[s] = numDecodings(s.slice(1), memo) + numDecodings(s.slice(2), memo);
    return memo[s];
};