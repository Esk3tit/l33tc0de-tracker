import { Problem } from "../types/problem";

const starterCodeReverseLinkedList = `class Solution:
def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:

`;

export const reverseLinkedList: Problem = {
    id: "reverse-linked-list",
    title: "206. Reverse Linked List",
    problemStatement: `
    <p class='mt-3'>
    Given the <code>head</code> of a singly linked list, reverse the list, and return <em>the reversed list</em>.
</p>`,
    examples: [
        {
            id: 1,
            inputText: 'head = [1,2,3,4,5]',
            outputText: '[5,4,3,2,1]',
            img: "https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg"
        },
        {
            id: 2,
            inputText: 'head = [1,2]',
            outputText: "[2,1]",
            img: 'https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg'
        },
        {
            id: 3,
            inputText: 'head = []',
            outputText: "[]",
        },
    ],
    constraints: `<li class='mt-2'>
    The number of nodes in the list is the range <code>[0, 5000]</code>.
</li> <li class='mt-2'>
    <code>-5000 <= Node.val <= 5000</code>
</li>`,
    starterCode: starterCodeReverseLinkedList,
    order: 206,
    followUp: 'A linked list can be reversed either iteratively or recursively. Could you implement both?'
}