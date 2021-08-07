/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    // a b c d e
    // 0 1 2 3 4
    // expand around index odd
    let middle = s.length >> 1;
    let longest = '';
    let maxPossibleDistancFromCenter = 0;
    for (let index = 0; index < s.length; index++ ) {
        let num = 0;
        while (num <= maxPossibleDistancFromCenter) {
            if (s[index - num] === s[index + num]) {
                // continue palindrome
                num++;
            } else {
                break;
            }
        }
        let length = num * 2 - 1;
        if (length > longest.length) {
            longest = s.slice(index + num - length, index + num)
        }
        if (index < middle) {
            maxPossibleDistancFromCenter += 1;
        } else {
            maxPossibleDistancFromCenter -= 1;
        }
    }
    // expand around index even (to the right always)
    if (s.length < 2) {
        return longest;
    }
    maxPossibleDistancFromCenter = 1;
    for (let index = 0; index < s.length - 1; index++ ) {
        let num = 0;
        while (num < maxPossibleDistancFromCenter) {
              if (s[index - num] === s[index + 1 + num]) {
                // continue palindrome
                num++;
            } else {
                break;
            }
        }
        if (num * 2 > longest.length) {
            longest = s.slice(index - num + 1, index + num + 1)
        }
        if (index <= middle) {
            maxPossibleDistancFromCenter += 1;
        } else {
            maxPossibleDistancFromCenter -= 1;
        }
    }
   return longest;
};
