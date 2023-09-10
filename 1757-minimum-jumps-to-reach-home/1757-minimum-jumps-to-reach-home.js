/**
 * @param {number[]} forbidden
 * @param {number} a
 * @param {number} b
 * @param {number} x
 * @return {number}
 */
var minimumJumps = function(forbidden, a, b, x) {
    const visited = new Set();
    const visitedBackwards = new Set();
    const max = a > b ? x + a : Math.max(x + a + b, Math.max(...forbidden) + a + b)
    const isForbidden = num => {
        return forbidden.includes(num);
    };
    const nextJump = (current, jumps, justWentBack = false) => {
        if (visited.has(current) || justWentBack && visitedBackwards.has(current)) return -1;
        if (!justWentBack) visited.add(current);
        else visitedBackwards.add(current);
        if (current === x) return jumps;
        if (current < 0 || isForbidden(current) || current > max) return -1;
        const forwards = nextJump(current + a, jumps + 1);
        let backwards = -1;
        if (!justWentBack) {
            backwards = nextJump(current - b, jumps + 1, true);
        }
        if (forwards >= 0 && backwards >= 0) return Math.min(forwards, backwards);
        if (forwards >= 0) return forwards;
        return backwards;
    };
    return nextJump(0, 0);
};
