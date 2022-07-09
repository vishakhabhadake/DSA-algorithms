let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
let m = arr1.length;
let n = arr2.length;
arrayUnion(arr1, arr2, m, n);
/* Function prints union of arr1[] and arr2[]
	m is the number of elements in arr1[]
	n is the number of elements in arr2[] */
function arrayUnion(arr1, arr2, m, n) {
  let union = [];
  let i = 0;
  let j = 0;

  while (i < m && j < n) {
    if (arr1[i] < arr2[j]) {
      union.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i]) {
      union.push(arr2[j]);
      j++;
    } else {
      union.push(arr2[j]);
      j++;
      i++;
    }
    
    
  }
  /* Print remaining elements of
		the larger array */
  while (i < m) {
    union.push(arr1[i]);
    i++;
  }
  while (j < n) {
    union.push(arr2[j]);
    j++;
  }
  console.log(union);
  return 0; 
}

// JavaScript program to find union of
// two sorted arrays

/* Function prints union of arr1[] and arr2[]
	m is the number of elements in arr1[]
	n is the number of elements in arr2[] */
// function printUnion(arr1, arr2, m, n) {
//   var i = 0,
//     j = 0;
//   while (i < m && j < n) {
//     if (arr1[i] < arr2[j]) {
//       console.log(arr1[i] + " ");
//       i++;
//     } else if (arr2[j] < arr1[i]) {
//       console.log(arr2[j] + " ");
//       j++;
//     } else {
//       console.log(arr2[j] + " ");
//       j++;
//       i++;
//     }
//   }

//   /* Print remaining elements of
// 		the larger array */
//   while (i < m) {
//     console.log(arr1[i] + " ");
//     i++;
//   }
//   while (j < n) {
//     console.log(arr2[j] + " ");
//     j++;
//   }

//   return 0;
// }

// var arr1 = [1, 2, 4, 5, 6];
// var arr2 = [2, 3, 5, 7];
// var m = arr1.length;
// var n = arr2.length;
// printUnion(arr1, arr2, m, n);

// this code is contributed by shivanisinghss2110
