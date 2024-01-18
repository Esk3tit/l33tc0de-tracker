import { Problem } from "../types/problem";

const starterCodeNonOverlappingIntervals = `class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
`;

export const nonOverlappingIntervals: Problem = {
	id: "non-overlapping-intervals",
	title: "435. Non-overlapping Intervals",
	problemStatement: `
<p class='mt-3'>
Given an array of intervals <code>intervals</code> where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>, return <em>the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping</em>.
</p>`,
	examples: [
		{
            id: 1,
            inputText: 'intervals = [[1,2],[2,3],[3,4],[1,3]]',
            outputText: '1',
            explanation: `[1,3] can be removed and the rest of the intervals are non-overlapping.`
        },
        {
            id: 2,
            inputText: 'intervals = [[1,2],[1,2],[1,2]]',
            outputText: '2',
            explanation: `You need to remove two [1,2] to make the rest of the intervals non-overlapping.`
        },
        {
            id: 3,
            inputText: 'intervals = [[1,2],[2,3]]',
            outputText: '0',
            explanation: `You don't need to remove any of the intervals since they're already non-overlapping.`
        },
	],
	constraints: `
<li class='mt-2'>
<code>1 <= intervals.length <= 10<sup>5</sup></code>
</li>
<li class='mt-2'>
<code>intervals[i].length == 2</code>
</li>
<li class='mt-2'>
<code>-5 * 10<sup>4</sup> <= start<sub>i</sub> < end<sub>i</sub> <= 5 * 10<sup>4</sup></code>
</li>`,
	starterCode: starterCodeNonOverlappingIntervals,
	order: 435
};
