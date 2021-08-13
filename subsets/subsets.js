/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const max = Math.pow(2, nums.length); 
    let result = [];
    for (let i = 0; i < max; i ++) {
        // extract least significant digit
        let current = i;
        let thisCombo = [];
        while (current > 0) {
            let leastSigDig = current & -current;
            let index = Math.log2(leastSigDig);
            current -= leastSigDig;
            thisCombo.push(nums[index]);
        }
        result.push(thisCombo);      
    }
    return result;
};
