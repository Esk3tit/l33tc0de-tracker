import { Problem } from "../types/problem";

const starterCodeKthSmallestElementInABST = `class Solution:
def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
`;

export const kthSmallestElementInABST: Problem = {
    id: "kth-smallest-element-in-a-bst",
    title: "230. Kth Smallest Element in a BST",
    problemStatement: `
<p class='mt-3'>
Given the <code>root</code> of a binary search tree, and an integer <code>k</code>, return <em>the</em> <code>k<sup>th</sup></code> <em>smallest value (<strong>1-indexed</strong>) of all the values of the nodes in the tree</em>.
</p>`,
    examples: [
        {
            id: 1,
            inputText: "root = [3,1,4,null,2], k = 1",
            outputText: "1",
            img: "https://assets.leetcode.com/uploads/2021/01/28/kthtree1.jpg"
        },
        {
            id: 2,
            inputText: "root = [5,3,6,2,4,null,null,1], k = 3",
            outputText: "3",
            img: "https://assets.leetcode.com/uploads/2021/01/28/kthtree2.jpg"
        },
    ],
    constraints: `<li class='mt-2'>
The number of nodes in the tree is <code>n</code>.
</li> <li class='mt-2'>
<code>1 <= k <= n <= 10<sup>4</sup></code>
</li>
<li class='mt-2'>
<code>0 <= Node.val <= 10<sup>4</sup></code>
</li>`,
    starterCode: starterCodeKthSmallestElementInABST,
    order: 230,
    followUp: "If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?"
}