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
    TreeNode* buildTree(vector<int>& inorder, vector<int>& postorder) {
        if (inorder.size() == 0 || postorder.size() == 0) {
            return NULL;
        }
        int inorderIndex = 0;
        int val = postorder.back();
        postorder.pop_back();
        for (int i = 0; i < inorder.size(); i++) {
            if (inorder[i] == val) {
                inorderIndex = i;
                break;
            }
        }
        vector<int> rightSide(inorder.begin() + inorderIndex + 1, inorder.end());
        vector<int> leftSide(inorder.begin(), inorder.begin() + inorderIndex);
        TreeNode* rightNode = buildTree(rightSide, postorder);
        TreeNode* leftNode = buildTree(leftSide, postorder);
        TreeNode* parent = new TreeNode(val, leftNode, rightNode);
        return parent;
    }

};
