

function isAnagram(s: string, t: string): boolean {
    // not same amount of letters
    if (s.length !== t.length) {
        return false;
    }
    let sDict = {}
    for (const letter of s) {
        sDict[letter] = (sDict[letter] || 0) + 1;
    }
    for (const letter of t) {
        if (sDict[letter] && sDict[letter] > 0) {
            sDict[letter] -= 1;
        } else {
            return false;
        }
    }
    return true
};


// memory better example ------------------------
// const getMap = (s: string)=>{
//     const map = new Map();
//     for(let i =0; i < s.length; i++){
//         if(map.has(s[i])){
//             map.set(s[i], map.get(s[i]) + 1);
//         } else {
//             map.set(s[i], 1);
//         }
//     }
//     return map;
// }

// function isAnagram(s: string, t: string): boolean {
//     let sMap = getMap(s);
//     let tMap = getMap(t);

//     if(sMap.size !== tMap.size){
//         return false;
//     }

//     for(let [key, frequency] of sMap){
//         if(sMap.get(key) !== tMap.get(key)){
//             return false;
//         }
//     }

//     return true;

// };


// CPU better example ------------------------
// function isAnagram(s: string, t: string): boolean {
//     const sLen = s.length, tLen = t.length

//     if (sLen !== tLen) { return false }

//     const freq = new Array(26).fill(0)

//     for(let i = 0; i < sLen; i++) {
//         freq[s.charCodeAt(i) - 97]++
//         freq[t.charCodeAt(i) - 97]--
//     }
//     return freq.every(num => num === 0)
// };