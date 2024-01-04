import { Problem } from "../types/problem";

const starterCode3Sum = `class Solution:
def threeSum(self, nums: List[int]) -> List[List[int]]:
`;

export const _3sum: Problem = {
    id: "3sum",
    title: "15. 3Sum",
    problemStatement: `
<p class='mt-3'>
Given an integer array <code>nums</code>, return all the triplets <code>[nums[i], nums[j], nums[k]]</code> such that <code>i != j</code>, <code>i != k</code>, and <code>j != k</code>, and <code>nums[i] + nums[j] + nums[k] == 0</code>.
</p>
<p class='mt-3'>
Notice that the solution set must not contain duplicate triplets.
</p>`,
    examples: [
        {
            id: 1,
            inputText: 'nums = [-1,0,1,2,-1,-4]',
            outputText: '[[-1,-1,2],[-1,0,1]]',
            explanation: `<p class='no-lh mt-3'>nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.</p>
<p class='no-lh'>nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.</p>
<p class='no-lh'>nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.</p>
<p class='no-lh'>The distinct triplets are [-1,0,1] and [-1,-1,2].</p>
<p class='no-lh'>Notice that the order of the output and the order of the triplets does not matter.</p>`
        },
        {
            id: 2,
            inputText: 'nums = [0,1,1]',
            outputText: "[]",
            explanation: 'The only possible triplet does not sum up to 0.'
        },
        {
            id: 3,
            inputText: 'nums = [0,0,0]',
            outputText: "[[0,0,0]]",
            explanation: 'The only possible triplet sums up to 0.'
        },
    ],
    constraints: `<li class='mt-2'>
<code>3 <= nums.length <= 3000</code>
</li> <li class='mt-2'>
<code>-10<sup>5</sup> <= nums[i] <= 10<sup>5</sup></code>
</li>`,
    starterCode: starterCode3Sum,
    order: 15
}