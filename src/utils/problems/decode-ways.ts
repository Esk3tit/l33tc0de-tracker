import { Problem } from "../types/problem";

const starterCodeDecodeWays = `class Solution:
    def numDecodings(self, s: str) -> int:
`;

export const decodeWays: Problem = {
	id: "decode-ways",
	title: "91. Decode Ways",
	problemStatement: `
<p class='mt-3'>
A message containing letters from <code>A-Z</code> can be <strong>encoded</strong> into numbers using the following mapping:
</p>
<pre class='mt-3'>
'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
</pre>
<p class='mt-3'>
To <strong>decode</strong> an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, <code>"11106"</code> can be mapped into:
</p>
<ul class='mt-3 problem-list'>
<li><code>"AAJF"</code> with the grouping <code>(1 1 10 6)</code></li>
<li><code>"KJF"</code> with the grouping <code>(11 10 6)</code></li>
</ul>
<p class='mt-3'>
Note that the grouping <code>(1 11 06)</code> is invalid because <code>"06"</code> cannot be mapped into <code>'F'</code> since <code>"6"</code> is different from <code>"06"</code>.
</p>
<p class='mt-3'>
Given a string <code>s</code> containing only digits, return <em>the <strong>number</strong> of ways to <strong>decode</strong> it</em>.
</p>
<p class='mt-3'>
The answer is guaranteed to fit in a <strong>32-bit</strong> integer.
</p>`,
	examples: [
		{
            id: 1,
            inputText: 's = "12"',
            outputText: '2',
            explanation: `"12" could be decoded as "AB" (1 2) or "L" (12).`
        },
        {
            id: 2,
            inputText: 's = "226"',
            outputText: '3',
            explanation: `"226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).`
        },
        {
            id: 3,
            inputText: 's = "06"',
            outputText: '0',
            explanation: `"06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").`
        },
	],
	constraints: `
<li class='mt-2'>
<code>1 <= s.length <= 100</code>
</li>
<li class='mt-2'>
<code>s</code> contains only digits and may contain leading zero(s).
</li>`,
	starterCode: starterCodeDecodeWays,
	order: 91
};
