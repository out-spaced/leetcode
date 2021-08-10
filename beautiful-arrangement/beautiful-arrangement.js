/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {
    function addNum(num, perm) {
        let solutions = 0;
        // base case, num = 1
        if (num === 1) {
            return 1;
        }
        for (let i = 1; i < perm.length; i++) {
            if (perm[i] === 0) {
                if (i % num === 0 || num % i === 0) {
                    let next = [...perm];
                    // stick in n
                    next[i] = num;
                    solutions += addNum(num - 1, next);
                }
            }
        }
        return solutions;
    }
    const perm = Array(n + 1).fill(0);
    perm[0] = null;
    const solutions = addNum(n, [...perm]);
    return solutions;
};

// 1   any                15
// 2   2n                 8
// 3   3n                 6
// 4   4n and 2           5
// 5   5n                 4
// 6   6n and 2 and 3     5
// 7   7n                 3
// 8   4 and 2            4
// 9   3                  3
// 10  5 and 2            4
// 11  only itself        2
    // n = 11 == (n=10 + n=10 where perm[1] = 1)
// 12  6 4 3 2            6
// 13  only itself        2
    // n = 13 == (n=12 + n=12 where perm[1] = 1)
// 14  7 2                4
// 15  5 3                4
