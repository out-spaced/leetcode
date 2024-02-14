// in: int matrix
// out: int
// constraints: grid is at least 2x2, robots much reach bottom, if both are in same square only one gets number
// edge: overlapping paths, board of 0s

class Solution {
    public int cherryPickup(int[][] grid) {
        int numCols = grid[0].length;
        int numRows = grid.length;
        int[][][] memo = new int[numRows][numCols][numCols];
        for (int col = numRows - 1; col >= 0; col--) {
            int maxI = col > numCols ? numCols - 1 : col;
            for (int i = 0; i <= col; i++) {
                int minJ = col >= numCols ? i : numCols - col - 1;
                for (int j = numCols - 1; j >= minJ; j--) {
                    int sum = 0;
                    int prevMax = 0;
                    if (i != j) {
                        sum += grid[col][i];
                    }
                    sum += grid[col][j];
                    if (numRows > col + 1) { // skip on bottom row
                        for (int prevI = i - 1; prevI <= i + 1; prevI++) {
                            if (prevI < 0) continue;
                            for (int prevJ = j + 1; prevJ >= j - 1; prevJ--) {
                                if (prevI > prevJ || prevJ >= numCols) continue; // j can never be left of i
                                int previous = memo[col + 1][prevI][prevJ];
                                prevMax = Math.max(prevMax, previous);
                            }
                        }
                    }
                    memo[col][i][j] = sum + prevMax;
                }
            }
        }
        return memo[0][0][numCols - 1];
    }
}