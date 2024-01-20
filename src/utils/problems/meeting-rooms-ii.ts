import { Problem } from "../types/problem";

const starterCodeMeetingRoomsII = `class Solution:
    def minMeetingRooms(self, intervals: List[List[int]]) -> int:
`;

export const meetingRoomsII: Problem = {
	id: "meeting-rooms-ii",
	title: "253. Meeting Rooms II",
	problemStatement: `
<p class='mt-3'>
Given an array of meeting time intervals <code>intervals</code> where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>, return <em>the minimum number of conference rooms required</em>.
</p>`,
	examples: [
		{
            id: 1,
            inputText: 'intervals = [[0,30],[5,10],[15,20]]',
            outputText: '2',
        },
        {
            id: 2,
            inputText: 'intervals = [[7,10],[2,4]]',
            outputText: '1',
        },
	],
	constraints: `
<li class='mt-2'>
<code>1 <= intervals.length <= 10<sup>4</sup></code>
</li>
<li class='mt-2'>
<code>0 <= start<sub>i</sub> < end<sub>i</sub> <= 10<sup>6</sup></code>
</li>`,
	starterCode: starterCodeMeetingRoomsII,
	order: 253
};
