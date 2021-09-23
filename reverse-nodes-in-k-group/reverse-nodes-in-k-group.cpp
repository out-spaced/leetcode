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
    ListNode* reverseKGroup(ListNode* head, int k) {
        ListNode fakeHead;
        fakeHead.next = head;
        ListNode* current = head;
        ListNode* previous = &fakeHead;
        while (current != NULL) {
            ListNode* tail = previous;
            ListNode* newHead = current;
            int i = 1;
            while (i < k && newHead != NULL) {
                newHead = newHead->next;
                i++;
            }
            if (newHead == NULL) {
                break;
            }
            while (newHead != current) {
                ListNode* temp = current->next;
                current->next = previous;
                previous = current;
                current = temp;
            }
            current = current->next;
            newHead->next = previous;
            previous = tail->next;
            tail->next = newHead;
            previous->next = current;
        }
        return fakeHead.next;
    }
};