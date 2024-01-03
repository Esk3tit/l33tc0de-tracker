import { Problem } from "../types/problem";

const starterCodeSubtreeOfAnotherTree = `class Solution:
def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
`;

export const subtreeOfAnotherTree: Problem = {
    id: "subtree-of-another-tree",
    title: "572. Subtree of Another Tree",
    problemStatement: `
<p class='mt-3'>
Given the roots of two binary trees <code>root</code> and <code>subRoot</code>, return <code>true</code> if there is a subtree of <code>root</code> with the same structure and node values of <code>subRoot</code> and <code>false</code> otherwise.
</p>
<p class='mt-3'>
A subtree of a binary tree <code>tree</code> is a tree that consists of a node in <code>tree</code> and all of this node's descendants. The tree <code>tree</code> could also be considered as a subtree of itself.
</p>`,
    examples: [
        {
            id: 1,
            inputText: "root = [3,4,5,1,2], subRoot = [4,1,2]",
            outputText: "true",
            img: "https://assets.leetcode.com/uploads/2021/04/28/subtree1-tree.jpg"
        },
        {
            id: 2,
            inputText: "root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]",
            outputText: "false",
            img: "https://assets.leetcode.com/uploads/2021/04/28/subtree2-tree.jpg"
        },
    ],
    constraints: `<li class='mt-2'>
The number of nodes in the <code>root</code> tree is in the range <code>[1, 2000]</code>.
</li> <li class='mt-2'>
The number of nodes in the <code>subRoot</code> tree is in the range <code>[1, 1000]</code>.
</li>
<li class='mt-2'>
<code>-10<sup>4</sup> <= root.val <= 10<sup>4</sup></code>
</li>
<li class='mt-2'>
<code>-10<sup>4</sup> <= subRoot.val <= 10<sup>4</sup></code>
</li>`,
    starterCode: starterCodeSubtreeOfAnotherTree,
    order: 572
}