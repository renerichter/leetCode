function createDictFromEl(el:string):Object{
    let elDict = {}
    for(const char of el){
        elDict[char]=(elDict[char] | 0)+1;
    }
    return elDict
}

function createDict(strs:string[]): Object{
    let strsDict = {}
    for(const el of strs){
        strsDict[el] = createDictFromEl(el)
    }
    return strsDict
}
function testAnagram(base:Object,compare:Object):boolean{
    for(const char in compare){
        base[char]=(base[char]-1 | -1000);
    }
    let sum=0
    for(const char in base){
        sum+=base[char]
    }
    if(sum!=0){return false}
    return true
}

function groupAnagrams(strs: string[]): string[][] {
  let groupedAna = []
  let strsDict = createDict(strs)
  let elPos = 0
  for(const base of strs){
    let subArray:string[] = [base,]
    if(strs[base]!=undefined){
        for(const compare of strs){
            if(testAnagram(base,compare)){
                subArray.push(compare)
                delete strs[compare]
                delete strs[base]
            }
        }
    }
    groupedAna.push(subArray)
  }
  
  return groupedAna
  // delete strs[key]  
};