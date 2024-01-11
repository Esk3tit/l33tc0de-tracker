import { Problem } from "../types/problem";

const starterCodeCloneGraph = `"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

from typing import Optional
class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
`;

export const cloneGraph: Problem = {
    id: "clone-graph",
    title: "133. Clone Graph",
    problemStatement: `
<p class='mt-3'>
Given a reference of a node in a <strong><a href="https://en.wikipedia.org/wiki/Connectivity_(graph_theory)#Connected_graph" target="_blank">connected</a></strong> undirected graph.
</p>
<p class='mt-3'>
Return a <strong><a href="https://en.wikipedia.org/wiki/Object_copying#Deep_copy" target="_blank">deep copy</a></strong> (clone) of the graph.
</p>
<p class='mt-3'>
Each node in the graph contains a value (<code>int</code>) and a list (<code>List[Node]</code>) of its neighbors.
</p>
<pre class='mt-3'>
class Node {
    public int val;
    public List&ltNode&gt neighbors;
}
</pre>
<p class='mt-6'>
<strong>Test case format:</strong>
</p>
<p class='mt-3'>
For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with <code>val == 1</code>, the second node with <code>val == 2</code>, and so on. The graph is represented in the test case using an adjacency list.
</p>
<p class='mt-3'>
<strong>An adjacency list</strong> is a collection of unordered <strong>lists</strong> used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.
</p>
<p class='mt-3'>
The given node will always be the first node with <code>val = 1</code>. You must return the <strong>copy of the given node</strong> as a reference to the cloned graph.
</p>`,
    examples: [
        {
            id: 1,
            inputText: 'adjList = [[2,4],[1,3],[2,4],[1,3]]',
            outputText: '[[2,4],[1,3],[2,4],[1,3]]',
            img: "https://assets.leetcode.com/uploads/2019/11/04/133_clone_graph_question.png",
            explanation: `There are 4 nodes in the graph.
1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).`
        },
        {
            id: 2,
            inputText: 'adjList = [[]]',
            outputText: "[[]]",
            img: "https://assets.leetcode.com/uploads/2020/01/07/graph.png",
            explanation: `Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.`
        },
        {
            id: 3,
            inputText: 'adjList = []',
            outputText: "[]",
            explanation: `This an empty graph, it does not have any nodes.`
        },
    ],
    constraints: `<li class='mt-2'>
The number of nodes in the graph is in the range <code>[0, 100]</code>.
</li> <li class='mt-2'>
<code>1 <= Node.val <= 100</code>
</li>
<li class='mt-2'>
<code>Node.val</code> is unique for each node.
</li>
<li class='mt-2'>
There are no repeated edges and no self-loops in the graph.
</li>
<li class='mt-2'>
The Graph is connected and all nodes can be visited starting from the given node.
</li>`,
    starterCode: starterCodeCloneGraph,
    order: 133
}