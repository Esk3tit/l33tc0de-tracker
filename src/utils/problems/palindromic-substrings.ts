import { Problem } from "../types/problem";

const starterCodePalindromicSubstrings = `class Solution:
    def countSubstrings(self, s: str) -> int:
`;

export const palindromicSubstrings: Problem = {
	id: "palindromic-substrings",
	title: "647. Palindromic Substrings",
	problemStatement: `
<p class='mt-3'>
Given a string <code>s</code>, return <em>the number of <strong>palindromic substrings</strong> in it</em>.
</p>
<p class='mt-3'>
A string is a <strong>palindrome</strong> when it reads the same backward as forward.
</p>
<p class='mt-3'>
A <strong>substring</strong> is a contiguous sequence of characters within the string.
</p>`,
	examples: [
		{
			id: 1,
			inputText: 's = "abc"',
			outputText: '3',
			explanation: 'Three palindromic strings: "a", "b", "c".',
		},
		{
			id: 2,
			inputText: 's = "aaa"',
			outputText: '6',
			explanation: 'Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".',
		},
	],
	constraints: `<li class='mt-2'>
<code>1 <= s.length <= 1000</code>
</li> <li class='mt-2'>
<code>s</code> consists of lowercase English letters.
</li>`,
	starterCode: starterCodePalindromicSubstrings,
	order: 647
};
