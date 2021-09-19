/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    function helper (num, curIndex, curRes) {
        if (num < 0 || curIndex < 0) {
            return false;
        } else if (num === 0) {
            result.push([...curRes]);
            return true;
        }
        while (curIndex >= 0) {
            curRes.push(candidates[curIndex]);
            let current = helper(num - candidates[curIndex], curIndex, curRes);
            curRes.pop();
            curIndex--;
        }
    }
    helper(target, candidates.length - 1, []);
    return result;
};