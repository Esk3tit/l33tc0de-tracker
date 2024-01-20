import { Problem } from "../types/problem";

const starterCodeRotateImage = `class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
`;

export const rotateImage: Problem = {
	id: "rotate-image",
	title: "48. Rotate Image",
	problemStatement: `
<p class='mt-3'>
You are given an <code>n x n</code> 2D <code>matrix</code> representing an image, rotate the image by <strong>90</strong> degrees (clockwise).
</p>
<p class='mt-3'>
You have to rotate the image <strong>in-place</strong>, which means you have to modify the input 2D matrix directly. <strong>DO NOT</strong> allocate another 2D matrix and do the rotation.
</p>`,
	examples: [
		{
            id: 1,
            inputText: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]',
            outputText: '[[7,4,1],[8,5,2],[9,6,3]]',
            img: 'https://assets.leetcode.com/uploads/2020/08/28/mat1.jpg',
        },
        {
            id: 2,
            inputText: 'matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]',
            outputText: '[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]',
            img: 'https://assets.leetcode.com/uploads/2020/08/28/mat2.jpg',
        },
	],
	constraints: `
<li class='mt-2'>
<code>n == matrix.length == matrix[i].length</code>
</li>
<li class='mt-2'>
<code>1 <= n <= 20</code>
</li>
<li class='mt-2'>
<code>-1000 <= matrix[i][j] <= 1000</code>
</li>`,
	starterCode: starterCodeRotateImage,
	order: 48
};
