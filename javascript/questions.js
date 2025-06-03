const arr = [3, 4, 1, 2, 5];

function removeDuplicates(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      remove(arr, i--);
    } else {
      map[arr[i]] = true;
    }
  }
}

function remove(arr, index) {
  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length--;
}

function findLargest(arr) {
  let largest = -Infinity;
  let sLargest = -Infinity;
  let tLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      tLargest = sLargest;
      sLargest = largest;
      largest = arr[i];
    } else if (arr[i] > sLargest && arr[i] !== largest) {
      sLargest = arr[i];
    } else if (arr[i] > tLargest && arr[i] !== sLargest) {
      tLargest = arr[i];
    }
  }

  return tLargest === -Infinity ? null : tLargest;
}

function flat(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...flat(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

const reverse = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }

  return arr;
};

console.log(reverse([1, 2, 3, 4, 5, 6]));
