import { Problem } from "../types/problem";

const starterCodeInsertInterval = `class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
`;

export const insertInterval: Problem = {
	id: "insert-interval",
	title: "57. Insert Interval",
	problemStatement: `
<p class='mt-3'>
You are given an array of non-overlapping intervals <code>intervals</code> where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code> represent the start and the end of the <code>i<sup>th</sup></code> interval and <code>intervals</code> is sorted in ascending order by <code>start<sub>i</sub></code>. You are also given an interval <code>newInterval = [start, end]</code> that represents the start and end of another interval.
</p>
<p class='mt-3'>
Insert <code>newInterval</code> into <code>intervals</code> such that <code>intervals</code> is still sorted in ascending order by <code>start<sub>i</sub></code> and <code>intervals</code> still does not have any overlapping intervals (merge overlapping intervals if necessary).
</p>
<p class='mt-3'>
Return <code>intervals</code> <em>after the insertion</em>.
</p>`,
	examples: [
		{
            id: 1,
            inputText: 'intervals = [[1,3],[6,9]], newInterval = [2,5]',
            outputText: '[[1,5],[6,9]]',
        },
        {
            id: 2,
            inputText: 'intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]',
            outputText: '[[1,2],[3,10],[12,16]]',
            explanation: `Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].`
        },
	],
	constraints: `
<li class='mt-2'>
<code>0 <= intervals.length <= 10<sup>4</sup></code>
</li>
<li class='mt-2'>
<code>intervals[i].length == 2</code>
</li>
<li class='mt-2'>
<code>0 <= start<sub>i</sub> <= end<sub>i</sub> <= 10<sup>5</sup></code>
</li>
<li class='mt-2'>
<code>intervals</code> is sorted by <code>start<sub>i</sub></code> in <strong>ascending</strong> order.
</li>
<li class='mt-2'>
<code>newInterval.length == 2</code>
</li>
<li class='mt-2'>
<code>0 <= start <= end <= 10<sup>5</sup></code>
</li>`,
	starterCode: starterCodeInsertInterval,
	order: 57
};
