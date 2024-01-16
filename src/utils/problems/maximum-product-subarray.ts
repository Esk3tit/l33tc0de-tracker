import { Problem } from "../types/problem";

const starterCodeMaximumProductSubarray = `class Solution:
    def maxProduct(self, nums: List[int]) -> int:
`;

export const maximumProductSubarray: Problem = {
	id: "maximum-product-subarray",
	title: "152. Maximum Product Subarray",
	problemStatement: `
<p class='mt-3'>
Given an integer array <code>nums</code>, find a subarray that has the largest product, and return <em>the product</em>.
</p>
<p class='mt-3'>
The test cases are generated so that the answer will fit in a <strong>32-bit</strong> integer.
</p>`,
	examples: [
		{
            id: 1,
            inputText: 'nums = [2,3,-2,4]',
            outputText: '6',
            explanation: `[2,3] has the largest product 6.`
        },
        {
            id: 2,
            inputText: 'nums = [-2,0,-1]',
            outputText: '0',
            explanation: `The result cannot be 2, because [-2,-1] is not a subarray.`
        },
	],
	constraints: `
<li class='mt-2'>
<code>1 <= nums.length <= 2 * 10<sup>4</sup></code>
</li>
<li class='mt-2'>
<code>-10 <= nums[i] <= 10</code>
</li>
<li class='mt-2'>
The product of any prefix or suffix of <code>nums</code> is <strong>guaranteed</strong> to fit in a <strong>32-bit</strong> integer.
</li>`,
	starterCode: starterCodeMaximumProductSubarray,
	order: 152
};
