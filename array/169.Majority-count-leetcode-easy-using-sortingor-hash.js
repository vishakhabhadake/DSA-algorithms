/*
169. Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2


*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// with Boyer-Moore Voting Algorithm
// var majorityElement = function(nums) {
//     let count = 0;
//     let candidate = nums[0];
//     for(let i=0;i<nums.length;i++){
//         if(count==0){
//             candidate = nums[i];
//         }
//         if(nums[i]==candidate){
//             count= count+1;
//         }else{
//             count = count-1;
//         }
//     }
//     return candidate;
// };


// with sorting
var majorityElement = function(nums) {
    nums.sort();
    return nums[Math.floor(nums.length/2)]
};

// with HashMap

// var majorityElement = function(nums) {
//     let majCount = nums.length/2;
//     let map = new Map();
//     for(let i=0;i<nums.length;i++){
//         if(!map.has(nums[i])){
//             map.set(nums[i],1);
//         }else{
//             map.set(nums[i],map.get(nums[i])+1);
//         }
//     }
//     let ans;
//  map.forEach((x,key)=>{
//      console.log(key,' ',majCount)
//      if(map.get(key)>majCount){
//          ans = key;
//          break;
//      } 
//         return ans
//  })

//     // console.log(map.length);
// };

