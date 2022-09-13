function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j].points > arr1[i].points) {
      results.push(arr2[j]);
      j++;
    } else {
      results.push(arr1[i]);
      i++;
    }
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  return results;
}

// Recrusive Merge Sort
export default function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
