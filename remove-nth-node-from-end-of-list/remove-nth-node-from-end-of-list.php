/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val = 0, $next = null) {
 *         $this->val = $val;
 *         $this->next = $next;
 *     }
 * }
 */
class Solution {

    /**
     * @param ListNode $head
     * @param Integer $n
     * @return ListNode
     */
    function removeNthFromEnd($head, $n) {
        $newHead = new ListNode(0, $head);
        $firstPtr = $newHead;
        $secondPtr = $newHead;
        for ($i = 0; $i <= $n; $i++) {
            $firstPtr = $firstPtr->next;
        }
        while ($firstPtr !== null) {
            $firstPtr = $firstPtr->next;
            $secondPtr = $secondPtr->next;
        }
        $secondPtr->next = $secondPtr->next->next;
        return $newHead->next;
    }
}


