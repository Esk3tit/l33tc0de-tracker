import { Problem } from "../types/problem";

const starterCodeWordBreak = `class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
`;

export const wordBreak: Problem = {
	id: "word-break",
	title: "139. Word Break",
	problemStatement: `
<p class='mt-3'>
Given a string <code>s</code> and a dictionary of strings <code>wordDict</code>, return <code>true</code> if <code>s</code> can be segmented into a space-separated sequence of one or more dictionary words.
</p>
<p class='mt-3'>
<strong>Note</strong> that the same word in the dictionary may be reused multiple times in the segmentation.
</p>`,
	examples: [
		{
            id: 1,
            inputText: 's = "leetcode", wordDict = ["leet","code"]',
            outputText: 'true',
            explanation: `Return true because "leetcode" can be segmented as "leet code".`
        },
        {
            id: 2,
            inputText: 's = "applepenapple", wordDict = ["apple","pen"]',
            outputText: 'true',
            explanation: `Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.`
        },
        {
            id: 3,
            inputText: 's = "catsandog", wordDict = ["cats","dog","sand","and","cat"]',
            outputText: 'false',
        },
	],
	constraints: `
<li class='mt-2'>
<code>1 <= s.length <= 300</code>
</li>
<li class='mt-2'>
<code>1 <= wordDict.length <= 1000</code>
</li>
<li class='mt-2'>
<code>1 <= wordDict[i].length <= 20</code>
</li>
<li class='mt-2'>
<code>s</code> and <code>wordDict[i]</code> consist of only lowercase English letters.
</li>
<li class='mt-2'>
All the strings of <code>wordDict</code> are <strong>unique</strong>.
</li>`,
	starterCode: starterCodeWordBreak,
	order: 139
};
