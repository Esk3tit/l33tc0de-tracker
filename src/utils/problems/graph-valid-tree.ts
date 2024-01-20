import { Problem } from "../types/problem";

const starterCodeGraphValidTree = `class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
`;

export const graphValidTree: Problem = {
    id: "graph-valid-tree",
    title: "261. Graph Valid Tree",
    problemStatement: `
<p class='mt-3'>
You have a graph of <code>n</code> nodes labeled from <code>0</code> to <code>n - 1</code>. You are given an integer <code>n</code> and a list of <code>edges</code> where <code>edges[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> indicates that there is an undirected edge between nodes <code>a<sub>i</sub></code> and <code>b<sub>i</sub></code> in the graph.
</p>
<p class='mt-3'>
Return <code>true</code> <em>if the edges of the given graph make up a valid tree, and</em> <code>false</code> <em>otherwise</em>.
</p>`,
    examples: [
        {
            id: 1,
            inputText: 'n = 5, and edges = [[0,1],[0,2],[0,3],[1,4]]',
            outputText: 'true',
            img: "https://assets.leetcode.com/uploads/2021/03/12/tree1-graph.jpg",
        },
        {
            id: 2,
            inputText: 'n = 5, and edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]',
            outputText: "false",
            img: "https://assets.leetcode.com/uploads/2021/03/12/tree2-graph.jpg",
        },
    ],
    constraints: `<li class='mt-2'>
<code>1 <= n <= 2000</code>
</li> <li class='mt-2'>
<code>0 <= edges.length <= 5000</code>
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
There are no self-loops or repeated edges.
</li>`,
    starterCode: starterCodeGraphValidTree,
    order: 261
}