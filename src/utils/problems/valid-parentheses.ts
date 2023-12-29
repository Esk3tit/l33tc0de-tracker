import { Problem } from "../types/problem";

const starterCodeValidParentheses = `class Solution:
def isValid(self, s: str) -> bool:

`;

export const validParentheses: Problem = {
    id: "valid-parentheses",
    title: "20. Valid Parentheses",
    problemStatement: `<p class='mt-3'>
    Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.
  </p>
<p class='mt-3'>
An input string is valid if:
</p>
<p class='mt-3'>
1. Open brackets must be closed by the same type of brackets.
</p>
<p class='mt-3'>
2. Open brackets must be closed in the correct order.
</p>
<p class='mt-3'>
3. Every close bracket has a corresponding open bracket of the same type.
</p>`,
    examples: [
        {
            id: 1,
            inputText: 's = "()"',
            outputText: "true",
        },
        {
            id: 2,
            inputText: 's = "()[]{}"',
            outputText: "true",
        },
        {
            id: 3,
            inputText: 's = "(]"',
            outputText: "false",
        },
    ],
    constraints: `<li class='mt-2'>
<code>1 <= s.length <= 10<sup>4</sup></code>
</li> <li class='mt-2'>
<code>s</code> consists of parentheses only <code>'()[]{}'</code>.
</li>`,
    starterCode: starterCodeValidParentheses,
    order: 20,
}