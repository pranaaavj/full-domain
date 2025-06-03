class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(value, idx = 0) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    if (this.head && idx == 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    for (let i = 0; i < idx - 1; i++) {
      if (!current) break;
      current = current.next;
    }

    if (!current) {
      return console.log('Index out of bounds');
    }

    if (current === this.tail) {
      current.next = newNode;
      this.tail = newNode;
      return;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  reverse() {
    let current = this.head;
    let previous = null;

    while (current) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.head = previous;
  }

  reverseUsingRecursion(current = this.head, previous = null) {
    if (!current) {
      this.head = previous;
      return;
    }

    let next = current.next;
    current.next = previous;

    this.reverseUsingRecursion(next, current);
  }

  printRecursive(current = this.head) {
    if (!current) return;
    this.printRecursive(current.next);
    console.log(current.val);
  }

  print() {
    let current = this.head;
    let values = '';

    while (current) {
      values += current.val + ' => ';
      current = current.next;
    }

    console.log(values);
  }

  findMiddle() {
    if (!this.head || !this.head.next) return;

    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    console.log(slow.val);
  }

  kthNode(k) {
    if (!this.head) return;

    let fast = this.head;
    for (let i = 0; i < k; i++) {
      if (!fast) return console.log('K is out of bounds');
      fast = fast.next;
    }

    let slow = this.head;
    while (fast) {
      slow = slow.next;
      fast = fast.next;
    }

    if (!slow) return console.log('K out of bounds');

    console.log(slow.val);
  }
}

const ll = new LinkedList();

ll.insert(10, 0);
ll.insert(20, 1);
ll.insert(30, 2);
ll.insert(40, 3);
// ll.insert(50, 4);
// ll.insert(60, 5);
// ll.insert(70, 6);

// ll.reverseUsingRecursion();

ll.printRecursive();
