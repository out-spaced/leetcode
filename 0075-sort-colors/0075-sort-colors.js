/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let zeros = 0;
    let ones = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeros += 1;
        } else if (nums[i] === 1) {
            ones += 1;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (zeros > 0) {
            nums[i] = 0;
            zeros -= 1;
        } else if (ones > 0) {
            nums[i] = 1;
            ones -= 1;
        } else {
            nums[i] = 2;
        }
    }
};