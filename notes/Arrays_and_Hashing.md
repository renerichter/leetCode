# Arrays and Hashing

## 217 - containsDuplicate

[Problem Link](https://leetcode.com/problems/contains-duplicate/description/)

|TypeScript|Python|GOLang|
|---|---|---|
|✅[linkTS](../typeScript/217-containsDuplicate.ts)|[❌](../python/)|[❌](../goLang/)|

Directly thought about 3 interesting approaches

* try by writing everything from scratch
    * v0 == brute force -> $O(n^2)$ -> only passes **70/76** tests
    * ~~v1a == recursive + centered split + combine with & + compare at length==1 -> `O(n log(n))` -> **not thought through!**~~
    * v1 == quicksort $O(n \log(n))$ to create `sortedArray` and then compare adjacent elements in `sortedArray` in $O(n)$ time-complexity -> **to-be-improved**
    * v2 == create set `setNums` from `nums` array and compare length/size -> if different, there must be a double -> **quite fast**
    * v3 == simply sort and then count via map -> **quite ok**
    * ✅v4 == using a map --> **ok solution**

## 242 - validAnagram

[Problem Link](https://leetcode.com/problems/valid-anagram/description/)

|TypeScript|Python|GOLang|
|---|---|---|
|✅[linkTS](../typeScript/242-validAnagram.ts)|[❌](../python/)|[❌](../goLang/)|

Approaches

1. Approaches
   1. **Object approach** --> _works and beats 70% in speed, 27% in memory_
      1. steps
         1. guard if length differs
         2. dict from word `s` with counts of letters
         3. go through second word `t` and compare within dict
         4. if all contained and number per letter correct -> palindrome
      2. note
         1. my algorithm is string-type agnostic, so works for utf-8 inherently
2. findings
    1. memory-better approaches use arrays directly (eg this) instead of creating the dict (which seems to take time)
    2. speed-better approaches limit themselves to directly using arrays of length 26, thereby excluding any special characters or UTF-8 at all; they then count the occurance of a letter in `s` and subtract if it occurs in `t`; finally they check if all are 0

## 1 - twoSum

[Problem Link](https://leetcode.com/problems/two-sum/description/)

|TypeScript|Python|GOLang|
|---|---|---|
|✅[linkTS](../typeScript/1-twoSum.ts)|[❌](../python/)|[❌](../goLang/)|


1. Approaches
   1. **BruteForce** -> very slow (beats 5%) and inefficient (beats 30%)
      1. subtract target from nums to get `numsSubtract`
      2. multiply nums with (-1) to get `numsMinus`
      3. loop through both arrays to find numbers that switched positions
   2. **Dict** -> better, beats 78% on CPU, but only 21.5% on memory
      1. insert `numsSubtract` into object to store position of value
      2. search for occurance of `numsMinus` in new object
      3. guard against double same position
2. Findings
   1. hash implementations are nice -> but work the same way as my object solution -> _why are the nested loops (due to use of hasOwnProperty) faster than my two single loops?_

## 49 - Group Anagrams

[Problem Link](https://leetcode.com/problems/group-anagrams/description/)

|TypeScript|Python|GOLang|
|---|---|---|
|[❌](../typeScript/49-group_anagrams.ts)|[✅](../python/49-group_anagrams.py)|[❌](../goLang/)|

1. Approaches
   1. very complex to create dicts and compare with dicts counting
   2. create sorted char-lists from string inputs (from list) and dynamically delete them while traversing through
   3. create sorted strings and test whether the hash already exists in a dict -> if so, add to output;  if not leave

## 347 - Top K Frequent Elements

[Problem Link](https://leetcode.com/problems/top-k-frequent-elements/description/)

|TypeScript|Python|GOLang|
|---|---|---|
|[❌](../typeScript/)|[✅](../python/347-topKelements.py)|[❌](../goLang/)|

1. Approaches
   1. dict+sort
      1. count occurances in dict (hashtable)
      2. sort dict by values of dict-items in ascending order and get as list
      3. return first k of list

## 0001 - String Encode and Decode

[Problem Link](https://neetcode.io/problems/string-encode-and-decode)

|TypeScript|Python|GOLang|
|---|---|---|
|[❌](../typeScript/)|[✅](../python/0001-stringEncodeDecode.py)|[❌](../goLang/)|

1. Approaches
   1. d
      1. c