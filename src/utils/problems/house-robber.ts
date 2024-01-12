import { Problem } from "../types/problem";

const starterCodeHouseRobber = `class Solution:
    def rob(self, nums: List[int]) -> int:
`;

export const houseRobber: Problem = {
	id: "house-robber",
	title: "198. House Robber",
	problemStatement: `
<p class='mt-3'>
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and <strong>it will automatically contact the police if two adjacent houses were broken into on the same night</strong>.
</p>
<p class='mt-3'>
Given an integer array <code>nums</code> representing the amount of money of each house, return <em>the maximum amount of money you can rob tonight <strong>without alerting the police</strong></em>.
</p>`,
	examples: [
		{
			id: 1,
			inputText: 'nums = [1,2,3,1]',
			outputText: '4',
			explanation: `Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.`,
		},
		{
			id: 2,
			inputText: 'nums = [2,7,9,3,1]',
			outputText: '12',
			explanation: `Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.`,
		},
	],
	constraints: `<li class='mt-2'>
<code>1 <= nums.length <= 100</code>
</li>
<li class='mt-2'>
<code>0 <= nums[i] <= 400</code>
</li>`,
	starterCode: starterCodeHouseRobber,
	order: 198
};
