import { Problem } from "../types/problem";

const starterCodeImplementTriePrefixTree = `class Trie:

def __init__(self):


def insert(self, word: str) -> None:


def search(self, word: str) -> bool:


def startsWith(self, prefix: str) -> bool:



# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)`

export const implementTriePrefixTree: Problem = {
    id: "implement-trie-prefix-tree",
    title: "208. Implement Trie (Prefix Tree)",
    problemStatement: `
<p class='mt-3'>
A <a href='https://en.wikipedia.org/wiki/Trie' target='_blank'>trie</a> (pronounced as "try") or <strong>prefix tree</strong> is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.
</p>
<p class='mt-3'>
Implement the Trie class:
</p>
<ul class='mt-3 problem-list'>
<li><code>Trie()</code> Initializes the trie object.</li>
<li><code>void insert(String word)</code> Inserts the string <code>word</code> into the trie.</li>
<li><code>boolean search(String word)</code> Returns <code>true</code> if the string <code>word</code> is in the trie (i.e., was inserted before), and <code>false</code> otherwise.</li>
<li><code>boolean startsWith(String prefix)</code> Returns <code>true</code> if there is a previously inserted string <code>word</code> that has the prefix <code>prefix</code>, and <code>false</code> otherwise.</li>
</ul>`,
    examples: [
        {
            id: 1,
            inputText: `
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]`,
            outputText: '[null, null, true, false, true, null, true]',
            explanation: `<p class='no-lh mt-3'>Trie trie = new Trie();</p>
<p class='no-lh'>trie.insert("apple");</p>
<p class='no-lh'>trie.search("apple");   // return True</p>
<p class='no-lh'>trie.search("app");     // return False</p>
<p class='no-lh'>trie.startsWith("app"); // return True</p>
<p class='no-lh'>trie.insert("app");</p>
<p class='no-lh'>trie.search("app");     // return True</p>`
        },
    ],
    constraints: `<li class='mt-2'>
<code>1 <= word.length, prefix.length <= 2000</code>
</li> <li class='mt-2'>
<code>word</code> and <code>prefix</code> consist only of lowercase English letters.
</li>
<li class='mt-2'>
At most <code>3 * 10<sup>4</sup></code> calls <strong>in total</strong> will be made to <code>insert</code>, <code>search</code>, and <code>startsWith</code>.
</li>`,
    starterCode: starterCodeImplementTriePrefixTree,
    order: 208
}