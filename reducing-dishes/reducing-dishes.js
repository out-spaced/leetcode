/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
    satisfaction.sort((a, b) => {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        }
        return 0;
    });
    
    let j = satisfaction.length - 1; 
    let total = 0;
    let addedEachTime = 0;
    while (satisfaction[j] >= 0) {
        addedEachTime += satisfaction[j];
        total += addedEachTime;
        j--;
    }
    while (j >= 0 && addedEachTime > Math.abs(satisfaction[j])) {
        addedEachTime += satisfaction[j];
        total = total + addedEachTime;
        j--;
    }
    return total;
};