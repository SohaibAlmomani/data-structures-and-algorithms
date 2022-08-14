'use strict';

function mergeSort(arr) {
  const n = arr.length;

  if (n > 1) {

    const mid = Math.floor(n / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, n);

    return merge( // merge the sorted left and right sides together
      mergeSort(left), // sort the left side
      mergeSort(right) // sort the right side
    );

  } else {
    return arr;
  }

}

function merge(left, right, arr) {
  arr = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }
  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }

  return arr;
}

module.exports.mergeSort = mergeSort;

/* ....................Pseudo Code.................... */
// ALGORITHM Mergesort(arr)
//     DECLARE n <-- arr.length

//     if n > 1
//       DECLARE mid <-- n/2
//       DECLARE left <-- arr[0...mid]
//       DECLARE right <-- arr[mid...n]
//       // sort the left side
//       Mergesort(left)
//       // sort the right side
//       Mergesort(right)
//       // merge the sorted left and right sides together
//       Merge(left, right, arr)

// ALGORITHM Merge(left, right, arr)
//     DECLARE i <-- 0
//     DECLARE j <-- 0
//     DECLARE k <-- 0

//     while i < left.length && j < right.length
//         if left[i] <= right[j]
//             arr[k] <-- left[i]
//             i <-- i + 1
//         else
//             arr[k] <-- right[j]
//             j <-- j + 1

//         k <-- k + 1

//     if i = left.length
//        set remaining entries in arr to remaining values in right
//     else
//        set remaining entries in arr to remaining values in left
