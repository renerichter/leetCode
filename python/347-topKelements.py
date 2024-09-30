from typing import List


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # sort in-place
        nums_dict = {}
        for item in nums:
            nums_dict[item] = nums_dict.get(item, 0) +1
        # get sorted amounts in descending order
        a = sorted(nums_dict,key = lambda item: nums_dict[item], reverse=True)
        
        # return first k
        return a[:k]
        # create set
nums = [1,1,4,5,4,6,4,6]; k = 2;
a = Solution()
a.topKFrequent(nums,k)
        