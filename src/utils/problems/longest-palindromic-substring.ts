import { Problem } from "../types/problem";

const starterCodeLongestPalindromicSubstring = `class Solution:
    def longestPalindrome(self, s: str) -> str:
`;

export const longestPalindromicSubstring: Problem = {
	id: "longest-palindromic-substring",
	title: "5. Longest Palindromic Substring",
	problemStatement: `
<p class='mt-3'>
Given a string <code>s</code>, return <em>the longest palindromic substring in</em> <code>s</code>.
</p>`,
	examples: [
		{
			id: 1,
			inputText: 's = "babad"',
			outputText: '"bab"',
			explanation: `"aba" is also a valid answer.`,
		},
		{
			id: 2,
			inputText: 's = "cbbd"',
			outputText: '"bb"',
		},
	],
	constraints: `<li class='mt-2'>
<code>1 <= s.length <= 1000</code>
</li> <li class='mt-2'>
<code>s</code> consist of only digits and English letters.
</li>`,
	starterCode: starterCodeLongestPalindromicSubstring,
	order: 5
};
