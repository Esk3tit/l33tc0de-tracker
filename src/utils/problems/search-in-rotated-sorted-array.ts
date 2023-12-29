import { Problem } from "../types/problem";

const starterCodeSearchInRotatedSortedArray = `class Solution:
def search(self, nums: List[int], target: int) -> int:

`;

export const searchInRotatedSortedArray: Problem = {
    id: "search-in-rotated-sorted-array",
    title: "33. Search in Rotated Sorted Array",
    problemStatement: `<p class='mt-3'>
    There is an integer array <code>nums</code> sorted in ascending order (with <strong>distinct</strong> values).
  </p>
<p class='mt-3'>
Prior to being passed to your function, <code>nums</code> is <strong>possibly rotated</strong> at an unknown pivot index <code>k</code> (<code>0 <= k < nums.length</code>) such that the resulting array is <code>[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]</code> (<strong>0-indexed</strong>). For example, <code>[0,1,2,4,5,6,7]</code> might be rotated at pivot index <code>3</code> and become <code>[4,5,6,7,0,1,2]</code>.
</p>
<p class='mt-3'>
Given the array <code>nums</code> <strong>after</strong> the possible rotation and an integer <code>target</code>, return <em>the index of <code>target</code> if it is in <code>nums</code>, or <code>-1</code> if it is not in <code>nums</code></em>.
</p>
<p class='mt-3'>
You must write an algorithm with <code>O(log n)</code> runtime complexity.
</p>`,
    examples: [
        {
            id: 1,
            inputText: 'nums = [4,5,6,7,0,1,2], target = 0',
            outputText: "4",
        },
        {
            id: 2,
            inputText: 'nums = [4,5,6,7,0,1,2], target = 3',
            outputText: "-1",
        },
        {
            id: 3,
            inputText: 'nums = [1], target = 0',
            outputText: "-1",
        },
    ],
    constraints: `<li class='mt-2'>
<code>1 <= nums.length <= 5000</code>
</li> <li class='mt-2'>
<code>-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup></code>
</li>
<li class='mt-2'>
All values of <code>nums</code> are <strong>unique</strong>.
</li>
<li class='mt-2'>
<code>nums</code> is an ascending array that is possibly rotated.
</li>
<li class='mt-2'>
<code>-10<sup>4</sup> <= target <= 10<sup>4</sup></code>
</li>`,
    starterCode: starterCodeSearchInRotatedSortedArray,
    order: 33,
}