import { Problem } from "../types/problem";

const starterCodeRemoveNthNodeFromEndOfList = `class Solution:
def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
`;

export const removeNthNodeFromEndOfList: Problem = {
    id: "remove-nth-node-from-end-of-list",
    title: "19. Remove Nth Node From End of List",
    problemStatement: `
<p class='mt-3'>
Given the <code>head</code> of a linked list, remove the <code>n<sup>th</sup></code> node from the end of the list and return its head.
</p>`,
    examples: [
        {
            id: 1,
            inputText: 'head = [1,2,3,4,5], n = 2',
            outputText: '[1,2,3,5]',
            img: "https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg"
        },
        {
            id: 2,
            inputText: 'head = [1], n = 1',
            outputText: "[]",
        },
        {
            id: 3,
            inputText: 'head = [1,2], n = 1',
            outputText: "[1]",
        },
    ],
    constraints: `<li class='mt-2'>
The number of nodes in the list is <code>sz</code>.
</li> <li class='mt-2'>
<code>1 <= sz <= 30</code>
</li>
<li class='mt-2'>
<code>0 <= Node.val <= 100</code>
</li>
<li class='mt-2'>
<code>1 <= n <= sz</code>
</li>`,
    starterCode: starterCodeRemoveNthNodeFromEndOfList,
    order: 19,
    followUp: 'Could you do this in one pass?'
}