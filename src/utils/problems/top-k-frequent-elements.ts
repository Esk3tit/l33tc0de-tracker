import { Problem } from "../types/problem";

const starterCodeTopKFrequentElements = `class Solution:
def topKFrequent(self, nums: List[int], k: int) -> List[int]:

`;

export const topKFrequentElements: Problem = {
    id: "top-k-frequent-elements",
    title: "347. Top K Frequent Elements",
    problemStatement: `<p class='mt-3'>
    Given an integer array <code>nums</code> and an integer k, return <em>the <code>k</code> most frequent elements</em>. You may return the answer in <strong>any order</strong>.
  </p>`,
    examples: [
        {
            id: 1,
            inputText: 'nums = [1,1,1,2,2,3], k = 2',
            outputText: '[1,2]',
        },
        {
            id: 2,
            inputText: 'nums = [1], k = 1',
            outputText: '[1]',
        },
    ],
    constraints: `<li class='mt-2'>
<code>1 <= nums.length <= 10<sup>5</sup></code>
</li>
<li class='mt-2'>
<code>-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup></code>
</li>
<li class='mt-2'>
<code>k</code> is in the range <code>[1, the number of unique elements in the array]</code>.
</li>
<li class='mt-2'>
It is <strong>guaranteed</strong> that the answer is <strong>unique</strong>.
</li>`,
    starterCode: starterCodeTopKFrequentElements,
    order: 347,
    followUp: "Your algorithm's time complexity must be better than <code>O(n log n)</code>, where n is the array's size."
}