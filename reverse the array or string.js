reverseArray([1, 2, 3,4,5,6,7,8,9,0]);
function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;
  let temp;
  console.log(start, end);
  while (start < end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  console.log("arr", arr);
}

