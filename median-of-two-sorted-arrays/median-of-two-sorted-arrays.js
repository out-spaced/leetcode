/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    function findTarget(target, array, y = false, leftBound = 0, rightBound = (array.length - 1)) {
        // find where in array num to the left is less or equal, num at index is larger
        // first find a smaller number
        // find mid point
        if (leftBound === rightBound || array[leftBound] === array[rightBound]) {
            return leftBound;
        }
        let mid = (leftBound + rightBound) >> 1;
        let nextLeftBound = null;
        let nextRightBound = null;
        if (y) {
            if (target > array[mid]) {
                nextLeftBound = mid + 1;
                nextRightBound = rightBound;
            } else {
                nextLeftBound = leftBound;
                nextRightBound = mid;
            }
        } else if (target < array[mid]) {
            nextLeftBound = leftBound; 
            nextRightBound = mid;
            if (mid === 0) {
                nextRightBound = 0;
            }
        } else {
            nextLeftBound = mid + 1;
            nextRightBound = rightBound;
        }
        // console.log(target, array, y, nextLeftBound, nextRightBound)
        return findTarget(target, array, y, nextLeftBound, nextRightBound)
        // compare
        // case: find first smaller number.
        // if num is greater than array[mid]
        // return (number, array, ((len(array) - mid - 1) /2 + mid), smaller)
        // if num is less than array[mid] 
        // return (number, array, (math.floor(mid - mid/2)), smaller)
    }
    function findMedian(array, isEven) {
        if (isEven) {
            let first = array.length / 2;
            let second = first - 1;
            return ((array[first] + array[second]) / 2)
        }
        let index = (array.length - 1) / 2;
        return array[index];
    }
    // TODO: include case where array is empty
    // find smallest of a, b
    let isEven = false;
    let newLength = nums1.length + nums2.length;
    if (newLength === 0) {
        return null;
    } 
    if (newLength % 2 === 0) {
        isEven = true;
    }
    if (newLength === nums1.length) {
        return findMedian(nums1, isEven);
    } else if (newLength === nums2.length) {
        return findMedian(nums2, isEven);
    }
    let smallerStart = null;
    let largerStart = null;
    let smallerEnd = null;
    let largerEnd = null;
    if (nums1[0] > nums2[0]) {
        smallerStart = nums2
        largerStart = nums1;
    } else {
        smallerStart = nums1;
        largerStart = nums2;
    }
    // find smaller of largest
    if (nums1[nums1.length - 1] > nums2[nums2.length - 1]) {
        smallerEnd = nums2;
        largerEnd = nums1;
    } else {
        smallerEnd = nums1;
        largerEnd = nums2;
    }
    let newMid = null;
    if (isEven) {
        newMid = newLength / 2;
    } else {
        newMid = (newLength - 1) / 2;
    }
    // calculate x and y
    let x = findTarget(largerStart[0], smallerStart);
    if (x !== 0) {
        x--;
    }
    let y = findTarget(smallerEnd[smallerEnd.length - 1], largerEnd, true);
    if (y === 0) {
        // entire smallerEnd array is smaller than largerEnd[0]
        // can use less space if necessary
        let c = smallerEnd.concat(largerEnd);
        if (isEven) {
            return (c[newMid - 1] + c[newMid]) / 2;
        }
        return c[newMid];
    }
    // if new median is less than x or greater than y
        // return new median
    if (newMid < x) {
        if (isEven) {
            return (smallerStart[newMid] + smallerStart[newMid - 1]) / 2
        }
        return smallerStart[newMid];
    } else if (newMid >= (smallerEnd.length + y)) {
        if (isEven) {
            if (y === 0) {
                return (largerEnd[y] + smallerEnd[smallerEnd.length - 1]) / 2
            }
            const largerOfPrev = Math.max(largerEnd[newMid - smallerEnd.length - 1], smallerEnd[smallerEnd.length - 1])
            return (largerEnd[newMid - smallerEnd.length] + largerOfPrev) / 2;
        }
        if (newMid > (smallerEnd.length + y)) {
            return largerEnd[newMid - smallerEnd.length];
        }
    }
    // otherwise set k to 0
    // loop
    let k = 0;
    let hasChanged = false;
    do {
        hasChanged = false;
        while (smallerStart[x] > largerStart[k] && k < (largerStart.length - 1)) {
            hasChanged = true;
            // if a(x) > b(k)
            // increment k until either b(k) > a(x) OR k + x is equal to new mid
            k++;
            if ((k + x) === newMid) {
                if (isEven) {
                    return (largerStart[k - 1] + Math.min(smallerStart[x], largerStart[k])) / 2
                }
                return Math.min(largerStart[k], smallerStart[x]);
            }
        }
        while (largerStart[k] >= smallerStart[x] && x < (smallerStart.length - 1)) {
            hasChanged = true;
            // increment x until either a(x) > k(x) OR k + x is equal to new mid
            x++;
            if ((k + x) === newMid) {
                if (isEven) {
                    return ((Math.min(largerStart[k], smallerStart[x]) + smallerStart[x - 1]) / 2)
                }
                if (x >= smallerStart.length) {
                    return largerStart[k];
                }
                return Math.min(largerStart[k], smallerStart[x]);
            }
        }
    // return new median
    } while (hasChanged);
    // gets to this point if either x or k cannot be incremented without going out of bounds
    // and has not reached new median yet
    // find which one is shorter
    if (newMid < x) {
        if (isEven) {
            return (smallerStart[newMid] + smallerStart[newMid - 1]) / 2
        }
        return smallerStart[newMid];
    }
    if (nums1.length > nums2.length) {
        let mid = newMid - nums2.length
        let result = nums1[mid];
        if (isEven) {
            result = (result + Math.max(nums2[nums2.length - 1], nums1[mid - 1])) / 2
        }
        return result;
    }
    let mid = newMid - nums1.length
    let result = nums2[mid];
    if (isEven) {
        result = (result + Math.max(nums1[nums2.length - 1], nums2[mid - 1])) / 2
    }
    return result;
};