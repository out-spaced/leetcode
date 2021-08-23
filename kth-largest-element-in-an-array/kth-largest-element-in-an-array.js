/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // trying to learn more about heaps
    // create heap
    let heap = [];
    function moveUp(index) {
        if (index === 0) {
            return null;
        }
        let parent = (((index % 2) + index) / 2 ) - 1;
        if (heap[index] > heap[parent]) {
            [heap[index], heap[parent]] = [heap[parent], heap[index]];
            moveUp(parent);
        }
        return null;
    }
    function moveDown(parent) {
        let largest = parent;
        let left = parent * 2 + 1;
        let right = left + 1;
        if (left < heap.length && heap[left] > heap[largest]) {
            largest = left;
        }
        if (right < heap.length && heap[right] > heap[largest]) {
            largest = right;
        }
        if (largest !== parent) {
            [heap[parent], heap[largest]] = [heap[largest], heap[parent]];
            moveDown(largest);
        }
    }
    function removeLargest() {
        let last = heap.pop();
        heap[0] = last;
        moveDown(0);
    }
    for (let i = 0; i < nums.length; i++) {
        // addToHeap(nums[i], 0);
        heap.push(nums[i]);
        moveUp(i);
    }
    for (let i = 1; i < k; i++) {
        removeLargest();
    }
    return heap[0];
};