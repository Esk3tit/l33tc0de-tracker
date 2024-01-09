import { Problem } from "../types/problem";
import { twoSum } from "./two-sum";
import { containsDuplicate } from "./contains-duplicate";
import { validAnagram } from "./valid-anagram";
import { groupAnagrams } from "./group-anagrams";
import { topKFrequentElements } from "./top-k-frequent-elements";
import { productOfArrayExceptSelf } from "./product-of-array-except-self";
import { encodeAndDecodeStrings } from "./encode-and-decode-strings";
import { longestConsecutiveSequence } from "./longest-consecutive-sequence";
import { validPalindrome } from "./valid-palindrome";
import { _3sum } from "./3sum";
import { containerWithMostWater } from "./container-with-most-water";
import { bestTimeToBuyAndSellStock } from "./best-time-to-buy-and-sell-stock";
import { longestSubstringWithoutRepeatingCharacters } from "./longest-substring-without-repeating-characters";
import { longestRepeatingCharacterReplacement } from "./longest-repeating-character-replacement";
import { minimumWindowSubstring } from "./minimum-window-substring";
import { validParentheses } from "./valid-parentheses";
import { findMinimumInRotatedSortedArray } from "./find-minimum-in-rotated-sorted-array";
import { searchInRotatedSortedArray } from "./search-in-rotated-sorted-array";
import { reverseLinkedList } from "./reverse-linked-list";
import { mergeTwoSortedLists } from "./merge-two-sorted-lists";
import { reorderList } from "./reorder-list";
import { removeNthNodeFromEndOfList } from "./remove-nth-node-from-end-of-list";
import { linkedListCycle } from "./linked-list-cycle";
import { mergeKSortedLists } from "./merge-k-sorted-lists";
import { invertBinaryTree } from "./invert-binary-tree";
import { maximumDepthOfBinaryTree } from "./maximum-depth-of-binary-tree";
import { sameTree } from "./same-tree";
import { subtreeOfAnotherTree } from "./subtree-of-another-tree";
import { lowestCommonAncestorOfABinarySearchTree } from "./lowest-common-ancestor-of-a-binary-search-tree";
import { binaryTreeLevelOrderTraversal } from "./binary-tree-level-order-traversal";
import { validateBinarySearchTree } from "./validate-binary-search-tree";
import { kthSmallestElementInABST } from "./kth-smallest-element-in-a-bst";
import { constructBinaryTreeFromPreorderAndInorderTraversal } from "./construct-binary-tree-from-preorder-and-inorder-traversal";
import { binaryTreeMaximumPathSum } from "./binary-tree-maximum-path-sum";
import { serializeAndDeserializeBinaryTree } from "./serialize-and-deserialize-binary-tree";
import { implementTriePrefixTree } from "./implement-trie-prefix-tree";
import { designAddAndSearchWordsDataStructure } from "./design-add-and-search-words-data-structure";
import { wordSearchII } from "./word-search-ii";
import { findMedianFromDataStream } from "./find-median-from-data-stream";
import { combinationSum } from "./combination-sum";
import { wordSearch } from "./word-search";

interface ProblemMap {
    [key: string]: Problem
}

export const problems: ProblemMap = {
    "two-sum": twoSum,
    "contains-duplicate": containsDuplicate,
    "valid-anagram": validAnagram,
    "group-anagrams": groupAnagrams,
    "top-k-frequent-elements": topKFrequentElements,
    "product-of-array-except-self": productOfArrayExceptSelf,
    "encode-and-decode-strings": encodeAndDecodeStrings,
    "longest-consecutive-sequence": longestConsecutiveSequence,
    "valid-palindrome": validPalindrome,
    "3sum": _3sum,
    "container-with-most-water": containerWithMostWater,
    "best-time-to-buy-and-sell-stock": bestTimeToBuyAndSellStock,
    "longest-substring-without-repeating-characters": longestSubstringWithoutRepeatingCharacters,
    "longest-repeating-character-replacement": longestRepeatingCharacterReplacement,
    "minimum-window-substring": minimumWindowSubstring,
    "valid-parentheses": validParentheses,
    "find-minimum-in-rotated-sorted-array": findMinimumInRotatedSortedArray,
    "search-in-rotated-sorted-array": searchInRotatedSortedArray,
    "reverse-linked-list": reverseLinkedList,
    "merge-two-sorted-lists": mergeTwoSortedLists,
    "reorder-list": reorderList,
    "remove-nth-node-from-end-of-list": removeNthNodeFromEndOfList,
    "linked-list-cycle": linkedListCycle,
    "merge-k-sorted-lists": mergeKSortedLists,
    "invert-binary-tree": invertBinaryTree,
    "maximum-depth-of-binary-tree": maximumDepthOfBinaryTree,
    "same-tree": sameTree,
    "subtree-of-another-tree": subtreeOfAnotherTree,
    "lowest-common-ancestor-of-a-binary-search-tree": lowestCommonAncestorOfABinarySearchTree,
    "binary-tree-level-order-traversal": binaryTreeLevelOrderTraversal,
    "validate-binary-search-tree": validateBinarySearchTree,
    "kth-smallest-element-in-a-bst": kthSmallestElementInABST,
    "construct-binary-tree-from-preorder-and-inorder-traversal": constructBinaryTreeFromPreorderAndInorderTraversal,
    "binary-tree-maximum-path-sum": binaryTreeMaximumPathSum,
    "serialize-and-deserialize-binary-tree": serializeAndDeserializeBinaryTree,
    "implement-trie-prefix-tree": implementTriePrefixTree,
    "design-add-and-search-words-data-structure": designAddAndSearchWordsDataStructure,
    "word-search-ii": wordSearchII,
    "find-median-from-data-stream": findMedianFromDataStream,
    "combination-sum": combinationSum,
    "word-search": wordSearch,
}