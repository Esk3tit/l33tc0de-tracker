import { Problem } from "../types/problem";

const starterCodeSumOfTwoIntegers = `class Solution:
    def getSum(self, a: int, b: int) -> int:
`;

export const sumOfTwoIntegers: Problem = {
	id: "sum-of-two-integers",
	title: "371. Sum of Two Integers",
	problemStatement: `
<p class='mt-3'>
Given two integers <code>a</code> and <code>b</code>, return <em>the sum of the two integers without using the operators</em> <code>+</code> <em>and</em> <code>-</code>.
</p>`,
	examples: [
		{
            id: 1,
            inputText: "a = 1, b = 2",
            outputText: "3",
        },
        {
            id: 2,
            inputText: "a = 2, b = 3",
            outputText: "5",
        },
	],
	constraints: `
<li class='mt-2'>
<code>-1000 <= a, b <= 1000</code>
</li>`,
	starterCode: starterCodeSumOfTwoIntegers,
	order: 371
};
