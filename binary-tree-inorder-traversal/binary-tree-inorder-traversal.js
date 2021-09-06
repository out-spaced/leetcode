/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if (root === null) {
        return [];
    }
    let left = inorderTraversal(root.left);
    let right = inorderTraversal(root.right);
    left.push(root.val);
    return left.concat(right);
};