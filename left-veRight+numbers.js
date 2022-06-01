let arr = [1, 2, 3, 4, -1, 2, -3, -4, -20, 20, 21, -26];
swapPositiveAndNegative(arr, 0, arr.length - 1);

function swapPositiveAndNegative(arr, left, right) {
  while (left <= right) {
    if (arr[left] < 0 && arr[right] < 0) {
      left++;
    } else if (arr[left] > 0 && arr[right] < 0) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    } else if (arr[left] > 0 && arr[right] > 0) {
      right--;
    } else {
      left++;
      right--;
    }
  }

  console.log(arr);
}
