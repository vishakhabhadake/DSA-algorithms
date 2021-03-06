/*
53. Maximum Subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSumSoFar = nums[0];
    let currSum = nums[0];
    for(let i=1;i<nums.length;i++){
        if(currSum < 0){
            currSum = 0;
        }
        currSum = currSum + nums[i];
        if(currSum > maxSumSoFar){
            maxSumSoFar = currSum;
        }
    }
    
    return maxSumSoFar;
};