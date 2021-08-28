/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    let numerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    for (let i = 0; i < s.length; i++) {
        let current = s[i];
        if (i === (s.length - 1)) {
            result += numerals[current];
            break;
        }
        let nextIndex = i + 1;
        // condition for I
        if (current === 'I' && s[nextIndex] === 'V') {
            result += 4;
            i++;
        } else if (current === 'I'  && s[nextIndex] === 'X') {
            result += 9;
            i++;
        } else if (current === 'X' && s[nextIndex] === 'L') {
            result += 40;
            i++;
        } else if (current === 'X' && s[nextIndex] === 'C') {
            result += 90;
            i++;
        } else if (current === 'C' && s[nextIndex] === 'D') {
            result += 400;
            i++;
        } else if (current === 'C' && s[nextIndex] === 'M') {
            result += 900;
            i++;
        } else {
            result += numerals[current];
        }
    }
    return result;
};