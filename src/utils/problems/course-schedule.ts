import { Problem } from "../types/problem";

const starterCodeCourseSchedule = `class Solution:
def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
`;

export const courseSchedule: Problem = {
    id: "course-schedule",
    title: "207. Course Schedule",
    problemStatement: `
<p class='mt-3'>
There are a total of <code>numCourses</code> courses you have to take, labeled from <code>0</code> to <code>numCourses - 1</code>. You are given an array <code>prerequisites</code> where <code>prerequisites[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> indicates that you <strong>must</strong> take course <code>b<sub>i</sub></code> first if you want to take course <code>a<sub>i</sub></code>.
</p>
<ul class='mt-3 problem-list'>
<li>For example, the pair <code>[0, 1]</code>, indicates that to take course <code>0</code> you have to first take course <code>1</code>.</li>
</ul>
<p class='mt-3'>
Return <code>true</code> if you can finish all courses. Otherwise, return <code>false</code>.
</p>`,
    examples: [
        {
            id: 1,
            inputText: 'numCourses = 2, prerequisites = [[1,0]]',
            outputText: 'true',
            explanation: `There are a total of 2 courses to take.
To take course 1 you should have finished course 0. So it is possible.`
        },
        {
            id: 2,
            inputText: 'numCourses = 2, prerequisites = [[1,0],[0,1]]',
            outputText: "false",
            explanation: `There are a total of 2 courses to take.
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.`
        },
    ],
    constraints: `<li class='mt-2'>
<code>1 <= numCourses <= 2000</code>
</li> <li class='mt-2'>
<code>0 <= prerequisites.length <= 5000</code>
</li>
<li class='mt-2'>
<code>prerequisites[i].length == 2</code>
</li>
<li class='mt-2'>
<code>0 <= a<sub>i</sub>, b<sub>i</sub> < numCourses</code>
</li>
<li class='mt-2'>
All the pairs prerequisites[i] are <strong>unique</strong>.
</li>`,
    starterCode: starterCodeCourseSchedule,
    order: 207
}