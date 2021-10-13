/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    function search(start, end) {
        if (start === end) {
            if (target > nums[start]) {
                return start + 1;
            }
            return start;
        }
        let mid = (start + end) >> 1;
        if (target === nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            return search(start, mid)
        } else {
            return search(mid + 1, end)
        }
    }
    return search(0, nums.length - 1)
};