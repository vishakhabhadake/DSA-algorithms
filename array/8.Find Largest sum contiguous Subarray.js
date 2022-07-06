// Largest Sum Contiguous Subarray

let arr = [1,2,3,5,-1];

largestSubArraySum(arr);
function largestSubArraySum(arr) {
  let max_so_far = 0
  console.log(arr);
  let max_for_now = 0;
  for (let i = 0; i < arr.length; i++) {
    max_for_now = max_for_now + arr[i];
    // console.log(arr[i]);
    if (max_so_far < max_for_now) {
      max_so_far = max_for_now;
    }
    if (max_for_now < 0) {
      max_for_now = 0;
    }
  }
  console.log(max_so_far);
}
