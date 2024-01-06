import { Problem } from "../types/problem";

const starterCodeWordSearchII = `class Solution:
def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
`;

export const wordSearchII: Problem = {
    id: "word-search-ii",
    title: "212. Word Search II",
    problemStatement: `
<p class='mt-3'>
Given an <code>m x n</code> <code>board</code> of characters and a list of strings <code>words</code>, return <em>all words on the board</em>.
</p>
<p class='mt-3'>
Each word must be constructed from letters of sequentially adjacent cells, where <strong>adjacent cells</strong> are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.
</p>`,
    examples: [
        {
            id: 1,
            inputText: 'board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]',
            outputText: '["eat","oath"]',
            img: "https://assets.leetcode.com/uploads/2020/11/07/search1.jpg"
        },
        {
            id: 2,
            inputText: 'board = [["a","b"],["c","d"]], words = ["abcb"]',
            outputText: "[]",
            img: "https://assets.leetcode.com/uploads/2020/11/07/search2.jpg"
        },
    ],
    constraints: `<li class='mt-2'>
<code>m == board.length</code>
</li> <li class='mt-2'>
<code>n == board[i].length</code>
</li>
<li class='mt-2'>
<code>1 <= m, n <= 12</code>
</li>
<li class='mt-2'>
<code>board[i][j]</code> is a lowercase English letter.
</li>
<li class='mt-2'>
<code>1 <= words.length <= 3 * 10<sup>4</sup></code>
</li>
<li class='mt-2'>
<code>1 <= words[i].length <= 10</code>
</li>
<li class='mt-2'>
<code>words[i]</code> consists of lowercase English letters.
</li>
<li class='mt-2'>
All the strings of <code>words</code> are unique.
</li>`,
    starterCode: starterCodeWordSearchII,
    order: 212
}