// Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo
let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];

let arr_size = arr.length;
sort012(arr, arr_size);
function sort012(arr, arr_size) {
  let low = 0;
  let mid = 0;
  let temp = 0;
  let high = arr_size - 1;
  while (mid <= high) {
    if (arr[mid] == 0) {
      let temp = arr[mid];
      arr[mid] = arr[low];
      arr[low] = temp;
      low++;
      mid++;
    } else if (arr[mid] == 1) {
      mid++;
    } else {
      temp = arr[mid];
      arr[mid] = arr[high];
      arr[high] = temp;
      high--;
    }
  }
  console.log(arr)
}
