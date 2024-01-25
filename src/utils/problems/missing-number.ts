import { Problem } from "../types/problem";

const starterCodeMissingNumber = `class Solution:
    def missingNumber(self, nums: List[int]) -> int:
`;

export const missingNumber: Problem = {
	id: "missing-number",
	title: "268. Missing Number",
	problemStatement: `
<p class='mt-3'>
Given an array <code>nums</code> containing <code>n</code> distinct numbers in the range <code>[0, n]</code>, return <em>the only number in the range that is missing from the array.</em>
</p>`,
	examples: [
		{
            id: 1,
            inputText: "nums = [3,0,1]",
            outputText: "2",
            explanation: `n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.`
        },
        {
            id: 2,
            inputText: "nums = [0,1]",
            outputText: "2",
            explanation: `n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.`
        },
        {
            id: 3,
            inputText: "nums = [9,6,4,2,3,5,7,0,1]",
            outputText: "8",
            explanation: `n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.`
        },
	],
	constraints: `
<li class='mt-2'>
<code>n == nums.length</code>
</li>
<li class='mt-2'>
<code>1 <= n <= 10<sup>4</sup></code>
</li>
<li class='mt-2'>
<code>0 <= nums[i] <= n</code>
</li>
<li class='mt-2'>
All the numbers of <code>nums</code> are <strong>unique</strong>.
</li>`,
	starterCode: starterCodeMissingNumber,
	order: 268,
    followUp: `Could you implement a solution using only <code>O(1)</code> extra space complexity and <code>O(n)</code> runtime complexity?`
};
