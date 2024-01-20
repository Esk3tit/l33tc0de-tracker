import { Problem } from "../types/problem";

const starterCodeNumberOfConnectedComponentsInAnUndirectedGraph = `class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
`;

export const numberOfConnectedComponentsInAnUndirectedGraph: Problem = {
    id: "number-of-connected-components-in-an-undirected-graph",
    title: "323. Number of Connected Components in an Undirected Graph",
    problemStatement: `
<p class='mt-3'>
You have a graph of <code>n</code> nodes. You are given an integer <code>n</code> and an array <code>edges</code> where <code>edges[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> indicates that there is an edge between <code>a<sub>i</sub></code> and <code>b<sub>i</sub></code> in the graph.
</p>
<p class='mt-3'>
Return <em>the number of connected components in the graph</em>.
</p>`,
    examples: [
        {
            id: 1,
            inputText: 'n = 5, edges = [[0,1],[1,2],[3,4]]',
            outputText: '2',
            img: "https://assets.leetcode.com/uploads/2021/03/14/graph1.jpg",
        },
        {
            id: 2,
            inputText: 'n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]',
            outputText: "1",
            img: "https://assets.leetcode.com/uploads/2021/03/14/graph2.jpg",
        },
    ],
    constraints: `<li class='mt-2'>
<code>1 <= n <= 2000</code>
</li> <li class='mt-2'>
<code>1 <= edges.length <= 5000</code>
</li>
<li class='mt-2'>
<code>edges[i].length == 2</code>
</li>
<li class='mt-2'>
<code>0 <= a<sub>i</sub>, b<sub>i</sub> < n</code>
</li>
<li class='mt-2'>
<code>a<sub>i</sub> != b<sub>i</sub></code>
</li>
<li class='mt-2'>
There are no repeated edges.
</li>`,
    starterCode: starterCodeNumberOfConnectedComponentsInAnUndirectedGraph,
    order: 323
}