import { Problem } from "../types/problem";

const starterCodeLowestCommonAncestorOfABinarySearchTree = `class Solution:
def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
`;

export const lowestCommonAncestorOfABinarySearchTree: Problem = {
    id: "lowest-common-ancestor-of-a-binary-search-tree",
    title: "235. Lowest Common Ancestor of a Binary Search Tree",
    problemStatement: `
<p class='mt-3'>
Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
</p>
<p class='mt-3'>
According to the <a class='text-blue-600' href="https://en.wikipedia.org/wiki/Lowest_common_ancestor" target="_blank">definition of LCA on Wikipedia</a>: "The lowest common ancestor is defined between two nodes <code>p</code> and <code>q</code> as the lowest node in <code>T</code> that has both <code>p</code> and <code>q</code> as descendants (where we allow <b>a node to be a descendant of itself</b>)."
</p>`,
    examples: [
        {
            id: 1,
            inputText: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8",
            outputText: "6",
            img: "https://assets.leetcode.com/uploads/2018/12/14/binarysearchtree_improved.png",
            explanation: `The LCA of nodes 2 and 8 is 6.`
        },
        {
            id: 2,
            inputText: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4",
            outputText: "2",
            img: "https://assets.leetcode.com/uploads/2018/12/14/binarysearchtree_improved.png",
            explanation: `The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.`
        },
        {
            id: 3,
            inputText: "root = [2,1], p = 2, q = 1",
            outputText: "2",
        },
    ],
    constraints: `<li class='mt-2'>
The number of nodes in the tree is in the range <code>[2, 10<sup>5</sup>]</code>.
</li> <li class='mt-2'>
<code>-10<sup>9</sup> <= Node.val <= 10<sup>9</sup></code>
</li>
<li class='mt-2'>
All <code>Node.val</code> are <b>unique</b>.
</li>
<li class='mt-2'>
<code>p != q</code>
</li>
<li class='mt-2'>
<code>p</code> and <code>q</code> will exist in the BST.
</li>`,
    starterCode: starterCodeLowestCommonAncestorOfABinarySearchTree,
    order: 235
}