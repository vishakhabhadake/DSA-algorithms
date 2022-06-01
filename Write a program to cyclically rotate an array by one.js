rotate([1, 2, 3]);
function rotate(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i != j) {
    let temp;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
  }
  console.log(arr);
}
