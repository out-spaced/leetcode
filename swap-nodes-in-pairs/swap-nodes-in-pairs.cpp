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
    ListNode* swapPairs(ListNode* head) {
        ListNode fakeHead(0, head);
        ListNode* tail = &fakeHead;
        while (tail->next != NULL) {
            ListNode* current = tail->next;
            ListNode* next = current->next;
            if (next == NULL) {
                break;
            }
            tail->next = next;
            current->next = next->next;
            next->next = current;
            tail = current;
        }
        return fakeHead.next;
    }
};