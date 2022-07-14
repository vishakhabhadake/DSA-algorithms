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
    let result = [];
    inorder(root,result);
    return result;
};

function inorder(root, result){
    if(!root) return null;
    inorder(root.left,result); // first process the left part
    result.push(root.val); // add the node itself
    inorder(root.right,result); // process the right part
}