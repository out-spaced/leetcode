/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === '') {
        return 0;
    }
    for (let i = 0; i <= (haystack.length - needle.length); i++) {
        let j = 0;
        while (haystack[i + j] === needle[j] && j < needle.length) {
            j++;
        }
        if (j === needle.length) {
            return i;
        }
    }
    return -1;
};