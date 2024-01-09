import { Problem } from "../types/problem";

const starterCodeWordSearch = `class Solution:
def exist(self, board: List[List[str]], word: str) -> bool:
`;

export const wordSearch: Problem = {
    id: "word-search",
    title: "79. Word Search",
    problemStatement: `
<p class='mt-3'>
Given an <code>m x n</code> grid of characters <code>board</code> and a string <code>word</code>, return <code>true</code> <em>if </em><code>word</code><em> exists in the grid</em>.
</p>
<p class='mt-3'>
The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
</p>`,
    examples: [
        {
            id: 1,
            inputText: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"',
            outputText: 'true',
            img: "https://assets.leetcode.com/uploads/2020/11/04/word2.jpg"
        },
        {
            id: 2,
            inputText: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"',
            outputText: "true",
            img: "https://assets.leetcode.com/uploads/2020/11/04/word-1.jpg"
        },
        {
            id: 3,
            inputText: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"',
            outputText: "false",
            img: "https://assets.leetcode.com/uploads/2020/10/15/word3.jpg"
        },
    ],
    constraints: `<li class='mt-2'>
<code>m == board.length</code>
</li> <li class='mt-2'>
<code>n = board[i].length</code>
</li>
<li class='mt-2'>
<code>1 <= m, n <= 6</code>
</li>
<li class='mt-2'>
<code>1 <= word.length <= 15</code>
</li>
<li class='mt-2'>
<code>board</code> and <code>word</code> consist of only lowercase and uppercase English letters.
</li>`,
    starterCode: starterCodeWordSearch,
    order: 79,
    followUp: 'Could you use search pruning to make your solution faster with a larger <code>board</code>?'
}