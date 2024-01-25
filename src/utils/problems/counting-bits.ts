import { Problem } from "../types/problem";

const starterCodeCountingBits = `class Solution:
    def countBits(self, num: int) -> List[int]:
`;

export const countingBits: Problem = {
	id: "counting-bits",
	title: "338. Counting Bits",
	problemStatement: `
<p class='mt-3'>
Given an integer <code>n</code>, return <em>an array</em> <code>ans</code> <em>of length</em> <code>n + 1</code> <em>such that for each</em> <code>i</code> (<code>0 &lt;= i &lt;= n</code>), <code>ans[i]</code> <em>is the <strong>number of</strong> </em><code>1</code><em>'s in the binary representation of</em> <code>i</code>.
</p>`,
	examples: [
		{
            id: 1,
            inputText: "n = 2",
            outputText: "[0,1,1]",
            explanation: `
0 --> 0
1 --> 1
2 --> 10`
        },
        {
            id: 2,
            inputText: "n = 5",
            outputText: "[0,1,1,2,1,2]",
            explanation: `
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101`
        },
	],
	constraints: `
<li class='mt-2'>
<code>0 <= n <= 10<sup>5</sup></code>
</li>`,
	starterCode: starterCodeCountingBits,
	order: 338,
    followUp: `
<ul class='mt-3 problem-list'>
<li>It is very easy to come up with a solution with a runtime of <code>O(n log n)</code>. Can you do it in linear time <code>O(n)</code> and possibly in a single pass?</li>
<li>Can you do it without using any built-in function (i.e., like <code>__builtin_popcount</code> in C++)?</li>
</ul>`
};
