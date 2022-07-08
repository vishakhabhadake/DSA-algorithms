/**
 * @param {number[]} nums
 * @return {number}
 * 
152. Maximum Product Subarray
 Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.

 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 */
var maxProduct = function(nums) {
    let len = nums.length;
    if(len == 1){
        return nums[0];
    }
    let maxProductSoFar = 0 ;  // takes care of -ve * -ve * -ve or -ve number scenario
    let currProduct = 1;
    
    for(let i=0;i<len;i++){   
       if(nums[i]!=0)  {
           currProduct = currProduct * nums[i];
           if(currProduct > maxProductSoFar){
               maxProductSoFar = currProduct;
           }
       }else{
           currProduct = 1;
       }
    }
    
    currProduct = 1;
    for(let i=len-1; i>=0;i--){
         if(nums[i]!=0)  {
           currProduct = currProduct * nums[i];
           if(currProduct > maxProductSoFar){
               maxProductSoFar = currProduct;
           }
       }else{
           currProduct = 1;
       }
    }
    return maxProductSoFar;
};