import { Problem } from "../types/problem";

const starterCodeAlienDictionary = `class Solution:
    def alienOrder(self, words: List[str]) -> str:
`;

export const alienDictionary: Problem = {
    id: "alien-dictionary",
    title: "269. Alien Dictionary",
    problemStatement: `
<p class='mt-3'>
There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you.
</p>
<p class='mt-3'>
You are given a list of strings <code>words</code> from the alien language's dictionary, where the strings in <code>words</code> are <strong>sorted lexicographically</strong> by the rules of this new language.
</p>
<p class='mt-3'>
Return <em>a string of the unique letters in the new alien language sorted in <strong>lexicographically increasing order</strong> by the new language's rules. If there is no solution, return </em><code>""</code><em>. If there are multiple solutions, return any of them.</em>
</p>
<p class='mt-3'>
A string <code>s</code> is <strong>lexicographically smaller</strong> than a string <code>t</code> if at the first letter where they differ, the letter in <code>s</code> comes before the letter in <code>t</code> in the alien language. If the first <code>min(s.length, t.length)</code> letters are the same, then <code>s</code> is smaller if and only if <code>s.length < t.length</code>.
</p>`,
    examples: [
        {
            id: 1,
            inputText: 'words = ["wrt","wrf","er","ett","rftt"]',
            outputText: 'wertf',
        },
        {
            id: 2,
            inputText: 'words = ["z","x"]',
            outputText: 'zx',
        },
        {
            id: 3,
            inputText: 'words = ["z","x","z"]',
            outputText: '',
            explanation: 'The order is invalid, so return "".'
        },
    ],
    constraints: `<li class='mt-2'>
<code>1 <= words.length <= 100</code>
</li> <li class='mt-2'>
<code>1 <= words[i].length <= 100</code>
</li>
<li class='mt-2'>
<code>words[i]</code> consists of only lowercase English letters.
</li>`,
    starterCode: starterCodeAlienDictionary,
    order: 269
}