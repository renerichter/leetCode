from typing import List


class Solution:
    def encode(self, strs: List[str]) -> str:
        # --- v1 ---
        return " ".join(strs)
    
        # --- v2 ---
        
        
    def decode(self, s: str) -> List[str]:
        # --- v1 ---
        if len(s)>0: 
            return s.split(" ")
        return []

a = Solution()
strs=["neet","code","love","you"]
strsEncode = a.encode(strs)
strsDecode = a.decode(strsEncode)
print(strsEncode)
print(strsDecode)
print("nice")