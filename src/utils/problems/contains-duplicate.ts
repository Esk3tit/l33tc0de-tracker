import { Problem } from "../types/problem";

const starterCodeContainsDuplicate = `class Solution:
def containsDuplicate(self, nums: List[int]) -> bool:
`;

export const containsDuplicate: Problem = {
    id: "contains-duplicate",
    title: "217. Contains Duplicate",
    problemStatement: `
<p class='mt-3'>
Given an integer array <code>nums</code>, return
<code>true</code> if any value appears <strong>at least twice</strong> in the array,
and return <code>false</code> if every element is distinct.
</p>`,
    examples: [
        {
            id: 1,
            inputText: "nums = [1,2,3,1]",
            outputText: "true",
        },
        {
            id: 2,
            inputText: "nums = [1,2,3,4]",
            outputText: "false",
        },
        {
            id: 3,
            inputText: "nums = [1,1,1,3,3,4,3,2,4,2]",
            outputText: "true",
        },
    ],
    constraints: `<li class='mt-2'>
<code>1 <= nums.length <= 10<sup>5</sup></code>
</li> <li class='mt-2'>
<code>-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup></code>
</li>`,
    starterCode: starterCodeContainsDuplicate,
    order: 217
}