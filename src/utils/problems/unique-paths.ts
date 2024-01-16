import { Problem } from "../types/problem";

const starterCodeUniquePaths = `class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
`;

export const uniquePaths: Problem = {
	id: "unique-paths",
	title: "62. Unique Paths",
	problemStatement: `
<p class='mt-3'>
There is a robot on an <code>m x n</code> grid. The robot is initially located at the <strong>top-left corner</strong> (i.e., <code>grid[0][0]</code>). The robot tries to move to the <strong>bottom-right corner</strong> (i.e., <code>grid[m - 1][n - 1]</code>). The robot can only move either down or right at any point in time.
</p>
<p class='mt-3'>
Given the two integers <code>m</code> and <code>n</code>, return <em>the number of possible unique paths that the robot can take to reach the bottom-right corner</em>.
</p>
<p class='mt-3'>
The test cases are generated so that the answer will be less than or equal to <code>2 * 10<sup>9</sup></code>.`,
	examples: [
		{
            id: 1,
            inputText: 'm = 3, n = 7',
            outputText: '28',
            img: 'https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png',
        },
        {
            id: 2,
            inputText: 'm = 3, n = 2',
            outputText: '3',
            explanation: `From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down`,
        },
	],
	constraints: `
<li class='mt-2'>
<code>1 <= m, n <= 100</code>
</li>`,
	starterCode: starterCodeUniquePaths,
	order: 62
};
