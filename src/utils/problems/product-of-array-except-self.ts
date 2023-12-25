import { Problem } from "../types/problem";

const starterCodeProductOfArrayExceptSelf = `class Solution:
def productExceptSelf(self, nums: List[int]) -> List[int]:

`;

export const productOfArrayExceptSelf: Problem = {
    id: "product-of-array-except-self",
    title: "238. Product of Array Except Self",
    problemStatement: `<p class='mt-3'>
    Given an integer array <code>nums</code>, return <em>an array <code>answer</code> such that <code>answer[i]</code> is equal to the product of all the elements of <code>nums</code> except <code>nums[i]</code></em>.
  </p>
  <p class='mt-3'>
  The product of any prefix or suffix of <code>nums</code> is <strong>guaranteed</strong> to fit in a <strong>32-bit</strong> integer.
  </p>
  <p class='mt-3'>
  You must write an algorithm that runs in <code>O(n)</code> time and without using the division operation.
  </p>`,
    examples: [
        {
            id: 1,
            inputText: 'nums = [1,2,3,4]',
            outputText: '[24,12,8,6]',
        },
        {
            id: 2,
            inputText: 'nums = [-1,1,0,-3,3]',
            outputText: '[0,0,9,0,0]',
        },
    ],
    constraints: `<li class='mt-2'>
<code>2 <= nums.length <= 10^5</code>
</li>
<li class='mt-2'>
<code>-30 <= nums[i] <= 30</code>
</li>
<li class='mt-2'>
The product of any prefix or suffix of <code>nums</code> is <strong>guaranteed</strong> to fit in a <strong>32-bit</strong> integer.
</li>`,
    starterCode: starterCodeProductOfArrayExceptSelf,
    order: 238,
    followUp: "Can you solve the problem in <code>O(1)</code> extra space complexity? (The output array <strong>does not</strong> count as extra space for space complexity analysis.)"
}