class Pair {
  constructor() {
    this.min = -1;
    this.max = 100000;
  }
}
function getMinMax(arr, low, high) {
  var minmax = new Pair();
  var minmaxleft = new Pair();
  var minmaxright = new Pair();
  if (low == high) {
    minmax.min = arr[low];
    minmax.max = arr[low];
    return minmax;
  }
  if (high == low + 1) {
    if (arr[low] < arr[high]) {
      minmax.min = arr[low];
      minmax.max = arr[high];
    } else {
      minmax.min = arr[high];
      minmax.max = arr[low];
    }
    return minmax;
  }

  let mid = parseInt((low + high) / 2);
  minmaxleft = getMinMax(arr, low, mid);
  minmaxright = getMinMax(arr, mid + 1, high);

  if (minmaxleft.min < minmaxright.min) {
    minmax.min = minmaxleft.min;
  } else {
    minmax.min = minmaxright.min;
  }

  if (minmaxleft.max > minmaxright.max) {
    minmax.max = minmaxleft.max;
  } else {
    minmax.max = minmaxright.max;
  }

  return minmax;
}

let arr = [3, 900 , 100,5,6,7,8,9,0,11,111,223,456];
let low = 0;
let high = arr.length - 1;
console.log(getMinMax(arr, low, high));
