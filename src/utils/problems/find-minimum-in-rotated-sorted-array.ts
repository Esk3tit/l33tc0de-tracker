import { Problem } from "../types/problem";

const starterCodeFindMinimumInRotatedSortedArray = `class Solution:
def findMin(self, nums: List[int]) -> int:
`;

export const findMinimumInRotatedSortedArray: Problem = {
    id: "find-minimum-in-rotated-sorted-array",
    title: "153. Find Minimum in Rotated Sorted Array",
    problemStatement: `
<p class='mt-3'>
Suppose an array of length <code>n</code> sorted in ascending order is <strong>rotated</strong> between <code>1</code> and <code>n</code> times. For example, the array <code>nums = [0,1,2,4,5,6,7]</code> might become:
</p>
<ul class='mt-3 problem-list'>
<li><code>[4,5,6,7,0,1,2]</code> if it was rotated <code>4</code> times.</li>
<li><code>[0,1,2,4,5,6,7]</code> if it was rotated <code>7</code> times.</li>
</ul>
<p class='mt-3'>
Notice that <strong>rotating</strong> an array <code>[a[0], a[1], a[2], ..., a[n-1]]</code> 1 time results in the array <code>[a[n-1], a[0], a[1], a[2], ..., a[n-2]]</code>.
</p>
<p class='mt-3'>
Given the sorted rotated array <code>nums</code> of <strong>unique</strong> elements, return <em>the minimum element of this array</em>.
</p>
<p class='mt-3'>
You must write an algorithm that runs in <code>O(log n) time.</code>
</p>`,
    examples: [
        {
            id: 1,
            inputText: 'nums = [3,4,5,1,2]',
            outputText: "1",
            explanation: `The original array was [1,2,3,4,5] rotated 3 times.`
        },
        {
            id: 2,
            inputText: 'nums = [4,5,6,7,0,1,2]',
            outputText: "0",
            explanation: `The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.`
        },
        {
            id: 3,
            inputText: 'nums = [11,13,15,17]',
            outputText: "11",
            explanation: `The original array was [11,13,15,17] and it was rotated 4 times.`
        },
    ],
    constraints: `<li class='mt-2'>
<code>n == nums.length</code>
</li> <li class='mt-2'>
<code>1 <= n <= 5000</code>
</li>
<li class='mt-2'>
<code>-5000 <= nums[i] <= 5000</code>
</li>
<li class='mt-2'>
All the integers of <code>nums</code> are <strong>unique</strong>.
</li>
<li class='mt-2'>
<code>nums</code> is sorted and rotated between <code>1</code> and <code>n</code> times.
</li>`,
    starterCode: starterCodeFindMinimumInRotatedSortedArray,
    order: 153,
}