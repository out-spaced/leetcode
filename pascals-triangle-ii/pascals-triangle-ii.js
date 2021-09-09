/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) {
        return [1];
    }
    if (rowIndex === 1) {
        return [1, 1];
    }
    let result = getRow(rowIndex - 1);
    let prev = result[0];
    for (let i = 1; i < rowIndex; i++) {
        let temp = result[i];
        result[i] = result[i] + prev;
        prev = temp;
    }
    result.push(1);
    return result;
};