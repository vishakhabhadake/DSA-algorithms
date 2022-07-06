let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
let m = arr1.length;
let n = arr2.length;
intersectionOfArray(arr1, arr2, m, n);

function intersectionOfArray(arr1, arr2, m, n) {
  let i = 0;
  let j = 0;
  let intersection = [];
  while (i < m && j < n) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr1[i]) {
      j++;
    } else {
      intersection.push(arr1[i]);
      i++;
      j++;
    }
  }
  console.log(intersection);
}
