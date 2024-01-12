import { Problem } from "../types/problem";

const starterCodeHouseRobberII = `class Solution:
    def rob(self, nums: List[int]) -> int:
`;

export const houseRobberII: Problem = {
	id: "house-robber-ii",
	title: "213. House Robber II",
	problemStatement: `
<p class='mt-3'>
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are <strong>arranged in a circle</strong>. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and <strong>it will automatically contact the police if two adjacent houses were broken into on the same night</strong>.
</p>
<p class='mt-3'>
Given an integer array <code>nums</code> representing the amount of money of each house, return <em>the maximum amount of money you can rob tonight <strong>without alerting the police</strong></em>.
</p>`,
	examples: [
		{
			id: 1,
			inputText: 'nums = [2,3,2]',
			outputText: '3',
			explanation: `You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.`,
		},
		{
			id: 2,
			inputText: 'nums = [1,2,3,1]',
			outputText: '4',
			explanation: `Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.`,
		},
        {
            id: 3,
            inputText: 'nums = [1,2,3]',
            outputText: '3',
        }
	],
	constraints: `<li class='mt-2'>
<code>1 <= nums.length <= 100</code>
</li>
<li class='mt-2'>
<code>0 <= nums[i] <= 1000</code>
</li>`,
	starterCode: starterCodeHouseRobberII,
	order: 213
};
