import { ProblemSet } from "@/utils/types/problem";

const neetcode75 = [
    "contains-duplicate", "valid-anagram","two-sum", "group-anagrams", "top-k-frequent-elements",
    "product-of-array-except-self", "encode-and-decode-strings", "longest-consecutive-sequence",
    "valid-palindrome", "3sum", "container-with-most-water", "best-time-to-buy-and-sell-stock",
    "longest-substring-without-repeating-characters", "longest-repeating-character-replacement",
    "minimum-window-substring", "valid-parentheses", "find-minimum-in-rotated-sorted-array",
    "search-in-rotated-sorted-array", "reverse-linked-list", "merge-two-sorted-lists", "reorder-list",
    "remove-nth-node-from-end-of-list", "linked-list-cycle", "merge-k-sorted-lists", "invert-binary-tree",
    "maximum-depth-of-binary-tree", "same-tree", "subtree-of-another-tree", "lowest-common-ancestor-of-a-binary-search-tree",
    "binary-tree-level-order-traversal", "validate-binary-search-tree", "kth-smallest-element-in-a-bst",
    "construct-binary-tree-from-preorder-and-inorder-traversal", "binary-tree-maximum-path-sum",
    "serialize-and-deserialize-binary-tree", "implement-trie-prefix-tree", "design-add-and-search-words-data-structure",
    "word-search-ii", "find-median-from-data-stream", "combination-sum", "word-search", "number-of-islands",
    "clone-graph", "pacific-atlantic-water-flow", "course-schedule", "number-of-connected-components-in-an-undirected-graph",
    "graph-valid-tree", "alien-dictionary", "climbing-stairs", "house-robber", "house-robber-ii",
    "longest-palindromic-substring", "palindromic-substrings", "decode-ways", "coin-change",
    "maximum-product-subarray", "word-break", "longest-increasing-subsequence", "unique-paths",
    "longest-common-subsequence", "maximum-subarray", "jump-game", "insert-interval", "merge-intervals",
    "non-overlapping-intervals", "meeting-rooms", "meeting-rooms-ii", "rotate-image", "spiral-matrix",
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