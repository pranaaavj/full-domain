const arr = [80, 70, 50, 40, 30];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let index = i - 1;

    while (index >= 0 && arr[index] > current) {
      arr[index + 1] = arr[index];
      index--;
    }

    arr[index + 1] = current;
  }
};

insertionSort(arr);

console.log(arr);
