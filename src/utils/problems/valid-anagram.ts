import { Problem } from "../types/problem";

const starterCodeValidAnagram = `class Solution:
def isAnagram(self, s: str, t: str) -> bool:
`;

export const validAnagram: Problem = {
    id: "valid-anagram",
    title: "242. Valid Anagram",
    problemStatement: `
<p class='mt-3'>
Given two strings <code>s</code> and <code>t</code>, return <code>true</code> <em>if <code>t</code> is an anagram of <code>s</code>, and <code>false</code> otherwise</em>.
</p>
<p class='mt-3'>
An <strong>Anagram</strong> is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
</p>`,
    examples: [
        {
            id: 1,
            inputText: 's = "anagram", t = "nagaram"',
            outputText: "true",
        },
        {
            id: 2,
            inputText: 's = "rat", t = "car"',
            outputText: "false",
        },
    ],
    constraints: `<li class='mt-2'>
<code>1 <= s.length, t.length <= 5 * 10<sup>4</sup></code>
</li> <li class='mt-2'>
<code>s</code> and <code>t</code> consist of lowercase English letters.
</li>`,
    starterCode: starterCodeValidAnagram,
    order: 242,
	followUp: "What if the inputs contain Unicode characters? How would you adapt your solution to such a case?"
}