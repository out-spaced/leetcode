/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    const result = [];
    while (top <= bottom && left <= right) {
        // go right until reaching right, increase top by 1
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        };
        top += 1;
        // go down until reaching bottm, decrease right by 1
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        };
        right -= 1;
        // go left until reaching left, decrease buttom by 1
        for (let i = right; i >= left; i--) {
            if (top > bottom) break;
            result.push(matrix[bottom][i]);
        };
        bottom -= 1;
        // go up until reaching top, increase left by 1
        for (let i = bottom; i >= top; i--) {
            if (left > right) break;
            result.push(matrix[i][left])
        };
        left += 1;
    }
    return result;
};