/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const temp = new Array(grid[0].length).fill(201);
    let last = 0;
    grid.forEach(row => {
        for (let j = 0; j < row.length; j++) {
            const smaller = Math.min(temp[j], last);
            last = smaller + row[j];
            temp[j] = last;
        }
        last = 201; // reset after each row
    });
    return temp.pop();
};