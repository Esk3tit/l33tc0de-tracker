import { Problem } from "../types/problem";

const starterCodeClimbingStairs = `class Solution:
    def climbStairs(self, n: int) -> int:
`;

export const climbingStairs: Problem = {
	id: "climbing-stairs",
	title: "70. Climbing Stairs",
	problemStatement: `
<p class='mt-3'>
You are climbing a staircase. It takes <code>n</code> steps to reach the top.
</p>
<p class='mt-3'>
Each time you can either climb <code>1</code> or <code>2</code> steps. In how many distinct ways can you climb to the top?
</p>`,
	examples: [
		{
			id: 1,
			inputText: 'n = 2',
			outputText: '2',
			explanation: `There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps`,
		},
		{
			id: 2,
			inputText: 'n = 3',
			outputText: '3',
			explanation: `There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step`,
		},
	],
	constraints: `<li class='mt-2'>
<code>1 <= n <= 45</code>
</li>`,
	starterCode: starterCodeClimbingStairs,
	order: 70
};
