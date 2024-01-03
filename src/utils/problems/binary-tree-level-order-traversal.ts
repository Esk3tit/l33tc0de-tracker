import { Problem } from "../types/problem";

const starterCodeBinaryTreeLevelOrderTraversal = `class Solution:
def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
`;

export const binaryTreeLevelOrderTraversal: Problem = {
    id: "binary-tree-level-order-traversal",
    title: "102. Binary Tree Level Order Traversal",
    problemStatement: `
<p class='mt-3'>
Given the <code>root</code> of a binary tree, return <em>the level order traversal of its nodes' values</em>. (i.e., from left to right, level by level).
</p>`,
    examples: [
        {
            id: 1,
            inputText: "root = [3,9,20,null,null,15,7]",
            outputText: "[[3],[9,20],[15,7]]",
            img: "https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg"
        },
        {
            id: 2,
            inputText: "root = [1]",
            outputText: "[[1]]",
        },
        {
            id: 3,
            inputText: "root = []",
            outputText: "[]",
        },
    ],
    constraints: `<li class='mt-2'>
The number of nodes in the tree is in the range <code>[0, 2000]</code>.
</li> <li class='mt-2'>
<code>-1000 <= Node.val <= 1000</code>
</li>`,
    starterCode: starterCodeBinaryTreeLevelOrderTraversal,
    order: 102
}