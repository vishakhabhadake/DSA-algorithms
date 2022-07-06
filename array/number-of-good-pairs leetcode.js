/*
Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
*/

var numIdenticalPairs = function(nums) {
    let map = new Map();
    let ans = 0;
    for(let i=0;i< nums.length;i++){
        if(map.has(nums[i])){
            ans = ans + map.get(nums[i]);
            map.set(nums[i], map.get(nums[i]) + 1);
        }else {
            map.set(nums[i],1);
        }
    }
    return ans;
};