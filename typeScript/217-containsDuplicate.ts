// v1 == brute force -> O(n^2)
// v2 == recursive + centered split + combine with & + compare at length==1 -> O(n log(n)) -> not working!
// v3 = quicksort, break if double value 

function sortArray(nums: number[]): number[] {
    let pivotElement = nums[nums.length - 1]
    let posLastInserted = 0
    //console.log(nums)
    if (nums.length > 1) {
        for (let i: number = 0; i < nums.length - 1; i++) {
            if (nums[i] <= pivotElement && i > 0) {
                let placeHolder = nums[i]
                nums[i - 1] = nums[i]
                nums[i] = placeHolder
                posLastInserted = i
            }
        }
        return sortArray(nums.slice(0, posLastInserted).concat(pivotElement)).concat(sortArray(nums.slice(posLastInserted, nums.length - 1)))
    }
    else {
        return nums
    }
}

function solveWithQuicksort(nums: number[]): boolean {
    let numsNew: number[] = sortArray(nums)
    //console.log(numsNew)
    for (let i = 1; i < numsNew.length - 1; i++) {
        if (numsNew[i] === numsNew[i - 1]) {
            return true
        }
    }
    return false
}
function solveWithBruteForce(nums: number[]): boolean {
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            //console.log("j=",j,", i=",i,", nums[j]=",nums[j],", nums[i]=",nums[i])
            if (nums[j] === nums[i]) {
                return true
            }
        }
    }
    return false
}
function solveWithSimpleSort(nums: number[]): boolean {
    const numsSorted = nums.sort((a, b) => a - b)
    const nbrSameEl = numsSorted.reduce((acc, val, idx) => acc + Number(val === numsSorted[idx + 1]), 0,);
    if (nbrSameEl > 0) { return true }
    return false
}
function solveWithSet(nums: number[]): boolean {
    const numsSet = new Set(nums);
    return Boolean(nums.length - numsSet.size);
}
function solveWithMap(nums: number[]): boolean {
    let numsCounts = {};
    for (const val of nums) {
        numsCounts[val] = (numsCounts[val] || 0) + 1;
    }
    for (const key in numsCounts) {
        if (numsCounts[key] > 1) { return true };
    }
    return false;
}

function containsDuplicate(nums: number[]): boolean {
    let selector = 4;
    switch (selector) {
        case 0: return solveWithBruteForce(nums);
        case 1: return solveWithQuicksort(nums);
        case 2: return solveWithSet(nums);
        case 3: return solveWithSimpleSort(nums);
        case 4: return solveWithMap(nums);
        default: throw new Error("No proper method selected");
    }
};