import { Problem } from "../types/problem";

const starterCodeSetMatrixZeroes = `class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
`;

export const setMatrixZeroes: Problem = {
	id: "set-matrix-zeroes",
	title: "73. Set Matrix Zeroes",
	problemStatement: `
<p class='mt-3'>
Given an <code>m x n</code> integer matrix <code>matrix</code>, if an element is <code>0</code>, set its entire row and column to <code>0</code>'s.
</p>
<p class='mt-3'>
You must do it <strong>in place</strong>.
</p>`,
	examples: [
		{
            id: 1,
            inputText: "matrix = [[1,1,1],[1,0,1],[1,1,1]]",
            outputText: "[[1,0,1],[0,0,0],[1,0,1]]",
            img: "https://assets.leetcode.com/uploads/2020/08/17/mat1.jpg"
        },
        {
            id: 2,
            inputText: "matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]",
            outputText: "[[0,0,0,0],[0,4,5,0],[0,3,1,0]]",
            img: "https://assets.leetcode.com/uploads/2020/08/17/mat2.jpg"
        },
	],
	constraints: `
<li class='mt-2'>
<code>m == matrix.length</code>
</li>
<li class='mt-2'>
<code>n == matrix[0].length</code>
</li>
<li class='mt-2'>
<code>1 <= m, n <= 200</code>
</li>
<li class='mt-2'>
<code>-2<sup>31</sup> <= matrix[i][j] <= 2<sup>31</sup> - 1</code>
</li>`,
	starterCode: starterCodeSetMatrixZeroes,
	order: 73,
    followUp: `
<ul class='mt-3 problem-list'>
<li>A straightforward solution using <code>O(mn)</code> space is probably a bad idea.</li>
<li>A simple improvement uses <code>O(m + n)</code> space, but still not the best solution.</li>
<li>Could you devise a constant space solution?</li>
</ul>`
};
