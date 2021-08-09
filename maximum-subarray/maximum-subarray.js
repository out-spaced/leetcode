/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let previousSum = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let currentSum = previousSum + nums[i];
        if (currentSum > max) {
            max = currentSum;
        }
        if (nums[i] > max) {
            max = nums[i];
        }
        if (nums[i] > currentSum) {
            previousSum = nums[i];
        } else {
            previousSum += nums[i];
        }
    }
    return max;
};