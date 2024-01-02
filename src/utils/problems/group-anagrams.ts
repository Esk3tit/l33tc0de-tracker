import { Problem } from "../types/problem";

const starterCodeGroupAnagrams = `class Solution:
def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
`;

export const groupAnagrams: Problem = {
    id: "group-anagrams",
    title: "49. Group Anagrams",
    problemStatement: `
<p class='mt-3'>
Given an array of strings <code>strs</code>, group <strong>the anagrams</strong> together. You can return the answer in <strong>any order</strong>.
</p>
<p class='mt-3'>
An <strong>Anagram</strong> is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
</p>`,
    examples: [
        {
            id: 1,
            inputText: 'strs = ["eat","tea","tan","ate","nat","bat"]',
            outputText: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
        },
        {
            id: 2,
            inputText: 'strs = [""]',
            outputText: '[[""]]',
        },
        {
            id: 3,
            inputText: 'strs = ["a"]',
            outputText: '[["a"]]',
        },
    ],
    constraints: `<li class='mt-2'>
<code>1 <= strs.length <= 10<sup>4</sup></code>
</li>
<li class='mt-2'>
<code>0 <= strs[i].length <= 100</code>
</li>
<li class='mt-2'>
<code>strs[i]</code> consists of lowercase English letters.
</li>`,
    starterCode: starterCodeGroupAnagrams,
    order: 49
}