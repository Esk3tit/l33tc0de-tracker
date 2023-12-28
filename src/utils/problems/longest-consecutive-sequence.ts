import { Problem } from "../types/problem";

const starterCodeLongestConsecutiveSequence = `class Solution:
def longestConsecutive(self, nums: List[int]) -> int:

`;

export const longestConsecutiveSequence: Problem = {
    id: "longest-consecutive-sequence",
    title: "128. Longest Consecutive Sequence",
    problemStatement: `<p class='mt-3'>
    Given an unsorted array of integers <code>nums</code>, return <em>the length of the longest consecutive elements sequence</em>.
  </p>
<p class='mt-3'>
You must write an algorithm that runs in <code>O(n)</code> time.
</p>`,
    examples: [
        {
            id: 1,
            inputText: 'nums = [100,4,200,1,3,2]',
            outputText: "4",
            explanation: 'The longest consecutive elements sequence is <code>[1, 2, 3, 4]</code>. Therefore its length is 4.'
        },
        {
            id: 2,
            inputText: 'nums = [0,3,7,2,5,8,4,6,0,1]',
            outputText: "9",
        },
    ],
    constraints: `<li class='mt-2'>
<code>0 <= nums.length <= 10<sup>5</sup></code>
</li> <li class='mt-2'>
<code>-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup></code>
</li>`,
    starterCode: starterCodeLongestConsecutiveSequence,
    order: 128,
}