import { Problem } from "../types/problem";

const starterCodeDesignAddAndSearchWordsDataStructure = `class WordDictionary:

def __init__(self):


def addWord(self, word: str) -> None:


def search(self, word: str) -> bool:



# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)`;

export const designAddAndSearchWordsDataStructure: Problem = {
    id: "design-add-and-search-words-data-structure",
    title: "211. Design Add and Search Words Data Structure",
    problemStatement: `
<p class='mt-3'>
Design a data structure that supports adding new words and finding if a string matches any previously added string.
</p>
<p class='mt-3'>
Implement the <code>WordDictionary</code> class:
</p>
<ul class='mt-3 problem-list'>
<li class='m-1'><code>WordDictionary()</code> Initializes the object.</li>
<li><code>void addWord(word)</code> Adds <code>word</code> to the data structure, it can be matched later.</li>
<li><code>bool search(word)</code> Returns <code>true</code> if there is any string in the data structure that matches <code>word</code> or <code>false</code> otherwise. <code>word</code> may contain dots <code>'.'</code> where dots can be matched with any letter.</li>
</ul>`,
    examples: [
        {
            id: 1,
            inputText: `
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]`,
            outputText: '[null,null,null,null,false,true,true,true]',
            explanation: `<p class='no-lh mt-3'>WordDictionary wordDictionary = new WordDictionary();</p>
<p class='no-lh'>wordDictionary.addWord("bad");</p>
<p class='no-lh'>wordDictionary.addWord("dad");</p>
<p class='no-lh'>wordDictionary.addWord("mad");</p>
<p class='no-lh'>wordDictionary.search("pad"); // return False</p>
<p class='no-lh'>wordDictionary.search("bad"); // return True</p>
<p class='no-lh'>wordDictionary.search(".ad"); // return True</p>
<p class='no-lh'>wordDictionary.search("b.."); // return True</p>`
        },
    ],
    constraints: `<li class='mt-2'>
<code>1 <= word.length <= 25</code>
</li> <li class='mt-2'>
<code>word</code> in <code>addWord</code> consists of lowercase English letters.
</li>
<li class='mt-2'>
<code>word</code> in <code>search</code> consist of <code>'.'</code> or lowercase English letters.
</li>
<li class='mt-2'>
There will be at most <code>2</code> dots in <code>word</code> for <code>search</code> queries.
</li>
<li class='mt-2'>
At most <code>10<sup>4</sup></code> calls will be made to <code>addWord</code> and <code>search</code>.
</li>`,
    starterCode: starterCodeDesignAddAndSearchWordsDataStructure,
    order: 211
}