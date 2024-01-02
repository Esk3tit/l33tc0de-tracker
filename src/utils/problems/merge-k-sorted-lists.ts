import { Problem } from "../types/problem";

const starterCodeMergeKSortedLists = `class Solution:
def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
`;

export const mergeKSortedLists: Problem = {
    id: "merge-k-sorted-lists",
    title: "23. Merge k Sorted Lists",
    problemStatement: `
<p class='mt-3'>
You are given an array of <code>k</code> linked-lists <code>lists</code>, each linked-list is sorted in ascending order.
</p>
<p class='mt-3'>
<em>Merge all the linked-lists into one sorted linked-list and return it</em>.
</p>`,
    examples: [
        {
            id: 1,
            inputText: 'lists = [[1,4,5],[1,3,4],[2,6]]',
            outputText: '[1,1,2,3,4,4,5,6]',
            explanation: `The linked-lists are:
<p class='no-lh mt-2'>[</p>
<p class='no-lh'>  1->4->5,</p>
<p class='no-lh'>  1->3->4,</p>
<p class='no-lh'>  2->6</p>
<p class='no-lh'>]</p>
<p class='no-lh mt-2'>merging them into one sorted list:</p>
<p class='no-lh'>1->1->2->3->4->4->5->6</p>`
        },
        {
            id: 2,
            inputText: 'lists = []',
            outputText: "[]",
        },
        {
            id: 3,
            inputText: 'lists = [[]]',
            outputText: "[]",
        },
    ],
    constraints: `<li class='mt-2'>
<code>k == lists.length</code>
</li> <li class='mt-2'>
<code>0 <= k <= 10<sup>4</sup></code>
</li>
<li class='mt-2'>
<code>0 <= lists[i].length <= 500</code>
</li>
<li class='mt-2'>
<code>-10<sup>4</sup> <= lists[i][j] <= 10<sup>4</sup></code>
</li>
<li class='mt-2'>
<code>lists[i]</code> is sorted in <strong>ascending order</strong>.
</li>
<li class='mt-2'>
The sum of <code>lists[i].length</code> won't exceed <code>10<sup>4</sup></code>.
</li>`,
    starterCode: starterCodeMergeKSortedLists,
    order: 23,
}