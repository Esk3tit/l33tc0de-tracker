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
}