/**
 * @param {number[]} cost
 * @return {number}
 */
// var minCostClimbingStairs = function(cost, memo = {}) {
//     if (cost.length === 1) {
//         return 0;
//     }
//     // base case cost length = 2
//     if (cost.length === 2) {
//         return Math.min(...cost);
//     }
//     const costOne = cost[0] + minCostClimbingStairs(cost.slice(1, cost.length))
//     const costTwo = cost[1] + minCostClimbingStairs(cost.slice(2, cost.length))
//     return Math.min(costOne, costTwo)
// };
var minCostClimbingStairs = function(cost) {
    let result = Array(cost.length - 1).fill(0);
    result[0] = cost[0];
    result[1] = cost[1];
    for (let i = 2; i < cost.length; i++) {
        result[i] = Math.min(result[i - 1], result[i - 2]) + cost[i];
    }
    return Math.min(result[result.length - 1], result[result.length - 2])
};
