import { Problem } from "../types/problem";

const starterCodeContainerWithMostWater = `class Solution:
def maxArea(self, height: List[int]) -> int:
`;

export const containerWithMostWater: Problem = {
    id: "container-with-most-water",
    title: "11. Container With Most Water",
    problemStatement: `
<p class='mt-3'>
You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>i<sup>th</sup></code> line are <code>(i, 0)</code> and <code>(i, height[i])</code>.
</p>
<p class='mt-3'>
Find two lines that together with the x-axis form a container, such that the container contains the most water.
</p>
<p class='mt-3'>
Return <em>the maximum amount of water a container can store</em>.
</p>
<p class='mt-3'>
<strong>Notice</strong> that you may not slant the container.
</p>`,
    examples: [
        {
            id: 1,
            inputText: 'height = [1,8,6,2,5,4,8,3,7]',
            outputText: '49',
            explanation: 'The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.',
            img: "https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg"
        },
        {
            id: 2,
            inputText: 'height = [1,1]',
            outputText: "1",
        },
    ],
    constraints: `<li class='mt-2'>
    <code>n == height.length</code>
</li> <li class='mt-2'>
    <code>2 <= n <= 10<sup>5</sup></code>
</li>
<li class='mt-2'>
    <code>0 <= height[i] <= 10<sup>4</sup></code>
    </li>`,
    starterCode: starterCodeContainerWithMostWater,
    order: 11
}