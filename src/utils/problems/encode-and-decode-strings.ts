import { Problem } from "../types/problem";

const starterCodeEncodeAndDecodeStrings = `class Solution:
"""
@param: strs: a list of strings
@return: encodes a list of strings to a single string.
"""
def encode(self, strs):
    # write your code here

"""
@param: str: A string
@return: decodes a single string to a list of strings
"""
def decode(self, str):
    # write your code here

`;

export const encodeAndDecodeStrings: Problem = {
    id: "encode-and-decode-strings",
    title: "271. Encode and Decode Strings",
    problemStatement: `<p class='mt-3'>
    Design an algorithm to encode <strong>a list of strings</strong> to <strong>a string</strong>. The encoded string is then sent over the network and is decoded back to the original list of strings.
  </p>
<p class='mt-3'>
Machine 1 (sender) has the function:
</p>
<div class='example-card'><pre class='mt-3'>def encode(self, strs):
    # write your code here
    return encoded_string
</pre></div>
<p class='mt-3'>
Machine 2 (receiver) has the function:
</p>
<div class='example-card'><pre class='mt-3'>def decode(self, s):
    # write your code here
    return strs
</pre></div>
<p class='mt-3'>
So Machine 1 does:
</p>
<pre class='mt-3'><code class='language-python'>string encoded_string = encode(strs);
</code></pre>
<p class='mt-3'>
and Machine 2 does:
</p>
<pre class='mt-3'><code class='language-python'>vector&lt;string&gt; strs2 = decode(encoded_string);
</code></pre>
<p class='mt-3'>
<code>strs2</code> in Machine 2 should be the same as <code>strs</code> in Machine 1.
</p>
<p class='mt-3'>
Implement the <code>encode</code> and <code>decode</code> methods.
</p>
<p class='mt-3'>
<strong>Note:</strong>
</p>
<ul class='mt-3'>
<li class='mt-2'>
The string may contain any possible characters out of 256 valid ascii characters. Your algorithm should be generalized enough to work on any possible characters.
</li>
<li class='mt-2'>
Do not use class member/global/static variables to store states. Your encode and decode algorithms should be stateless.
</li>
<li class='mt-2'>
Do not rely on any library method such as <code>eval</code> or serialize methods. You should implement your own encode/decode algorithm.
</li>
</ul>
    `,
    examples: [
        {
            id: 1,
            inputText: 'dummy_input = ["Hello", "World"]',
            outputText: '["Hello", "World"]',
            explanation: 'Machine 1: Codec encoder = new Codec(); String msg = encoder.encode(strs); Machine 1 ---msg---> Machine 2 Machine 2: Codec decoder = new Codec(); vector<string> strs2 = decoder.decode(msg); strs2 in Machine 2 should be the same as strs in Machine 1.'
        },
        {
            id: 2,
            inputText: 'dummy_input = [""]',
            outputText: '[""]',
        },
    ],
    constraints: `<li class='mt-2'>
<code>1 <= strs.length <= 200</code>
</li> <li class='mt-2'>
<code>0 <= strs[i].length <= 200</code>
</li>
<li class='mt-2'>
<code>strs[i]</code> contains any possible characters out of <code>256</code> valid ascii characters.
</li>`,
    starterCode: starterCodeEncodeAndDecodeStrings,
    order: 271,
}