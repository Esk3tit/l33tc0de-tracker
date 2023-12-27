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
}