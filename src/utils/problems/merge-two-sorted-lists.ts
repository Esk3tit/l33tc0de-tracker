import { Problem } from "../types/problem";

const starterCodeMergeTwoSortedLists = `class Solution:
def mergeTwoLists(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]

`;

export const mergeTwoSortedLists: Problem = {
    id: "merge-two-sorted-lists",
    title: "21. Merge Two Sorted Lists",
    problemStatement: `
<p class='mt-3'>
You are given the heads of two sorted linked lists <code>list1</code> and <code>list2</code>.
</p>
<p class='mt-3'>
Merge the two lists into one <strong>sorted</strong> list. The list should be made by splicing together the nodes of the first two lists.
</p>
<p class='mt-3'>
Return <em>the head of the merged linked list</em>.
</p>`,
    examples: [
        {
            id: 1,
            inputText: 'list1 = [1,2,4], list2 = [1,3,4]',
            outputText: '[1,1,2,3,4,4]',
            img: "https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg"
        },
        {
            id: 2,
            inputText: 'list1 = [], list2 = []',
            outputText: "[]",
        },
        {
            id: 3,
            inputText: 'list1 = [], list2 = [0]',
            outputText: "[0]",
        },
    ],
    constraints: `<li class='mt-2'>
    The number of nodes in both lists is in the range <code>[0, 50]</code>.
</li> <li class='mt-2'>
    <code>-100 <= Node.val <= 100</code>
</li>
<li class='mt-2'>
    Both <code>list1</code> and <code>list2</code> are sorted in <strong>non-decreasing</strong> order.
    </li>`,
    starterCode: starterCodeMergeTwoSortedLists,
    order: 21,
}