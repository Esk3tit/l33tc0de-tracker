import { Problem } from "../types/problem";

const starterCodeLinkedListCycle = `class Solution:
def hasCycle(self, head: ListNode) -> bool:
`;

export const linkedListCycle: Problem = {
    id: "linked-list-cycle",
    title: "141. Linked List Cycle",
    problemStatement: `
<p class='mt-3'>
Given <code>head</code>, the head of a linked list, determine if the linked list has a cycle in it.
</p>
<p class='mt-3'>
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the <code>next</code> pointer. Internally, <code>pos</code> is used to denote the index of the node that tail's <code>next</code> pointer is connected to. <strong>Note that <code>pos</code> is not passed as a parameter</strong>.
</p>
<p class='mt-3'>
Return <code>true</code> <em>if there is a cycle in the linked list</em>. Otherwise, return <code>false</code>.
</p>`,
    examples: [
        {
            id: 1,
            inputText: 'head = [3,2,0,-4], pos = 1',
            outputText: 'true',
            explanation: "There is a cycle in the linked list, where the tail connects to the <code>1<sup>st</sup></code> node (0-indexed).",
            img: "https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png"
        },
        {
            id: 2,
            inputText: 'head = [1,2], pos = 0',
            outputText: "true",
            explanation: "There is a cycle in the linked list, where the tail connects to the <code>0<sup>th</sup></code> node.",
            img: "https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png"
        },
        {
            id: 3,
            inputText: 'head = [1], pos = -1',
            outputText: "false",
            explanation: "There is no cycle in the linked list.",
            img: "https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png"
        },
    ],
    constraints: `<li class='mt-2'>
The number of the nodes in the list is in the range <code>[0, 10<sup>4</sup>]</code>.
</li> <li class='mt-2'>
<code>-10<sup>5</sup> <= Node.val <= 10<sup>5</sup></code>
</li>
<li class='mt-2'>
<code>pos</code> is <code>-1</code> or a valid index in the linked-list.
</li>`,
    starterCode: starterCodeLinkedListCycle,
    order: 141,
    followUp: 'Can you solve it using <code>O(1)</code> (i.e. constant) memory?'
}