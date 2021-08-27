/**
 * Initialize your data structure here.
 */
var TwoSum = function() {
    this.store = [];
};

/**
 * Add the number to an internal data structure.. 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    this.store.push(number);
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value. 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    let tracker = {};
    this.store.forEach(val => {
        if (tracker[val]) {
            tracker[val]++;
        } else {
            tracker[val] = 1;
        }
    })
    let nums = Object.keys(tracker).map(num => parseInt(num));
    for (let i = 0; i < nums.length; i++) {
        const complement = value - nums[i];
        if (complement in tracker) {
            if (complement === nums[i] && tracker[complement] < 2) {
                // skip
            } else {
                return true;
            }
        }
    }
    return false;
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */