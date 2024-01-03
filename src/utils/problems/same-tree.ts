import { Problem } from "../types/problem";

const starterCodeSameTree = `class Solution:
def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
`;

export const sameTree: Problem = {
    id: "same-tree",
    title: "100. Same Tree",
    problemStatement: `
<p class='mt-3'>
Given the roots of two binary trees <code>p</code> and <code>q</code>, write a function to check if they are the same or not.
</p>
<p class='mt-3'>
Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
</p>`,
    examples: [
        {
            id: 1,
            inputText: "p = [1,2,3], q = [1,2,3]",
            outputText: "true",
            img: "https://assets.leetcode.com/uploads/2020/12/20/ex1.jpg"
        },
        {
            id: 2,
            inputText: "p = [1,2], q = [1,null,2]",
            outputText: "false",
            img: "https://assets.leetcode.com/uploads/2020/12/20/ex2.jpg"
        },
        {
            id: 3,
            inputText: "p = [1,2,1], q = [1,1,2]",
            outputText: "false",
            img: "https://assets.leetcode.com/uploads/2020/12/20/ex3.jpg"
        },
    ],
    constraints: `<li class='mt-2'>
The number of nodes in both trees is in the range <code>[0, 100]</code>.
</li> <li class='mt-2'>
<code>-10<sup>4</sup> <= Node.val <= 10<sup>4</sup></code>
</li>`,
    starterCode: starterCodeSameTree,
    order: 100
}