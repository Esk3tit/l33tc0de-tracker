import { Problem } from "../types/problem";

const starterCodeLongestIncreasingSubsequence = `class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
`;

export const longestIncreasingSubsequence: Problem = {
	id: "longest-increasing-subsequence",
	title: "300. Longest Increasing Subsequence",
	problemStatement: `
<p class='mt-3'>
Given an integer array <code>nums</code>, return <em>the length of the longest <strong>strictly increasing subsequence</strong></em>.
</p>`,
	examples: [
		{
            id: 1,
            inputText: 'nums = [10,9,2,5,3,7,101,18]',
            outputText: '4',
            explanation: `The longest increasing subsequence is [2,3,7,101], therefore the length is 4.`
        },
        {
            id: 2,
            inputText: 'nums = [0,1,0,3,2,3]',
            outputText: '4',
        },
        {
            id: 3,
            inputText: 'nums = [7,7,7,7,7,7,7]',
            outputText: '1',
        },
	],
	constraints: `
<li class='mt-2'>
<code>1 <= nums.length <= 2500</code>
</li>
<li class='mt-2'>
<code>-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup></code>
</li>`,
	starterCode: starterCodeLongestIncreasingSubsequence,
	order: 300,
    followUp: `Can you come up with an algorithm that runs in <code>O(n log(n))</code> time complexity?`
};
