import { Problem } from "../types/problem";

const starterCodeMinimumWindowSubstring = `class Solution:
def minWindow(self, s: str, t: str) -> str:
`;

export const minimumWindowSubstring: Problem = {
    id: "minimum-window-substring",
    title: "76. Minimum Window Substring",
    problemStatement: `
<p class='mt-3'>
Given two strings <code>s</code> and <code>t</code> of lengths <code>m</code> and <code>n</code> respectively, return <em>the <strong>minimum window substring</strong> of <code>s</code> such that every character in <code>t</code> (<strong>including duplicates</strong>) is included in the window</em>. If there is no such substring, return the empty string <code>""</code>.
</p>
<p class='mt-3'>
    The testcases will be generated such that the answer is <strong>unique</strong>.
    </p>`,
    examples: [
        {
            id: 1,
            inputText: 's = "ADOBECODEBANC", t = "ABC"',
            outputText: '"BANC"',
            explanation: `The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.`
        },
        {
            id: 2,
            inputText: 's = "a", t = "a"',
            outputText: '"a"',
            explanation: 'The entire string s is the minimum window.'
        },
        {
            id: 3,
            inputText: 's = "a", t = "aa"',
            outputText: '""',
            explanation: `Both 'a's from t must be included in the window.
<p class='no-lh mt-2'>Since the largest window of s only has one 'a', return empty string.</p>`
        },
    ],
    constraints: `<li class='mt-2'>
<code>m == s.length</code>
</li> <li class='mt-2'>
<code>n == t.length</code>
</li>
<li class='mt-2'>
<code>1 <= m, n <= 10<sup>5</sup></code>
</li>
<li class='mt-2'>
<code>s</code> and <code>t</code> consist of uppercase and lowercase English letters.
</li>`,
    starterCode: starterCodeMinimumWindowSubstring,
    order: 76,
    followUp: `Could you find an algorithm that runs in <code>O(m + n)</code> time?`
}