import { Problem } from "../types/problem";

const starterCodeSerializeAndDeserializeBinaryTree = `class Codec:
def serialize(self, root: Optional[TreeNode]) -> str:
    """Encodes a tree to a single string.

    :type root: TreeNode
    :rtype: str
    """

def deserialize(self, data: str) -> Optional[TreeNode]:
    """Decodes your encoded data to tree.

    :type data: str
    :rtype: TreeNode
    """
`;

export const serializeAndDeserializeBinaryTree: Problem = {
    id: "serialize-and-deserialize-binary-tree",
    title: "297. Serialize and Deserialize Binary Tree",
    problemStatement: `
<p class='mt-3'>
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
</p>
<p class='mt-3'>
Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.
</p>
<p class='mt-3'>
<strong>Clarification:</strong> The input/output format is the same as <a href="https://support.leetcode.com/hc/en-us/articles/360011883654-What-does-1-null-2-3-mean-in-binary-tree-representation-">how LeetCode serializes a binary tree</a>. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
</p>`,
    examples: [
        {
            id: 1,
            inputText: 'root = [1,2,3,null,null,4,5]',
            outputText: '[1,2,3,null,null,4,5]',
            img: 'https://assets.leetcode.com/uploads/2020/09/15/serdeser.jpg',
        },
        {
            id: 2,
            inputText: 'root = []',
            outputText: '[]',
        },
    ],
    constraints: `<li class='mt-2'>
The number of nodes in the tree is in the range <code>[0, 10<sup>4</sup>]</code>.
</li> <li class='mt-2'>
<code>-1000 <= Node.val <= 1000</code>
</li>`,
    starterCode: starterCodeSerializeAndDeserializeBinaryTree,
    order: 297
}