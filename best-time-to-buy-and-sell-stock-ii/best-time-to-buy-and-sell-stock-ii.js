/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let total = 0;
    let sell = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > sell) {
            total += prices[i] - sell;
            sell = prices[i];
        } else if (prices[i] < sell) {
            sell = prices[i];
        }
    }
    return total;
};
