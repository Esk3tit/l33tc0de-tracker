import { Problem } from "../types/problem";

const starterCodeBestTimeToBuyAndSellStock = `class Solution:
def maxProfit(self, prices: List[int]) -> int:
`;

export const bestTimeToBuyAndSellStock: Problem = {
    id: "best-time-to-buy-and-sell-stock",
    title: "121. Best Time to Buy and Sell Stock",
    problemStatement: `
<p class='mt-3'>
You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.
</p>
<p class='mt-3'>
You want to maximize your profit by choosing a <strong>single day</strong> to buy one stock and choosing a <strong>different day in the future</strong> to sell that stock.
</p>
<p class='mt-3'>
Return <em>the maximum profit you can achieve from this transaction</em>. If you cannot achieve any profit, return <code>0</code>.
</p>`,
    examples: [
        {
            id: 1,
            inputText: 'prices = [7,1,5,3,6,4]',
            outputText: '5',
            explanation: `Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
<p class='no-lh mt-2'>Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.</p>`
        },
        {
            id: 2,
            inputText: 'prices = [7,6,4,3,1]',
            outputText: "0",
            explanation: 'In this case, no transactions are done and the max profit = 0.'
        },
    ],
    constraints: `<li class='mt-2'>
<code>1 <= prices.length <= 10<sup>5</sup></code>
</li> <li class='mt-2'>
<code>0 <= prices[i] <= 10<sup>4</sup></code>
</li>`,
    starterCode: starterCodeBestTimeToBuyAndSellStock,
    order: 121
}