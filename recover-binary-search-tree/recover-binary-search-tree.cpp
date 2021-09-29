/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* largerNode = NULL;
    TreeNode* smallerNode = new TreeNode(INT_MIN);
    bool found = false;
    void traverse(TreeNode* node) {
        if (node == NULL) {
            return;
        }
        traverse(node->left);
        if (!found) {
            if (smallerNode->val <= node->val) {
                if (largerNode == NULL) {
                    smallerNode = node;
                }
            } else {
                if (largerNode != NULL) {
                    smallerNode = node;
                    found = true;
                } else {
                    largerNode = smallerNode;
                    smallerNode = node;
                }
            }
            traverse(node->right);
        }
        return;
    }
    void recoverTree(TreeNode* root) {
        traverse(root);
        int temp = largerNode->val;
        largerNode->val = smallerNode->val;
        smallerNode->val = temp;
        return;
    }
};