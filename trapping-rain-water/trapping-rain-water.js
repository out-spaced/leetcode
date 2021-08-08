/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    let total = 0;
    for (let i = 0; i < height.length; i++) {
        if (height[i] > 0) {
            let min = height[i];
            let end = i;
            // find where water is trapped
            for (let j = i + 1; j < height.length; j++) { 
                // must be something lower
                // then something higher
                if (height[j] > min) {
                    // trapped water
                    // iterate from here to see how much
                    let max = Math.min(height[i], height[j]);
                    for (k = i + 1; k < height.length; k++) {
                        if (height[k] >= max) {
                            max = height[k];
                            end = k;
                            if (height[k] >= height[i]) {
                                break;
                            }
                        }
                    }
                    // add trapped water, then add to i and j to skip
                    //iterate from start to end, subtracting at each step
                    let distance = end - i - 1;
                    let maxHeight = Math.min(height[i], height[end])
                    let filled = distance * maxHeight;
                    for (let k = i + 1; k < end; k++) {
                        let numToSubtract = Math.min(maxHeight, height[k])
                        filled -= numToSubtract;
                    }
                    total += filled;
                    j = j + 1000000;
                    i = end -1;
                }
                if (height[j] >= height[i]) {
                    break;
                } else {
                    min = height[j];
                }
            }

        }
    }
    return total;
};
