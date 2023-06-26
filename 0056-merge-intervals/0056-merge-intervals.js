/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const length = intervals.length;
    let index = 0;
    const results = [];
    while (index < length) {
        const start = intervals[index][0];
        let end = intervals[index][1];
        index += 1;
        while (index < intervals.length) {
            if (end >= intervals[index][0]) {
                end = Math.max(intervals[index][1], end);
                index += 1;
                //continue
            } else {
                // stop
                break;
            }
        }
        results.push([start, end]);
    }
    return results;
};