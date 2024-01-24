import { Problem } from "../types/problem";

const starterCodeSpiralMatrix = `class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
`;

export const spiralMatrix: Problem = {
	id: "spiral-matrix",
	title: "54. Spiral Matrix",
	problemStatement: `
<p class='mt-3'>
Given an <code>m x n</code> <code>matrix</code>, return <em>all elements of the</em> <code>matrix</code> <em>in spiral order</em>.
</p>`,
	examples: [
		{
            id: 1,
            inputText: "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
            outputText: "[1,2,3,6,9,8,7,4,5]",
            img: "https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg"
        },
        {
            id: 2,
            inputText: "matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]",
            outputText: "[1,2,3,4,8,12,11,10,9,5,6,7]",
            img: "https://assets.leetcode.com/uploads/2020/11/13/spiral.jpg"
        },
	],
	constraints: `
<li class='mt-2'>
<code>m == matrix.length</code>
</li>
<li class='mt-2'>
<code>n == matrix[i].length</code>
</li>
<li class='mt-2'>
<code>1 <= m, n <= 10</code>
</li>
<li class='mt-2'>
<code>-100 <= matrix[i][j] <= 100</code>
</li>`,
	starterCode: starterCodeSpiralMatrix,
	order: 54
};
