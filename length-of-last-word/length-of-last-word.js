/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    let arr = s.split(' ');
    return arr[arr.length - 1].trim().length;
};