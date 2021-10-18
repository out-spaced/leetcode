/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    let result = [];
    
    function helper(prev) {
        if (nums.length === 0) {
            let cp = [...prev];
            result.push(cp);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            let nextNum = nums.splice(i, 1);
            prev.push(nextNum);
            helper(prev);
            prev.pop(nextNum);
            nums.splice(i, 0, nextNum);
        }
    }
    helper([]);
    return result;
    
};