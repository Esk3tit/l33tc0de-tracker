import { ProblemSet } from "@/utils/types/problem";

const neetcode75 = [
    "contains-duplicate", "valid-anagram","two-sum", "group-anagrams", "top-k-frequent-elements",
    "product-of-array-except-self", "encode-and-decode-strings", "longest-consecutive-sequence",
    "valid-palindrome", "3sum", "container-with-most-water", "best-time-to-buy-and-sell-stock",
    "longest-substring-without-repeating-characters", "longest-repeating-character-replacement",
    "minimum-window-substring", "valid-parentheses", "find-minimum-in-rotated-sorted-array",
    "search-in-rotated-sorted-array", "reverse-linked-list", "merge-two-sorted-lists", "reorder-list",
    
]

export const problemSets: ProblemSet[] = [
    {
        id: "neetcode-75",
        title: "Neetcode 75",
        imageUrl: "/steamhappy_og.png",
        alt: "Neetcode 75 logo is a steam happy face emote",
        problems: new Set(neetcode75)
    },
    {
        id: "all",
        title: "All Problems",
        imageUrl: "/nikocado.png",
        alt: "All problems logo is nikocado avocado dying inside",
        problems: new Set(neetcode75)
    }
]