import { Problem } from "../types/problem";

const starterCodeBinaryTreeMaximumPathSum = `class Solution:
def maxPathSum(self, root: Optional[TreeNode]) -> int:
`;

export const binaryTreeMaximumPathSum: Problem = {
    id: "binary-tree-maximum-path-sum",
    title: "124. Binary Tree Maximum Path Sum",
    problemStatement: `
<p class='mt-3'>
A <strong>path</strong> in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence <strong>at most once</strong>. Note that the path does not need to pass through the root.
</p>
<p class='mt-3'>
The <strong>path sum</strong> of a path is the sum of the node's values in the path.
</p>
<p class='mt-3'>
Given the <code>root</code> of a binary tree, return <em>the maximum <strong>path sum</strong> of any <strong>non-empty</strong> path</em>.
</p>`,
    examples: [
        {
            id: 1,
            inputText: 'root = [1,2,3]',
            outputText: '6',
            img: 'https://assets.leetcode.com/uploads/2020/10/13/exx1.jpg',
            explanation: `The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.`
        },
        {
            id: 2,
            inputText: 'root = [-10,9,20,null,null,15,7]',
            outputText: '42',
            img: 'https://assets.leetcode.com/uploads/2020/10/13/exx2.jpg',
            explanation: `The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.`
        },
    ],
    constraints: `<li class='mt-2'>
The number of nodes in the tree is in the range <code>[1, 3 * 10<sup>4</sup>]</code>.
</li> <li class='mt-2'>
<code>-1000 <= Node.val <= 1000</code>
</li>`,
    starterCode: starterCodeBinaryTreeMaximumPathSum,
    order: 124
}