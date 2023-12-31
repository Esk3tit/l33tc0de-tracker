import { Problem } from "../types/problem";

const starterCodeReorderList = `class Solution:
def reorderList(self, head: Optional[ListNode]) -> None:

`;

export const reorderList: Problem = {
    id: "reorder-list",
    title: "143. Reorder List",
    problemStatement: `
<p class='mt-3'>
You are given the <code>head</code> of a singly linked-list. The list can be represented as:
</p>
<p class='mt-3'>
<code>L<sub>0</sub> → L<sub>1</sub> → … → L<sub>n - 1</sub> → L<sub>n</sub></code>
</p>
<p class='mt-3'>
<em>Reorder the list to be on the following form</em>:
</p>
<p class='mt-3'>
<code>L<sub>0</sub> → L<sub>n</sub> → L<sub>1</sub> → L<sub>n - 1</sub> → L<sub>2</sub> → L<sub>n - 2</sub> → …</code>
</p>
<p class='mt-3'>
You may <strong>not</strong> modify the values in the list's nodes. Only nodes themselves may be changed.
</p>`,
    examples: [
        {
            id: 1,
            inputText: 'head = [1,2,3,4]',
            outputText: '[1,4,2,3]',
            img: "https://assets.leetcode.com/uploads/2021/03/04/reorder1linked-list.jpg"
        },
        {
            id: 2,
            inputText: 'head = [1,2,3,4,5]',
            outputText: "[1,5,2,4,3]",
            img: 'https://assets.leetcode.com/uploads/2021/03/09/reorder2-linked-list.jpg'
        },
    ],
    constraints: `<li class='mt-2'>
    The number of nodes in the list is in the range <code>[1, 5 * 10<sup>4</sup>]</code>.
</li> <li class='mt-2'>
    <code>1 <= Node.val <= 1000</code>
</li>`,
    starterCode: starterCodeReorderList,
    order: 143,
}