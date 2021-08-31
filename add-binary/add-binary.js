/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let first = parseInt(a, 2);
    let second = parseInt(b, 2);
    // not actually max int, need smaller num
    const max_int = Math.pow(2, 8) - 1;
    let excessA = 0;
    let excessB = 0;
    let next = '';
    let result = '';
    if (first > max_int) {
        excessA = a.slice(0, a.length - 8);
        first = parseInt(a.slice(a.length - 8, a.length), 2);
    }
    if (second > max_int) {
        excessB = b.slice(0, b.length - 8);
        second = parseInt(b.slice(b.length - 8, b.length), 2);
    }
    console.log(first, second, excessA, excessB)
    let noCarry = first ^ second;
    let carry = (first & second) << 1; 
    while (carry > 0) {
        let temp = (carry & noCarry) << 1;
        noCarry = noCarry ^ carry;
        carry = temp;
    }
    result = noCarry.toString(2);
    if (excessA > 0 || excessB > 0) {
        next = addBinary(excessA, excessB);
        while (result.length < 8) {
            result = '0' + result;
        }
    }
    console.log(result.length, 'res len')
    if (result.length > 8) {
        next = addBinary(next, '1');
        result = result.slice(1, 9);
        console.log(result, 'res')
    }
    console.log(next, result)
    return next + result;
};
