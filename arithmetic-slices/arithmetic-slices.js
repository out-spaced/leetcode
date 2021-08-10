/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    if (nums.length < 3) {
        return 0;
    }
    let solutions = 0;
    let prev = nums[1] - nums[0];
    let count = 1;
    for (let i = 2; i < nums.length; i++) {
        let difference = nums[i] - nums[i - 1]
        if (difference === prev) {
            count++;
        } else {
            if (count >= 2) {
                solutions += countSolutions(count + 1);
            }
            count = 1;
        }
        if (i + 1 === nums.length && count >= 2) {
            solutions += countSolutions(count + 1);
        }
        prev = difference;
        
    }
    function countSolutions(length) {
        let solutions = 0;
        let counter = 1;
        for (let i = 0; i < length - 2; i++) {
            solutions += counter;
            counter++;
        }
        return solutions;
    } 
    return solutions;
};

