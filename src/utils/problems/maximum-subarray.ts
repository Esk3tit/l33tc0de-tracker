import { Problem } from "../types/problem";

const starterCodeMaximumSubarray = `class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
`;

export const maximumSubarray: Problem = {
	id: "maximum-subarray",
	title: "53. Maximum Subarray",
	problemStatement: `
<p class='mt-3'>
Given an integer array <code>nums</code>, find the subarray with the largest sum, and return <em>its sum</em>.
</p>`,
	examples: [
		{
            id: 1,
            inputText: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
            outputText: '6',
            explanation: `The subarray [4,-1,2,1] has the largest sum 6.`
        },
        {
            id: 2,
            inputText: 'nums = [1]',
            outputText: '1',
            explanation: `The subarray [1] has the largest sum 1.`
        },
        {
            id: 3,
            inputText: 'nums = [5,4,-1,7,8]',
            outputText: '23',
            explanation: `The subarray [5,4,-1,7,8] has the largest sum 23.`
        },
	],
	constraints: `
<li class='mt-2'>
<code>1 <= nums.length <= 10<sup>5</sup></code>
</li>
<li class='mt-2'>
<code>-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup></code>
</li>`,
	starterCode: starterCodeMaximumSubarray,
	order: 53,
    followUp: `If you have figured out the <code>O(n)</code> solution, try coding another solution using the <strong>divide and conquer</strong> approach, which is more subtle.`
};
