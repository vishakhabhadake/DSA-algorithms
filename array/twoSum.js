/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]. */

var twoSum = function(nums,target){
    let comp = new Map();
    let len = nums.length;
    for(let i=0;i<len;i++){
        
        if(comp[nums[i]] >=0){
            return [comp[nums[i]],i]
        }
        comp[target - nums[i]] = i;
    }
}
let nums = [2,7,11,15];
let target = 9;
console.log(twoSum(nums, target))