import { Problem } from "../types/problem";

const starterCodeValidPalindrome = `class Solution:
def isPalindrome(self, s: str) -> bool:

`;

export const validPalindrome: Problem = {
    id: "valid-palindrome",
    title: "125. Valid Palindrome",
    problemStatement: `
    <p class='mt-3'>
    A phrase is a <strong>palindrome</strong> if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
</p>
    <p class='mt-3'>
    Given a string <code>s</code>, return <code>true</code> <em>if it is a <strong>palindrome</strong>, or <code>false</code> otherwise</em>.
</p>`,
    examples: [
        {
            id: 1,
            inputText: 's = "A man, a plan, a canal: Panama"',
            outputText: 'true',
            explanation: '"amanaplanacanalpanama" is a palindrome.'
        },
        {
            id: 2,
            inputText: 's = "race a car"',
            outputText: "false",
            explanation: '"raceacar" is not a palindrome.'
        },
        {
            id: 3,
            inputText: 's = " "',
            outputText: "true",
            explanation: 's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.'
        },
    ],
    constraints: `<li class='mt-2'>
    <code>1 <= s.length <= 2 * 10<sup>5</sup></code>
</li> <li class='mt-2'>
    <code>s</code> consists only of printable ASCII characters.
</li>`,
    starterCode: starterCodeValidPalindrome,
    order: 125
}