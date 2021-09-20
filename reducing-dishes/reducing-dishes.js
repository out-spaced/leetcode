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
    let firstPos = null;
    let j = 0; 
    let total = 0;
    let addedEachTime = 0;
    let multiplier = 1;
    while (j < satisfaction.length) {
        if (satisfaction[j] >= 0) {
            firstPos = j;
            break;
        }
        j++;
    }
    if (firstPos === null) {
        return 0;
    }
    for (let i = j; i < satisfaction.length; i++) {
        total += (satisfaction[i] * multiplier);
        multiplier++;
        addedEachTime += satisfaction[i];
    }
    // subtract 1 from j to reach first negative
    j--;
    while (j >= 0 && (addedEachTime + satisfaction[j]) > 0) {
        addedEachTime = addedEachTime + satisfaction[j];
        total = total + addedEachTime;
        j--;
    }
    return total;
};