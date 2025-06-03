class Heap {
  constructor() {
    this.arr = [];
  }

  insert(value) {
    this.arr.push(value);
    this.heapifyUp();
  }

  delete() {
    const removed = this.arr[0];

    this.arr[0] = this.arr.pop();
    this.heapifyDown(0);

    return removed;
  }

  heapSort() {
    for (let i = 0; i < this.arr.length - 1; i++) {
      let last = this.arr.length - 1 - i;
      [this.arr[0], this.arr[last]] = [this.arr[last], this.arr[0]];
      this.heapifyDown(0, last);
    }
  }

  heapifyUp(currIndex = this.arr.length - 1) {
    let parentIndex = Math.floor((currIndex - 1) / 2);

    while (parentIndex >= 0 && this.arr[currIndex] > this.arr[parentIndex]) {
      [this.arr[currIndex], this.arr[parentIndex]] = [
        this.arr[parentIndex],
        this.arr[currIndex],
      ];
      currIndex = parentIndex;
      parentIndex = Math.floor((currIndex - 1) / 2);
    }
  }

  heapifyDown(index, length = this.arr.length - 1) {
    while (index < length) {
      let largest = index;
      let left = 2 * index + 1;
      let right = 2 * index + 2;

      if (left < length && this.arr[left] > this.arr[largest]) {
        largest = left;
      }

      if (right < length && this.arr[right] > this.arr[largest]) {
        largest = right;
      }

      if (largest == index) return;

      [this.arr[index], this.arr[largest]] = [
        this.arr[largest],
        this.arr[index],
      ];

      index = largest;
    }
  }
}

const heap = new Heap();

heap.insert(50);
heap.insert(40);
heap.insert(30);
heap.insert(20);
heap.insert(10);

heap.heapSort();

console.log(heap.arr);
