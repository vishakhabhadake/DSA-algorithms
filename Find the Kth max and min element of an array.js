// Find the "Kth" max and min element of an array
let arr = [4, 2, 1, 5, 6, 7, 8, 9, 0, -1, 10];
let size = arr.length;
let k = 3;
firstKelements(arr, size, k);
function firstKelements(arr, size, k) {
  // Creating Min Heap for given
  // array with only k elements
  // Create min heap with priority queue

  let minHeap = [];
  for (let i = 0; i < k; i++) {
    minHeap.push(arr[i]);
  }
  // Loop For each element in array
  // after the kth element

  for (let i = k; i < size; i++) {
    minHeap.sort((a, b) => a - b);
    // If current element is smaller
    // than minimum ((top element of
    // the minHeap) element, do nothing
    // and continue to next element

    if (minHeap[minHeap.length - 1] > arr[i]) {
      continue;
    }
    // Otherwise Change minimum element
    // (top element of the minHeap) to
    // current element by polling out
    // the top element of the minHeap
    else {
      minHeap.reverse();
      minHeap.pop();
      minHeap.reverse();
      minHeap.push(arr[i]);
    }
  }
  console.log(minHeap);
}
