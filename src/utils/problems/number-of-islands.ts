import { Problem } from "../types/problem";

const starterCodeNumberOfIslands = `class Solution:
def numIslands(self, grid: List[List[str]]) -> int:
`;

export const numberOfIslands: Problem = {
    id: "number-of-islands",
    title: "200. Number of Islands",
    problemStatement: `
<p class='mt-3'>
Given an <code>m x n</code> 2D binary grid <code>grid</code> which represents a map of <code>'1'</code>s (land) and <code>'0'</code>s (water), return <em>the number of islands</em>.
</p>
<p class='mt-3'>
An <strong>island</strong> is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
</p>`,
    examples: [
        {
            id: 1,
            inputText: `grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]`,
            outputText: '1',
        },
        {
            id: 2,
            inputText: `grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]`,
            outputText: '3',
        },
    ],
    constraints: `<li class='mt-2'>
<code>m == grid.length</code>
</li>
<li class='mt-2'>
<code>n == grid[i].length</code>
</li>
<li class='mt-2'>
<code>1 <= m, n <= 300</code>
</li>
<li class='mt-2'>
<code>grid[i][j]</code> is <code>'0'</code> or <code>'1'</code>.
</li>`,
    starterCode: starterCodeNumberOfIslands,
    order: 200
}