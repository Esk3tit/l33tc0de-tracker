import { Problem } from "../types/problem";

const starterCodeFindMedianFromDataStream = `class MedianFinder:

    def __init__(self):


    def addNum(self, num: int) -> None:


    def findMedian(self) -> float:



# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()`

export const findMedianFromDataStream: Problem = {
    id: "find-median-from-data-stream",
    title: "295. Find Median from Data Stream",
    problemStatement: `
<p class='mt-3'>
The <strong>median</strong> is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.
</p>
<ul class='mt-3 problem-list'>
<li class='m-1'>For example, for <code>arr = [2,3,4]</code>, the median is <code>3</code>.</li>
<li class='m-1'>For example, for <code>arr = [2,3]</code>, the median is <code>(2 + 3) / 2 = 2.5</code>.</li>
</ul>
<p class='mt-3'>
Implement the MedianFinder class:
</p>
<ul class='mt-3 problem-list'>
<li><code>MedianFinder()</code> initializes the <code>MedianFinder</code> object.</li>
<li><code>void addNum(int num)</code> adds the integer <code>num</code> from the data stream to the data structure.</li>
<li><code>double findMedian()</code> returns the median of all elements so far. Answers within <code>10<sup>-5</sup></code> of the actual answer will be accepted.</li>
</ul>`,
    examples: [
        {
            id: 1,
            inputText: `
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]`,
            outputText: `
[null, null, null, 1.5, null, 2.0]
`,
            explanation: `
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0`
        },
    ],
    constraints: `<li class='mt-2'>
<code>-10<sup>5</sup> <= num <= 10<sup>5</sup></code>
</li> <li class='mt-2'>
There will be at least one element in the data structure before calling <code>findMedian</code>.
</li>
<li class='mt-2'>
At most <code>5 * 10<sup>4</sup></code> calls will be made to <code>addNum</code> and <code>findMedian</code>.
</li>`,
    starterCode: starterCodeFindMedianFromDataStream,
    order: 295,
    followUp: `
<ul class='mt-3 problem-list'>
<li>If all integer numbers from the stream are in the range <code>[0, 100]</code>, how would you optimize your solution?</li>
<li>If <code>99%</code> of all integer numbers from the stream are in the range <code>[0, 100]</code>, how would you optimize your solution?</li>
</ul>`
}