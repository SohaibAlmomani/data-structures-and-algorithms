'use strict';

exports.insertionSort = (arr) => {

  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = temp;
  }

  return arr;
};

// Pseudocode :
//   InsertionSort(int[] arr)

//     FOR i = 1 to arr.length

//       int j <-- i - 1
//       int temp <-- arr[i]

//       WHILE j >= 0 AND temp < arr[j]
//         arr[j + 1] <-- arr[j]
//         j <-- j - 1

//       arr[j + 1] <-- temp
