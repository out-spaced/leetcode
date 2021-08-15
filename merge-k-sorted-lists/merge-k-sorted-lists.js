/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) {
        return null;
    }
    function oneIsBigger(bigger, smaller, newTail) {
        newTail.next = smaller;
        while (smaller && (bigger.val >= smaller.val)) {
            newTail = smaller;
            smaller = smaller.next;
        }
        if (smaller !== null) {
            // list2 not null and larger
            newTail.next = bigger;
            newTail = bigger;
            bigger = bigger.next;
        }
        return [bigger, smaller, newTail];
    }
    // merge 2 at a time, like mergesort
    function mergeTwoLists(list1, list2) {
        if (list1 === null && list2 === null) {
            return null;
        } else if (list1 === null) {
            return list2;
        } else if (list2 === null) {
            return list1;
        }
        let newTail = new ListNode(0, null)
        let newHead = newTail;
        // begin loop
        while (list1 !== null && list2 !== null) {
             // if values equal, change next
            if (list1.val === list2.val) {
                newTail.next = list1;
                let temp = list1.next;
                list1.next = list2;
                newTail = list2;
                list1 = temp;
                list2 = list2.next;
            } else if (list1.val > list2.val) {
                // if one smaller, advance until smaller one is equal or bigger
                // time limit exceeded
                [list1, list2, newTail] = oneIsBigger(list1, list2, newTail)
            } else if (list2.val > list1.val) {
                [list2, list1, newTail] = oneIsBigger(list2, list1, newTail)
            }
        }
        // if next on either is null, append the rest
        if (list1 === null) {
            // advance on second until list1.val < list2.val
            newTail.next = list2;
        } else {
            newTail.next = list1;
        }
        return newHead.next;
    }
    while (lists.length > 1) {
        let first = lists.shift();
        let second = lists.shift();
        let merged = mergeTwoLists(first, second);
        //let asdf = [];
        // let temp = merged
        // while (temp !== null) {
        //     asdf.push(temp.val);
        //     temp = temp.next;
        // }
        // console.log('main func', asdf)
        lists.push(merged);
    }
    return lists[0];
};