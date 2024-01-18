import { Problem } from "../types/problem";

const starterCodeJumpGame = `class Solution:
    def canJump(self, nums: List[int]) -> bool:
`;

export const jumpGame: Problem = {
	id: "jump-game",
	title: "55. Jump Game",
	problemStatement: `
<p class='mt-3'>
You are given an integer array <code>nums</code>. You are initially positioned at the array's <strong>first index</strong>, and each element in the array represents your maximum jump length at that position.
</p>
<p class='mt-3'>
Return <code>true</code> <em>if you can reach the last index, or </em><code>false</code><em> otherwise</em>.
</p>`,
	examples: [
		{
            id: 1,
            inputText: 'nums = [2,3,1,1,4]',
            outputText: 'true',
            explanation: `Jump 1 step from index 0 to 1, then 3 steps to the last index.`
        },
        {
            id: 2,
            inputText: 'nums = [3,2,1,0,4]',
            outputText: 'false',
            explanation: `You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.`
        },
	],
	constraints: `
<li class='mt-2'>
<code>1 <= nums.length <= 10<sup>4</sup></code>
</li>
<li class='mt-2'>
<code>0 <= nums[i] <= 10<sup>5</sup></code>
</li>`,
	starterCode: starterCodeJumpGame,
	order: 55
};
