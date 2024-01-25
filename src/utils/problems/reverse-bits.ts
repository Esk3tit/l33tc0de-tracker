import { Problem } from "../types/problem";

const starterCodeReverseBits = `class Solution:
    def reverseBits(self, n: int) -> int:
`;

export const reverseBits: Problem = {
	id: "reverse-bits",
	title: "190. Reverse Bits",
	problemStatement: `
<p class='mt-3'>
Reverse bits of a given 32 bits unsigned integer.
</p>
<p class='mt-3'>
<strong>Note:</strong>
</p>
<ul class='mt-3 problem-list'>
<li>
Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
</li>
<li>
In Java, the compiler represents the signed integers using <a href='https://en.wikipedia.org/wiki/Two%27s_complement' target='_blank'>2's complement notation</a>. Therefore, in <strong>Example 2</strong> above, the input represents the signed integer <code>-3</code> and the output represents the signed integer <code>-1073741825</code>.
</li>
</ul>`,
	examples: [
		{
            id: 1,
            inputText: "n = 00000010100101000001111010011100",
            outputText: "   964176192 (00111001011110000010100101000000)",
            explanation: `The input binary string <strong>00000010100101000001111010011100</strong> represents the unsigned integer 43261596, so return 964176192 which its binary representation is <strong>00111001011110000010100101000000</strong>.`
        },
        {
            id: 2,
            inputText: "n = 11111111111111111111111111111101",
            outputText: "   3221225471 (10111111111111111111111111111111)",
            explanation: `The input binary string <strong>11111111111111111111111111111101</strong> represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is <strong>10111111111111111111111111111111</strong>.`
        }
	],
	constraints: `
<li class='mt-2'>
The input must be a <strong>binary string</strong> of length <code>32</code>
</li>`,
	starterCode: starterCodeReverseBits,
	order: 190,
    followUp: `If this function is called many times, how would you optimize it?`
};
