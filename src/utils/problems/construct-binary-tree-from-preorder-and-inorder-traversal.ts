import { Problem } from "../types/problem";

const starterCodeConstructBinaryTreeFromPreorderAndInorderTraversal = `class Solution:
def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
`;

export const constructBinaryTreeFromPreorderAndInorderTraversal: Problem = {
    id: "construct-binary-tree-from-preorder-and-inorder-traversal",
    title: "105. Construct Binary Tree from Preorder and Inorder Traversal",
    problemStatement: `
<p class='mt-3'>
Given two integer arrays <code>preorder</code> and <code>inorder</code> where <code>preorder</code> is the preorder traversal of a binary tree and <code>inorder</code> is the inorder traversal of the same tree, construct and return <em>the binary tree</em>.
</p>`,
    examples: [
        {
            id: 1,
            inputText: 'preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]',
            outputText: '[3,9,20,null,null,15,7]',
            img: 'https://assets.leetcode.com/uploads/2021/02/19/tree.jpg'
        },
        {
            id: 2,
            inputText: 'preorder = [-1], inorder = [-1]',
            outputText: '[-1]',
        },
    ],
    constraints: `<li class='mt-2'>
<code>1 <= preorder.length <= 3000</code>
</li> <li class='mt-2'>
<code>inorder.length == preorder.length</code>
</li>
<li class='mt-2'>
<code>-3000 <= preorder[i], inorder[i] <= 3000</code>
</li>
<li class='mt-2'>
<code>preorder</code> and <code>inorder</code> consist of <strong>unique</strong> values.
</li>
<li class='mt-2'>
Each value of <code>inorder</code> also appears in <code>preorder</code>.
</li>
<li class='mt-2'>
<code>preorder</code> is <strong>guaranteed</strong> to be the preorder traversal of the tree.
</li>
<li class='mt-2'>
<code>inorder</code> is <strong>guaranteed</strong> to be the inorder traversal of the tree.
</li>`,
    starterCode: starterCodeConstructBinaryTreeFromPreorderAndInorderTraversal,
    order: 105
}