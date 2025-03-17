//2236. Root Equals Sum of Children
// Easy
// Topics
// Companies
// You are given the root of a binary tree that consists of exactly 3 nodes: the root, its left child, and its right child.
// Return true if the value of the root is equal to the sum of the values of its two children, or false otherwise.
// Example 1:
// Input: root = [10,4,6]
// Output: true
// Explanation: The values of the root, its left child, and its right child are 10, 4, and 6, respectively.
// 10 is equal to 4 + 6, so we return true.
// Example 2:
// Input: root = [5,3,1]
// Output: false
// Explanation: The values of the root, its left child, and its right child are 5, 3, and 1, respectively.
// 5 is not equal to 3 + 1, so we return false.
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
 * @return {boolean}
 */
// const checkTree = (root) => root.val === root.right.val + root.left.val

class Tree {
  constructor(val, right = null, left = null) {
    this.val = val
    this.right = right
    this.left = left
  }
}

const tree = new Tree(5, new Tree(3), new Tree(2))
const checkTree = (root) => root.val === root.left.val + root.right.val

console.log(checkTree(tree))
