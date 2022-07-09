var removeElement = function(nums, val) {
    let left = 0;
    let right = 0;
    let len = nums.length;
    
   while(right < len){
       if(nums[right] != val){
           nums[left] = nums[right];
           left++;
           
       }
       right++;
       
   }
    console.log(nums)
    return left;
};