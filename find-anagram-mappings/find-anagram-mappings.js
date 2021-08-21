/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var anagramMappings = function(nums1, nums2) {
    let mapping = Array(nums1.length).fill(null);
    let tracker = {};
    for (let i = 0; i < nums2.length; i++) {
        tracker[nums2[i]] = i;
    }
    for (let i = 0; i < nums1.length; i++) {
        mapping[i] = tracker[nums1[i]];
    }
    return mapping;
};