/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = [];
    let carry = false;
    // compare last value
    // last value is
    // a[a.length - 1], b[b.length - 1]
    let aIndex = a.length - 1;
    let bIndex = b.length - 1;
    while (aIndex >= 0 && bIndex >= 0) {
        if (a[aIndex] === '1' && b[bIndex] === '1') {
            if (carry) {
                result.unshift('1')
            } else {
                result.unshift('0')
            }
            carry = true;
        } else if (a[aIndex] === '0' && b[bIndex] === '0') {
            if (carry) {
                result.unshift('1')
                
            } else {
                result.unshift('0');
            }
            carry = false;
        } else {
            if (carry) {
                result.unshift('0');
            } else {
                result.unshift('1');
            }
        }
        aIndex--;
        bIndex--;
    }
    let remaining = b;
    if (aIndex >= 0) {
        remaining = a;
        bIndex = aIndex;
    }
    while (bIndex >= 0) {
        if (carry && remaining[bIndex] === '1') {
            result.unshift('0');
        } else if (carry && remaining[bIndex] === '0') {
            result.unshift('1');
            carry = false;
        } else {
            result.unshift(remaining[bIndex])
        }
        bIndex--;
    }
    if (carry) {
        result.unshift('1');
    }
    return result.join('');
};