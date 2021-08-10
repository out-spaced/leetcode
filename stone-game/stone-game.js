/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    function inner(input, memo = {}) {
        let key = input.join();
        if (memo.hasOwnProperty(key)) {
            return memo[key];
        }
        // base case piles.length = 2
        if (input.length === 2) {
            memo[key] = Math.max(input[0], input[1]);
            return memo[key];
        }
        const first = input.slice(0, input.length -1);
        const second = input.slice(1, input.length);
        const firstKey = first.join();
        const secondKey = second.join();
        let leftAnswer = 0;
        let rightAnswer = 0;
        if (memo.hasOwnProperty(firstKey)) {
            leftAnswer = memo[firstKey];
        } else {
            leftAnswer = input[0] + inner(first, memo);
        }
        if (memo.hasOwnProperty(secondKey)) {
            rightAnswer = memo[secondKey];
        } else {
            rightAnswer = input[input.length - 1] + inner(first, memo);
        }
        // const first = input[0] + inner(input.slice(1, input.length), memo);
        // const second = input[input.length - 1] + inner(input.slice(0, input.length -1), memo);
        memo[key] = Math.max(leftAnswer, rightAnswer)
        return memo[key];
        
    }
    // check if inner or outer has bigger value
    // recurse through inner
    let alice = inner(piles);
    let total = piles.reduce( (acc, current) => acc + current)
    if (alice * 2 > total) {
        return true
    }
    return false
};

