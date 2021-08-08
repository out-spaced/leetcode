/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let max = 0;
    let left = height[0];
    let i = 0;
    let j = height.length - 1
    let right = height[j]
    
    for (let distance = height.length - 1; distance > 0; distance--) {
        let smallest = Math.min(left, right)
        let currentArea = smallest * distance;
        if (currentArea > max) {
            max = currentArea;
        }
        if (left === smallest) {
            i++;
            left = height[i];
        } else {
            j--;
            right = height[j];
        }

    }
    return max
};