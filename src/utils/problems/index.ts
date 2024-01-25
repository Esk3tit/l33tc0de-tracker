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
import { numberOfIslands } from "./number-of-islands";
import { cloneGraph } from "./clone-graph";
import { pacificAtlanticWaterFlow } from "./pacific-atlantic-water-flow";
import { courseSchedule } from "./course-schedule";
import { numberOfConnectedComponentsInAnUndirectedGraph } from "./number-of-connected-components-in-an-undirected-graph";
import { graphValidTree } from "./graph-valid-tree";
import { alienDictionary } from "./alien-dictionary";
import { climbingStairs } from "./climbing-stairs";
import { houseRobber } from "./house-robber";
import { houseRobberII } from "./house-robber-ii";
import { longestPalindromicSubstring } from "./longest-palindromic-substring";
import { palindromicSubstrings } from "./palindromic-substrings";
import { decodeWays } from "./decode-ways";
import { coinChange } from "./coin-change";
import { maximumProductSubarray } from "./maximum-product-subarray";
import { wordBreak } from "./word-break";
import { longestIncreasingSubsequence } from "./longest-increasing-subsequence";
import { uniquePaths } from "./unique-paths";
import { longestCommonSubsequence } from "./longest-common-subsequence";
import { maximumSubarray } from "./maximum-subarray";
import { jumpGame } from "./jump-game";
import { insertInterval } from "./insert-interval";
import { mergeIntervals } from "./merge-intervals";
import { nonOverlappingIntervals } from "./non-overlapping-intervals";
import { meetingRooms } from "./meeting-rooms";
import { meetingRoomsII } from "./meeting-rooms-ii";
import { rotateImage } from "./rotate-image";
import { spiralMatrix } from "./spiral-matrix";
import { setMatrixZeroes } from "./set-matrix-zeroes";
import { numberOf1Bits } from "./number-of-1-bits";
import { countingBits } from "./counting-bits";
import { reverseBits } from "./reverse-bits";
import { missingNumber } from "./missing-number";
import { sumOfTwoIntegers } from "./sum-of-two-integers";

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
    "number-of-islands": numberOfIslands,
    "clone-graph": cloneGraph,
    "pacific-atlantic-water-flow": pacificAtlanticWaterFlow,
    "course-schedule": courseSchedule,
    "number-of-connected-components-in-an-undirected-graph": numberOfConnectedComponentsInAnUndirectedGraph,
    "graph-valid-tree": graphValidTree,
    "alien-dictionary": alienDictionary,
    "climbing-stairs": climbingStairs,
    "house-robber": houseRobber,
    "house-robber-ii": houseRobberII,
    "longest-palindromic-substring": longestPalindromicSubstring,
    "palindromic-substrings": palindromicSubstrings,
    "decode-ways": decodeWays,
    "coin-change": coinChange,
    "maximum-product-subarray": maximumProductSubarray,
    "word-break": wordBreak,
    "longest-increasing-subsequence": longestIncreasingSubsequence,
    "unique-paths": uniquePaths,
    "longest-common-subsequence": longestCommonSubsequence,
    "maximum-subarray": maximumSubarray,
    "jump-game": jumpGame,
    "insert-interval": insertInterval,
    "merge-intervals": mergeIntervals,
    "non-overlapping-intervals": nonOverlappingIntervals,
    "meeting-rooms": meetingRooms,
    "meeting-rooms-ii": meetingRoomsII,
    "rotate-image": rotateImage,
    "spiral-matrix": spiralMatrix,
    "set-matrix-zeroes": setMatrixZeroes,
    "number-of-1-bits": numberOf1Bits,
    "counting-bits": countingBits,
    "reverse-bits": reverseBits,
    "missing-number": missingNumber,
    "sum-of-two-integers": sumOfTwoIntegers,
}