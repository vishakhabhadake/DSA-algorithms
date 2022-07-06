/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=> a-b);
    let len = nums.length;
    let results = [];
    for(let i=0;i<len;i++){
        if(i>0 && nums[i] === nums[i-1]) continue;
        let target = 0 - nums[i];
        let left = i+1;
        let right = nums.length - 1;
        while(left<right){
            let sum = nums[left]+nums[right];
            if(sum > target){
                right --;
            }else if(sum < target){
                left++;
            }else{
                results.push([nums[i], nums[left], nums[right]]);
                while(nums[left] == nums[left+1]) left++;
                while(nums[right] == nums[right-1]) right--;
                left++;
                right--;
            }
            
        }
    }
    return results
};