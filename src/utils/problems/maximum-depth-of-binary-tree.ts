import { Problem } from "../types/problem";

const starterCodeMaximumDepthOfBinaryTree = `class Solution:
def maxDepth(self, root: Optional[TreeNode]) -> int:
`;

export const maximumDepthOfBinaryTree: Problem = {
    id: "maximum-depth-of-binary-tree",
    title: "104. Maximum Depth of Binary Tree",
    problemStatement: `
<p class='mt-3'>
Given the <code>root</code> of a binary tree, return <em>its maximum depth</em>.
</p>
<p class='mt-3'>
A binary tree's <strong>maximum depth</strong> is the number of nodes along the longest path from the root node down to the farthest leaf node.
</p>`,
    examples: [
        {
            id: 1,
            inputText: "root = [3,9,20,null,null,15,7]",
            outputText: "3",
            img: "https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg"
        },
        {
            id: 2,
            inputText: "root = [1,null,2]",
            outputText: "2",
        },
    ],
    constraints: `<li class='mt-2'>
The number of nodes in the tree is in the range <code>[0, 10<sup>4</sup>]</code>.
</li> <li class='mt-2'>
<code>-100 <= Node.val <= 100</code>
</li>`,
    starterCode: starterCodeMaximumDepthOfBinaryTree,
    order: 104
}