from typing import List


class Solution:
    def createDict(self,item:str) -> dict[str,int]:
        item_dict = {}
        for char in item:
            item_dict[char] = (item_dict['char'] | 0)+1;
        return item_dict
    def compareStrings(self,item1:str,item2:str) -> bool:
        for achar in item2:
            pass
                
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # create dict per word to count -> read/access O(1); create: O(log n)
        for i in range(len(strs)-2):
            item = strs[i]
            item_dict = self.createDict(item)
            for j in strs[i+1:]:
                pass


# v2 -- very simple, but non-performant
class SolutionV2:
    def groupAnagrams(self,strs:List[str]) -> List[List[str]]:
        # sort all strings
        paired_strs:List[List[str]] = []
        sorted_strs:List[List[str]] = [sorted(item) for item in strs]
        sorted_idx:List[int] = list(range(len(strs)))
        while len(sorted_strs)>0:
            paired_strs_sub:List[str] = [strs[sorted_idx[0]],]
            idx = 1
            while idx < len(sorted_strs):
                if (len(sorted_strs[0]) == len(sorted_strs[idx])) and sorted_strs[0] == sorted_strs[idx]:
                    paired_strs_sub.append(strs[sorted_idx[idx]])
                    del sorted_strs[idx]
                    del sorted_idx[idx]
                else: 
                    idx+=1
            del sorted_strs[0]
            del sorted_idx[0]
            paired_strs.append(paired_strs_sub)
        return paired_strs

if __name__ == '__main__':
    strs = ["eat","tea","tan","ate","nat","bat"]
    sol=SolutionV2()
    res=sol.groupAnagrams(strs)
    print(res)
    print("nice")
    
        
        
        
        
        