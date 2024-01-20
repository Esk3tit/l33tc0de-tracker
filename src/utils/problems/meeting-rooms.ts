import { Problem } from "../types/problem";

const starterCodeMeetingRooms = `class Solution:
    def canAttendMeetings(self, intervals: List[List[int]]) -> bool:
`;

export const meetingRooms: Problem = {
	id: "meeting-rooms",
	title: "252. Meeting Rooms",
	problemStatement: `
<p class='mt-3'>
Given an array of meeting time intervals where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>, determine if a person could attend all meetings.
</p>`,
	examples: [
		{
            id: 1,
            inputText: 'intervals = [[0,30],[5,10],[15,20]]',
            outputText: 'false',
        },
        {
            id: 2,
            inputText: 'intervals = [[7,10],[2,4]]',
            outputText: 'true',
        },
	],
	constraints: `
<li class='mt-2'>
<code>0 <= intervals.length <= 10<sup>4</sup></code>
</li>
<li class='mt-2'>
<code>intervals.length == 2</code>
</li>
<li class='mt-2'>
<code>0 <= start<sub>i</sub> < end<sub>i</sub> <= 10<sup>6</sup></code>
</li>`,
	starterCode: starterCodeMeetingRooms,
	order: 252
};
