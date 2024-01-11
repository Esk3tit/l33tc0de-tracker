import { Problem } from "../types/problem";

const starterCodeCombinationSum = `class Solution:
def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
`;

export const combinationSum: Problem = {
    id: "combination-sum",
    title: "39. Combination Sum",
    problemStatement: `
<p class='mt-3'>
Given an array of <strong>distinct</strong> integers <code>candidates</code> and a target integer <code>target</code>, return <em>a list of all <strong>unique combinations</strong> of </em><code>candidates</code><em> where the chosen numbers sum to </em><code>target</code>. You may return the combinations in <strong>any order</strong>.
</p>
<p class='mt-3'>
The <strong>same</strong> number may be chosen from <code>candidates</code> an <strong>unlimited number of times</strong>. Two combinations are unique if the frequency of at least one of the chosen numbers is different.
</p>
<p class='mt-3'>
The test cases are generated such that the number of unique combinations that sum up to <code>target</code> is less than <code>150</code> combinations for the given input.
</p>`,
    examples: [
        {
            id: 1,
            inputText: 'candidates = [2,3,6,7], target = 7',
            outputText: '[[2,2,3],[7]]',
            explanation: `
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.`
        },
        {
            id: 2,
            inputText: 'candidates = [2,3,5], target = 8',
            outputText: '[[2,2,2,2],[2,3,3],[3,5]]',
        },
        {
            id: 3,
            inputText: 'candidates = [2], target = 1',
            outputText: '[]',
        },
    ],
    constraints: `<li class='mt-2'>
<code>1 <= candidates.length <= 30</code>
</li>
<li class='mt-2'>
<code>2 <= candidates[i] <= 40</code>
</li>
<li class='mt-2'>
All elements of <code>candidates</code> are <strong>distinct</strong>.
</li>
<li class='mt-2'>
<code>1 <= target <= 40</code>
</li>`,
    starterCode: starterCodeCombinationSum,
    order: 39
}