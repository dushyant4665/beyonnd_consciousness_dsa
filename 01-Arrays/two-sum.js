// Two Sum Problem
// Find two numbers that add up to target

function twoSum(nums, target) {
    // Use hash map to store numbers we've seen
    let seen = {};
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        // If we've seen the complement before, we found our pair
        if (seen.hasOwnProperty(complement)) {
            return [seen[complement], i];
        }
        
        // Store current number and its index
        seen[nums[i]] = i;
    }
    
    return []; // No solution found
}

// Test it
let numbers = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(numbers, target)); // [0, 1]

// Another test
let nums2 = [3, 2, 4];
let target2 = 6;
console.log(twoSum(nums2, target2)); // [1, 2]
