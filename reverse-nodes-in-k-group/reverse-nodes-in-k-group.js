/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    
    // create fake head 
    let fakeHead = new ListNode(0, head);
    // set fakehead.next to head
    let previous = fakeHead;
    // set previous to fakehead
    // set current to head
    let current = head;
    let lastHead = fakeHead;
    while (current !== null) {
    // loop until current is null
        let i = 1;
        let newHead = current;
        // set j to 0
        // set newHead to current
        while (i < k && newHead !== null) {
        // loop until j = k OR newHead is null
            newHead = newHead.next;
            // set newHead to newHead.next
            i++;
            // increment j
        }
        if (newHead === null) {
            break;
        }
        // if newhead is null
            // break loop
        while (newHead !== current) {
        // loop while newHead!=current
            let temp = current.next;
            // save current.next in temp var
            // set current.next to previous
            current.next = previous;
            // set previous to current
            previous = current;
            // set current to temp var
            current = temp;
        
        }
        current = current.next;
        newHead.next = previous;
        previous = lastHead.next;
        lastHead.next = newHead;
        previous.next = current;
        lastHead = previous;
    }
    return fakeHead.next
};