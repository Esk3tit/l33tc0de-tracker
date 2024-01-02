import { Problem } from "../types/problem";

const starterCodeLongestRepeatingCharacterReplacement = `class Solution:
def characterReplacement(self, s: str, k: int) -> int:
`;

export const longestRepeatingCharacterReplacement: Problem = {
    id: "longest-repeating-character-replacement",
    title: "424. Longest Repeating Character Replacement",
    problemStatement: `
<p class='mt-3'>
You are given a string <code>s</code> and an integer <code>k</code>. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most <code>k</code> times.
</p>
<p class='mt-3'>
Return <em>the length of the longest substring containing the same letter you can get after performing the above operations.</em>
</p>`,
    examples: [
        {
            id: 1,
            inputText: 's = "ABAB", k = 2',
            outputText: '4',
            explanation: `Replace the two 'A's with two 'B's or vice versa.`
        },
        {
            id: 2,
            inputText: 's = "AABABBA", k = 1',
            outputText: "4",
            explanation: `Replace the one 'A' in the middle with 'B' and form "AABBBBA".
<p class='no-lh mt-2'>The substring "BBBB" has the longest repeating letters, which is 4.</p>
<p class='no-lh'>There may exist other ways to achieve this answer too.</p>`
        },
    ],
    constraints: `<li class='mt-2'>
    <code>1 <= s.length <= 10<sup>5</sup></code>
</li> <li class='mt-2'>
    <code>s</code> consists of only uppercase English letters.
</li>
<li class='mt-2'>
    <code>0 <= k <= s.length</code>
    </li>`,
    starterCode: starterCodeLongestRepeatingCharacterReplacement,
    order: 424
}