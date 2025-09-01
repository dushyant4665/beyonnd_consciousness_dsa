// Maximum Subarray Sum (Kadane's Algorithm)
// Find the maximum sum of a contiguous subarray

function maxSubArray(nums) {
    if (nums.length === 0) return 0;
    
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        // Either extend the previous subarray or start a new one
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        
        // Update the overall maximum
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
}

// Test it
let arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(arr1)); // 6 (subarray [4, -1, 2, 1])

let arr2 = [1, 2, 3, 4];
console.log(maxSubArray(arr2)); // 10 (entire array)

let arr3 = [-1, -2, -3];
console.log(maxSubArray(arr3)); // -1 (just the first element)