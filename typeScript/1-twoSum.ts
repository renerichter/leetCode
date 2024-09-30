function twoSumBruteForce(nums: number[], target: number): number[] {
    let numsSubtract = nums.map(num => num - target);
    let numsMinus = nums.map(num => num * (-1))
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (numsSubtract[i] == numsMinus[j] && i !== j) { return [i, j] }
        }
    }
    return []
}
function twoSumDict(nums: number[], target: number): number[] {
    let numsDict={}
    for (let i = 0; i < nums.length; i++) {
        numsDict[target-nums[i]] = i
    }
    for (let i = 0; i < nums.length; i++) {
        if(numsDict[nums[i]] && numsDict[nums[i]]!==i){return [i,numsDict[nums[i]]]}
    }    
    
    return []
}

function twoSum(nums: number[], target: number): number[] {
    const selector: number = 1;
    // subtract target

    let res: number[]

    //find numbers that switched position
    switch (selector) {
        case 0: res = twoSumBruteForce(nums,target)
        default: res = twoSumDict(nums,target)
    }
    return res
};

// memory better example ------------------------


// CPU better example ------------------------
/* function twoSum(nums: number[], target: number): number[] {
    const hash: { [key: number]: number } = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (hash.hasOwnProperty(complement)) {
            return [hash[complement], i];
        }
        
        hash[nums[i]] = i;
    }

    return [];
} */