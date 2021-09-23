/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        ListNode fakeHead;
        ListNode * current;
        current = &fakeHead;
        while (l1 != NULL && l2 != NULL) {
            if (l1->val > l2->val) {
                current->next = l2;
                current = current->next;
                l2 = l2->next;
            } else {
                current->next = l1;
                current = current->next;
                l1 = l1->next;
            }
        }
        if (l1 != NULL) {
            current->next = l1;
        } else {
            current->next = l2;
        }
        return fakeHead.next;
    }
};