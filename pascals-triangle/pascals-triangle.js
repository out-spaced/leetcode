/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    if (numRows === 1) {
        return [[1]];
    }
    let prev = generate(numRows - 1);
    let last = prev[prev.length - 1];
    let next = [1]
    for (let i = 1; i < last.length; i++) {
        let added = last[i] + last[i - 1];
        next.push(added);
    }
    next.push(1);
    prev.push(next);
    return prev;
};