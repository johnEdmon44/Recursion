const unsortedArray = [4, 2, 9, 1, 5, 7, 3, 8, 6]

function mergeSort(arr) {
  if(arr.length <= 1) {
    return arr;
  }
  const split = Math.trunc(arr.length / 2);
  const left = arr.slice(0, split)
  const right = arr.slice(split)

  return merge(mergeSort(left), mergeSort(right))
}


function merge(left, right) {
  let result = [];
  let l = 0;
  let r = 0;

  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l]);
      l++;
    } else {
      result.push(right[r]);
      r++;
    }
  }

  return result
  .concat(left.slice([l]))
  .concat(right.slice([r]));
}

console.log(mergeSort(unsortedArray))