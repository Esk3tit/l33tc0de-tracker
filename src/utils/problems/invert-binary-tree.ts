import { Problem } from "../types/problem";

const starterCodeInvertBinaryTree = `class Solution:
def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
`;

export const invertBinaryTree: Problem = {
    id: "invert-binary-tree",
    title: "226. Invert Binary Tree",
    problemStatement: `
<p class='mt-3'>
Given the <code>root</code> of a binary tree, invert the tree, and return <em>its root</em>.
</p>`,
    examples: [
        {
            id: 1,
            inputText: "root = [4,2,7,1,3,6,9]",
            outputText: "[4,7,2,9,6,3,1]",
            img: "https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg"
        },
        {
            id: 2,
            inputText: "root = [2,1,3]",
            outputText: "[2,3,1]",
            img: "https://assets.leetcode.com/uploads/2021/03/14/invert2-tree.jpg"
        },
        {
            id: 3,
            inputText: "root = []",
            outputText: "[]",
        },
    ],
    constraints: `<li class='mt-2'>
The number of nodes in the tree is in the range <code>[0, 100]</code>.
</li> <li class='mt-2'>
<code>-100 <= Node.val <= 100</code>
</li>`,
    starterCode: starterCodeInvertBinaryTree,
    order: 226
}