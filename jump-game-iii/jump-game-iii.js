/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    let jumped = Array(arr.length).fill(1);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            jumped[i] = 0;
        }
    }
    function helper(currentIndex) {
        // base case: 
        if (jumped[currentIndex] < 0) {
            return false;
        } else if (currentIndex < 0 || currentIndex >= arr.length) {
            return false;
        }
        jumped[currentIndex] = -1;
        if (arr[currentIndex] === 0) {
            return true;
        }
        let jumpLeft = helper(currentIndex - arr[currentIndex]);
        let jumpRight = helper(currentIndex + arr[currentIndex]);
        return jumpLeft || jumpRight ? true : false;
    }
    return helper(start);
};