import { Problem } from "../types/problem";

const starterCodePacificAtlanticWaterFlow = `class Solution:
def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
`;

export const pacificAtlanticWaterFlow: Problem = {
    id: "pacific-atlantic-water-flow",
    title: "417. Pacific Atlantic Water Flow",
    problemStatement: `
<p class='mt-3'>
There is an <code>m x n</code> rectangular island that borders both the <strong>Pacific Ocean</strong> and <strong>Atlantic Ocean</strong>. The <strong>Pacific Ocean</strong> touches the island's left and top edges, and the <strong>Atlantic Ocean</strong> touches the island's right and bottom edges.
</p>
<p class='mt-3'>
The island is partitioned into a grid of square cells. You are given an <code>m x n</code> integer matrix <code>heights</code> where <code>heights[r][c]</code> represents the <strong>height above sea level</strong> of the cell at coordinate <code>(r, c)</code>.
</p>
<p class='mt-3'>
The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, east, south, and west if the neighboring cell's height is <strong>less than or equal to</strong> the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.
</p>
<p class='mt-3'>
Return <em>a <strong>2D list</strong> of grid coordinates <code>result</code> where <code>result[i] = [r<sub>i</sub>, c<sub>i</sub>]</code> denotes that rain water can flow from cell <code>(r<sub>i</sub>, c<sub>i</sub>)</code> to <strong>both</strong> the Pacific and Atlantic oceans</em>.
</p>`,
    examples: [
        {
            id: 1,
            inputText: 'heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]',
            outputText: '[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]',
            img: "https://assets.leetcode.com/uploads/2021/06/08/waterflow-grid.jpg",
            explanation: `The following cells can flow to the Pacific and Atlantic oceans, as shown below:
[0,4]: [0,4] -> Pacific Ocean 
       [0,4] -> Atlantic Ocean
[1,3]: [1,3] -> [0,3] -> Pacific Ocean 
       [1,3] -> [1,4] -> Atlantic Ocean
[1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean 
       [1,4] -> Atlantic Ocean
[2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean 
       [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean
[3,0]: [3,0] -> Pacific Ocean 
       [3,0] -> [4,0] -> Atlantic Ocean
[3,1]: [3,1] -> [3,0] -> Pacific Ocean 
       [3,1] -> [4,1] -> Atlantic Ocean
[4,0]: [4,0] -> Pacific Ocean 
       [4,0] -> Atlantic Ocean
Note that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans.`
        },
        {
            id: 2,
            inputText: 'heights = [[1]]',
            outputText: "[[0,0]]",
            explanation: `The water can flow from the only cell to the Pacific and Atlantic oceans.`
        },
    ],
    constraints: `<li class='mt-2'>
<code>m == heights.length</code>
</li> <li class='mt-2'>
<code>n == heights[r].length</code>
</li>
<li class='mt-2'>
<code>1 <= m, n <= 200</code>
</li>
<li class='mt-2'>
<code>0 <= heights[r][c] <= 10<sup>5</sup></code>
</li>`,
    starterCode: starterCodePacificAtlanticWaterFlow,
    order: 417
}