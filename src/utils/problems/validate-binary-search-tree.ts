import { Problem } from "../types/problem";

const starterCodeValidateBinarySearchTree = `class Solution:
def isValidBST(self, root: Optional[TreeNode]) -> bool:
`;

export const validateBinarySearchTree: Problem = {
    id: "validate-binary-search-tree",
    title: "98. Validate Binary Search Tree",
    problemStatement: `
<p class='mt-3'>
Given the <code>root</code> of a binary tree, <em>determine if it is a valid binary search tree (BST)</em>.
</p>
<p class='mt-3'>
A <strong>valid BST</strong> is defined as follows:
</p>
<ul class='mt-3 problem-list'>
<li class='mt-2'>
The left subtree of a node contains only nodes with keys <strong>less than</strong> the node's key.
</li> <li class='mt-2'>
The right subtree of a node contains only nodes with keys <strong>greater than</strong> the node's key.
</li> <li class='mt-2'>
Both the left and right subtrees must also be binary search trees.
</li>
</ul>`,
    examples: [
        {
            id: 1,
            inputText: "root = [2,1,3]",
            outputText: "true",
            img: "https://assets.leetcode.com/uploads/2020/12/01/tree1.jpg"
        },
        {
            id: 2,
            inputText: "root = [5,1,4,null,null,3,6]",
            outputText: "false",
            img: "https://assets.leetcode.com/uploads/2020/12/01/tree2.jpg",
            explanation: `The root node's value is 5 but its right child's value is 4.`
        },
    ],
    constraints: `<li class='mt-2'>
The number of nodes in the tree is in the range <code>[1, 10<sup>4</sup>]</code>.
</li> <li class='mt-2'>
<code>-2<sup>31</sup> <= Node.val <= 2<sup>31</sup> - 1</code>
</li>`,
    starterCode: starterCodeValidateBinarySearchTree,
    order: 98
}