/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count = 0;
    nums.forEach((num, index) => { 
        if (num === val) {
            nums[index] = null;
        } else {
            count += 1;
        }
    })
    nums.sort();
    return count;
};