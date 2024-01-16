import { Problem } from "../types/problem";

const starterCodeCoinChange = `class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
`;

export const coinChange: Problem = {
	id: "coin-change",
	title: "322. Coin Change",
	problemStatement: `
<p class='mt-3'>
You are given an integer array <code>coins</code> representing coins of different denominations and an integer <code>amount</code> representing a total amount of money.
</p>
<p class='mt-3'>
Return <em>the fewest number of coins that you need to make up that amount</em>. If that amount of money cannot be made up by any combination of the coins, return <code>-1</code>.
</p>
<p class='mt-3'>
You may assume that you have an infinite number of each kind of coin.
</p>`,
	examples: [
		{
            id: 1,
            inputText: 'coins = [1,2,5], amount = 11',
            outputText: '3',
            explanation: `11 = 5 + 5 + 1`
        },
        {
            id: 2,
            inputText: 'coins = [2], amount = 3',
            outputText: '-1',
        },
        {
            id: 3,
            inputText: 'coins = [1], amount = 0',
            outputText: '0',
        },
	],
	constraints: `
<li class='mt-2'>
<code>1 <= coins.length <= 12</code>
</li>
<li class='mt-2'>
<code>1 <= coins[i] <= 2<sup>31</sup> - 1</code>
</li>
<li class='mt-2'>
<code>0 <= amount <= 10<sup>4</sup></code>
</li>`,
	starterCode: starterCodeCoinChange,
	order: 322
};
