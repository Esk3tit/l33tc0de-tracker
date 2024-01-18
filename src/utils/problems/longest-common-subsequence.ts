import { Problem } from "../types/problem";

const starterCodeLongestCommonSubsequence = `class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
`;

export const longestCommonSubsequence: Problem = {
	id: "longest-common-subsequence",
	title: "1143. Longest Common Subsequence",
	problemStatement: `
<p class='mt-3'>
Given two strings <code>text1</code> and <code>text2</code>, return <em>the length of their longest <strong>common subsequence</strong></em>. If there is no <strong>common subsequence</strong>, return <code>0</code>.
</p>
<p class='mt-3'>
A <strong>subsequence</strong> of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
</p>
<ul class='mt-3 problem-list'>
<li>For example, <code>"ace"</code> is a subsequence of <code>"abcde"</code>.</li>
</ul>
<p class='mt-3'>
A <strong>common subsequence</strong> of two strings is a subsequence that is common to both strings.
</p>`,
	examples: [
		{
            id: 1,
            inputText: 'text1 = "abcde", text2 = "ace"',
            outputText: '3',
            explanation: `The longest common subsequence is "ace" and its length is 3.`
        },
        {
            id: 2,
            inputText: 'text1 = "abc", text2 = "abc"',
            outputText: '3',
            explanation: `The longest common subsequence is "abc" and its length is 3.`
        },
        {
            id: 3,
            inputText: 'text1 = "abc", text2 = "def"',
            outputText: '0',
            explanation: `There is no such common subsequence, so the result is 0.`
        },
	],
	constraints: `
<li class='mt-2'>
<code>1 <= text1.length, text2.length <= 1000</code>
</li>
<li class='mt-2'>
<code>text1</code> and <code>text2</code> consist of only lowercase English characters.
</li>`,
	starterCode: starterCodeLongestCommonSubsequence,
	order: 1143
};
